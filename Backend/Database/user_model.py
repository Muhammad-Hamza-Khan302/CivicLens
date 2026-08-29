from sqlalchemy import Column, String

from Backend.Database.database import Base


class UserDB(Base):
    __tablename__ = "users"

    user_id = Column(
        String(50),
        primary_key=True,
        index=True
    )

    name = Column(
        String(100),
        nullable=False
    )

    email = Column(
        String(150),
        nullable=False,
        unique=True,
        index=True
    )

    password_hash = Column(
        String(255),
        nullable=False
    )

    role = Column(
        String(50),
        nullable=False,
        default="citizen"
    )