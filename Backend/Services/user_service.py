from sqlalchemy.orm import Session

from Backend.Models.user import User
from Backend.Database.user_model import UserDB


def create_user(
    user: User,
    db: Session
) -> User:
    """
    Create a CivicLens user and save it to the database.
    """

    db_user = UserDB(
        user_id=user.user_id,
        name=user.name,
        email=user.email,
        role=user.role.value
    )

    db.add(db_user)
    db.commit()
    db.refresh(db_user)

    return user


def get_all_users(
    db: Session
):
    """
    Get all CivicLens users.
    """

    return db.query(UserDB).all()


def get_user_by_id(
    user_id: str,
    db: Session
):
    """
    Get one user by user ID.
    """

    return db.query(UserDB).filter(
        UserDB.user_id == user_id
    ).first()