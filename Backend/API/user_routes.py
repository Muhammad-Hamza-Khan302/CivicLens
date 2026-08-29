from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from Backend.Database.database import get_db
from Backend.Database.user_model import UserDB
from Backend.Services.security_service import (
    get_current_user,
    require_admin
)


router = APIRouter(
    prefix="/users",
    tags=["Users"]
)


# ============================================================
# GET CURRENT USER
# ============================================================

@router.get("/me")
def get_my_profile(
    current_user: UserDB = Depends(get_current_user)
):

    return {
        "message": "Current user retrieved successfully",

        "user": {
            "user_id": current_user.user_id,
            "name": current_user.name,
            "email": current_user.email,
            "role": current_user.role
        }
    }


# ============================================================
# GET ALL USERS
# ADMIN ONLY
# ============================================================

@router.get("/")
def get_users(
    db: Session = Depends(get_db),
    current_user: UserDB = Depends(require_admin)
):

    users = db.query(UserDB).all()

    return {
        "message": "Users retrieved successfully",

        "count": len(users),

        "users": [
            {
                "user_id": user.user_id,
                "name": user.name,
                "email": user.email,
                "role": user.role
            }

            for user in users
        ]
    }


# ============================================================
# GET USER BY ID
# ADMIN ONLY
# ============================================================

@router.get("/{user_id}")
def get_user(
    user_id: str,
    db: Session = Depends(get_db),
    current_user: UserDB = Depends(require_admin)
):

    user = db.query(UserDB).filter(
        UserDB.user_id == user_id
    ).first()

    if not user:

        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    return {
        "message": "User retrieved successfully",

        "user": {
            "user_id": user.user_id,
            "name": user.name,
            "email": user.email,
            "role": user.role
        }
    }