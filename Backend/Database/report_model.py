from sqlalchemy import Column, String, Float, Text

from Backend.Database.database import Base


class ReportDB(Base):
    __tablename__ = "reports"

    report_id = Column(
        String(50),
        primary_key=True,
        index=True
    )

    citizen_id = Column(
        String(50),
        nullable=False
    )

    description = Column(
        Text,
        nullable=False
    )

    image_url = Column(
        String(500),
        nullable=True
    )

    latitude = Column(
        Float,
        nullable=False
    )

    longitude = Column(
        Float,
        nullable=False
    )

    address = Column(
        String(255),
        nullable=True
    )

    status = Column(
        String(50),
        nullable=False
    )