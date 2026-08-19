from sqlalchemy import Column, String, Integer, Text

from Backend.Database.database import Base


class DecisionDB(Base):
    __tablename__ = "decisions"

    decision_id = Column(
        String(50),
        primary_key=True,
        index=True
    )

    report_id = Column(
        String(50),
        nullable=False,
        index=True
    )

    priority = Column(
        String(50),
        nullable=False
    )

    recommended_action = Column(
        Text,
        nullable=False
    )

    reasoning = Column(
        Text,
        nullable=False
    )

    policy_references = Column(
        Text,
        nullable=True
    )

    estimated_urgency_days = Column(
        Integer,
        nullable=False
    )