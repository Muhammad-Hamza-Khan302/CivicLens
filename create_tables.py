from Backend.Database.database import Base, engine

# Import all database models so SQLAlchemy knows about them
from Backend.Database.user_model import UserDB
from Backend.Database.report_model import ReportDB
from Backend.Database.issue_model import IssueDB
from Backend.Database.decision_model import DecisionDB
from Backend.Database.project_model import ProjectDB
from Backend.Database.contractor_model import ContractorDB


print("Creating CivicLens database tables...")

Base.metadata.create_all(bind=engine)

print("Database tables created successfully.")