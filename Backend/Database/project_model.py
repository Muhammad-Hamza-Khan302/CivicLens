from sqlalchemy import Column, String, Float, Text

from Backend.Database.database import Base


class ProjectDB(Base):
    __tablename__ = "projects"

    project_id = Column(
        String(50),
        primary_key=True,
        index=True
    )

    report_id = Column(
        String(50),
        nullable=False,
        index=True
    )

    title = Column(
        String(200),
        nullable=False
    )

    description = Column(
        Text,
        nullable=False
    )

    estimated_budget = Column(
        Float,
        nullable=True
    )

    status = Column(
        String(50),
        nullable=False
    )

    assigned_contractor_id = Column(
        String(50),
        nullable=True,
        index=True
    )