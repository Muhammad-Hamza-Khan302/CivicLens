from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
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


class UpdateUserRoleRequest(BaseModel):
    role: str


def user_to_dict(user):
    return {
        "user_id": user.user_id,
        "name": user.name,
        "email": user.email,
        "role": user.role
    }


@router.get("/me")
def get_my_profile(
    current_user: UserDB = Depends(get_current_user)
):
    return {
        "message": "Current user retrieved successfully",
        "user": user_to_dict(current_user)
    }


@router.get("/")
def get_users(
    db: Session = Depends(get_db),
    current_user: UserDB = Depends(require_admin)
):
    users = (
        db.query(UserDB)
        .order_by(UserDB.name)
        .all()
    )

    return {
        "message": "Users retrieved successfully",
        "count": len(users),
        "users": [
            user_to_dict(user)
            for user in users
        ]
    }


@router.get("/{user_id}")
def get_user(
    user_id: str,
    db: Session = Depends(get_db),
    current_user: UserDB = Depends(require_admin)
):
    user = (
        db.query(UserDB)
        .filter(
            UserDB.user_id == user_id
        )
        .first()
    )

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    return {
        "message": "User retrieved successfully",
        "user": user_to_dict(user)
    }


@router.put("/{user_id}/role")
def update_user_role(
    user_id: str,
    data: UpdateUserRoleRequest,
    db: Session = Depends(get_db),
    current_user: UserDB = Depends(require_admin)
):
    new_role = (
        data.role
        .lower()
        .strip()
    )

    allowed_roles = {
        "citizen",
        "government",
        "admin"
    }

    if new_role not in allowed_roles:
        raise HTTPException(
            status_code=400,
            detail=(
                "Invalid role. Allowed roles: "
                "citizen, government, admin"
            )
        )

    user = (
        db.query(UserDB)
        .filter(
            UserDB.user_id == user_id
        )
        .first()
    )

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    if user.user_id == current_user.user_id:
        raise HTTPException(
            status_code=400,
            detail="You cannot change your own role"
        )

    if user.role == new_role:
        return {
            "message": "User already has this role",
            "user": user_to_dict(user)
        }

    user.role = new_role

    db.commit()
    db.refresh(user)

    return {
        "message": "User role updated successfully",
        "user": user_to_dict(user)
    }