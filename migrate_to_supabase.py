
import os
from urllib.parse import quote_plus

from dotenv import load_dotenv
from sqlalchemy import create_engine, MetaData, select, text, func

load_dotenv()

LOCAL_DB_SERVER = os.getenv("LOCAL_DB_SERVER")
LOCAL_DB_NAME = os.getenv("LOCAL_DB_NAME")
LOCAL_DB_USER = os.getenv("LOCAL_DB_USER")
LOCAL_DB_PASSWORD = os.getenv("LOCAL_DB_PASSWORD")
LOCAL_DB_DRIVER = os.getenv("LOCAL_DB_DRIVER")
SUPABASE_DATABASE_URL = os.getenv("DATABASE_URL")

if not LOCAL_DB_SERVER:
    raise ValueError("LOCAL_DB_SERVER is not set in .env")

if not LOCAL_DB_NAME:
    raise ValueError("LOCAL_DB_NAME is not set in .env")

if not LOCAL_DB_USER:
    raise ValueError("LOCAL_DB_USER is not set in .env")

if not LOCAL_DB_PASSWORD:
    raise ValueError("LOCAL_DB_PASSWORD is not set in .env")

if not LOCAL_DB_DRIVER:
    raise ValueError("LOCAL_DB_DRIVER is not set in .env")

if not SUPABASE_DATABASE_URL:
    raise ValueError("DATABASE_URL is not set in .env")


local_connection_string = (
    f"DRIVER={{{LOCAL_DB_DRIVER}}};"
    f"SERVER={LOCAL_DB_SERVER};"
    f"DATABASE={LOCAL_DB_NAME};"
    f"UID={LOCAL_DB_USER};"
    f"PWD={LOCAL_DB_PASSWORD};"
    f"TrustServerCertificate=yes;"
)

local_database_url = (
    "mssql+pyodbc:///?odbc_connect="
    + quote_plus(local_connection_string)
)

local_engine = create_engine(
    local_database_url,
    echo=False,
    pool_pre_ping=True
)

supabase_engine = create_engine(
    SUPABASE_DATABASE_URL,
    echo=False,
    pool_pre_ping=True
)


tables = [
    "users",
    "reports",
    "issues",
    "decisions",
    "projects",
    "contractors"
]


primary_keys = {
    "users": "user_id",
    "reports": "report_id",
    "issues": "issue_id",
    "decisions": "decision_id",
    "projects": "project_id",
    "contractors": "contractor_id"
}


expected_counts = {
    "users": 9,
    "reports": 6,
    "issues": 4,
    "decisions": 4,
    "projects": 3,
    "contractors": 3
}


def check_connections():
    print("Checking local SQL Server connection...")

    with local_engine.connect() as connection:
        connection.execute(text("SELECT 1"))

    print("LOCAL SQL SERVER CONNECTION SUCCESS")

    print()
    print("Checking Supabase connection...")

    with supabase_engine.connect() as connection:
        connection.execute(text("SELECT 1"))

    print("SUPABASE CONNECTION SUCCESS")


def get_local_data():
    metadata = MetaData()

    metadata.reflect(
        bind=local_engine,
        only=tables
    )

    data = {}

    with local_engine.connect() as connection:
        for table_name in tables:
            table = metadata.tables[table_name]

            rows = connection.execute(
                select(table)
            ).mappings().all()

            data[table_name] = [dict(row) for row in rows]

            print(
                f"LOCAL {table_name}: "
                f"{len(rows)} records"
            )

    return data


def migrate_data(data):
    metadata = MetaData()

    metadata.reflect(
        bind=supabase_engine,
        only=tables
    )

    print()
    print("Starting data migration...")

    with supabase_engine.begin() as connection:

        for table_name in tables:
            table = metadata.tables[table_name]
            rows = data[table_name]

            if not rows:
                print(
                    f"{table_name}: no records to migrate"
                )
                continue

            primary_key = primary_keys[table_name]

            existing_ids = set(
                connection.execute(
                    select(table.c[primary_key])
                ).scalars().all()
            )

            new_rows = [
                row
                for row in rows
                if row[primary_key] not in existing_ids
            ]

            if new_rows:
                connection.execute(
                    table.insert(),
                    new_rows
                )

            print(
                f"{table_name}: "
                f"{len(new_rows)} inserted, "
                f"{len(rows) - len(new_rows)} already existed"
            )

    print()
    print("DATA MIGRATION COMPLETE")


def verify_migration():
    print()
    print("Verifying Supabase data...")

    metadata = MetaData()

    metadata.reflect(
        bind=supabase_engine,
        only=tables
    )

    all_correct = True

    with supabase_engine.connect() as connection:

        for table_name in tables:
            table = metadata.tables[table_name]

            count = connection.execute(
                select(func.count()).select_from(table)
            ).scalar_one()

            expected = expected_counts[table_name]

            print(
                f"SUPABASE {table_name}: "
                f"{count} records "
                f"(expected {expected})"
            )

            if count != expected:
                all_correct = False

    print()

    if all_correct:
        print("ALL DATA VERIFIED SUCCESSFULLY")
    else:
        print("DATA VERIFICATION FAILED")


if __name__ == "__main__":
    print("=" * 60)
    print("CIVICLENS LOCAL SQL SERVER → SUPABASE MIGRATION")
    print("=" * 60)

    check_connections()

    data = get_local_data()

    migrate_data(data)

    verify_migration()

    local_engine.dispose()
    supabase_engine.dispose()

    print()
    print("=" * 60)
    print("MIGRATION FINISHED")
    print("=" * 60)

