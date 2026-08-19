from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from Backend.Database.database import get_db
from Backend.Models.user import User
from Backend.Services.user_service import (
    create_user,
    get_all_users,
    get_user_by_id
)


router = APIRouter(
    prefix="/users",
    tags=["Users"]
)


@router.post("/")
def create_civic_user(
    user: User,
    db: Session = Depends(get_db)
):
    created_user = create_user(
        user,
        db
    )

    return {
        "message": "User created successfully",
        "user": created_user
    }


@router.get("/")
def get_users(
    db: Session = Depends(get_db)
):
    users = get_all_users(db)

    return {
        "message": "Users retrieved successfully",
        "count": len(users),
        "users": users
    }


@router.get("/{user_id}")
def get_user(
    user_id: str,
    db: Session = Depends(get_db)
):
    user = get_user_by_id(
        user_id,
        db
    )

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    return {
        "message": "User retrieved successfully",
        "user": user
    }