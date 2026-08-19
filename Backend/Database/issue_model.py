from sqlalchemy import Column, String, Float, Text

from Backend.Database.database import Base


class IssueDB(Base):
    __tablename__ = "issues"

    issue_id = Column(
        String(50),
        primary_key=True,
        index=True
    )

    report_id = Column(
        String(50),
        nullable=False,
        index=True
    )

    issue_type = Column(
        String(50),
        nullable=False
    )

    severity = Column(
        String(50),
        nullable=False
    )

    confidence = Column(
        Float,
        nullable=False
    )

    description = Column(
        Text,
        nullable=False
    )