from sqlalchemy import inspect, text

from Backend.Database.database import Base, engine

from Backend.Database.user_model import UserDB
from Backend.Database.report_model import ReportDB
from Backend.Database.issue_model import IssueDB
from Backend.Database.decision_model import DecisionDB
from Backend.Database.project_model import ProjectDB
from Backend.Database.contractor_model import ContractorDB


print("Creating CivicLens database tables...")

Base.metadata.create_all(
    bind=engine
)

print("Base tables checked.")


# ============================================================
# REPORT TABLE MIGRATION
# ============================================================

inspector = inspect(engine)

existing_columns = {
    column["name"]
    for column in inspector.get_columns(
        "reports"
    )
}


new_columns = {

    "priority":
        "VARCHAR(50) NULL",

    "department":
        "VARCHAR(150) NULL",

    "government_notes":
        "TEXT NULL",

    "rejection_reason":
        "TEXT NULL",

    "information_request":
        "TEXT NULL"

}


with engine.begin() as connection:

    for column_name, column_definition in new_columns.items():

        if column_name not in existing_columns:

            connection.execute(
                text(
                    f"""
                    ALTER TABLE reports
                    ADD {column_name}
                    {column_definition}
                    """
                )
            )

            print(
                f"Added reports.{column_name}"
            )


print(
    "CivicLens database setup completed successfully."
)