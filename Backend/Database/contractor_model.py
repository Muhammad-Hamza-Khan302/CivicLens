from sqlalchemy import Column, String, Float, Integer, Text

from Backend.Database.database import Base


class ContractorDB(Base):
    __tablename__ = "contractors"

    contractor_id = Column(
        String(50),
        primary_key=True,
        index=True
    )

    company_name = Column(
        String(200),
        nullable=False
    )

    contact_email = Column(
        String(150),
        nullable=False
    )

    specialization = Column(
        Text,
        nullable=False
    )

    rating = Column(
        Float,
        nullable=False,
        default=0.0
    )

    completed_projects = Column(
        Integer,
        nullable=False,
        default=0
    )