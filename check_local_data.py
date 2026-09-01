
import os

from dotenv import load_dotenv
from sqlalchemy import create_engine, text
from urllib.parse import quote_plus

load_dotenv()

server = os.getenv("LOCAL_DB_SERVER")
database = os.getenv("LOCAL_DB_NAME")
username = os.getenv("LOCAL_DB_USER")
password = os.getenv("LOCAL_DB_PASSWORD")
driver = os.getenv("LOCAL_DB_DRIVER")

connection_string = (
    f"DRIVER={{{driver}}};"
    f"SERVER={server};"
    f"DATABASE={database};"
    f"UID={username};"
    f"PWD={password};"
    f"TrustServerCertificate=yes;"
)

database_url = (
    "mssql+pyodbc:///?odbc_connect="
    + quote_plus(connection_string)
)

engine = create_engine(database_url)

tables = [
    "users",
    "reports",
    "issues",
    "decisions",
    "projects",
    "contractors"
]

with engine.connect() as connection:
    for table in tables:
        result = connection.execute(
            text(f"SELECT TOP 1 * FROM {table}")
        )

        row = result.mappings().first()

        print()
        print("=" * 60)
        print(table)
        print("=" * 60)
        print(dict(row) if row else "NO DATA")

