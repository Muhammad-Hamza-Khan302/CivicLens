
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from Backend.Database.database import get_db
from Backend.Database.user_model import UserDB
from Backend.Models.user import (
    SignupRequest,
    LoginRequest
)
from Backend.Services.auth_service import (
    hash_password,
    authenticate_user,
    create_access_token
)


router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


# ============================================================
# SIGNUP
# ============================================================

@router.post("/signup")
def signup(
    data: SignupRequest,
    db: Session = Depends(get_db)
):
    """
    Register a new citizen account.

    Public signup always creates a citizen.
    Admin/government accounts cannot be created
    through public signup.
    """

    # --------------------------------------------------------
    # Check whether email already exists
    # --------------------------------------------------------

    existing_user = db.query(UserDB).filter(
        UserDB.email == data.email
    ).first()

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email is already registered"
        )

    # --------------------------------------------------------
    # Generate citizen ID
    # --------------------------------------------------------

    user_count = db.query(UserDB).count()

    user_id = f"CIT-{user_count + 1:03d}"

    # --------------------------------------------------------
    # Hash password
    # --------------------------------------------------------

    password_hash = hash_password(
        data.password
    )

    # --------------------------------------------------------
    # Create user
    # --------------------------------------------------------

    new_user = UserDB(
        user_id=user_id,
        name=data.name,
        email=data.email,
        password_hash=password_hash,
        role="citizen"
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    # --------------------------------------------------------
    # Return safe user information
    # --------------------------------------------------------

    return {
        "message": "Citizen account created successfully",
        "user": {
            "user_id": new_user.user_id,
            "name": new_user.name,
            "email": new_user.email,
            "role": new_user.role
        }
    }


# ============================================================
# LOGIN
# ============================================================

@router.post("/login")
def login(
    data: LoginRequest,
    db: Session = Depends(get_db)
):
    """
    Authenticate a CivicLens user
    and return a JWT access token.
    """

    user = authenticate_user(
        data.email,
        data.password,
        db
    )

    if not user:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    # --------------------------------------------------------
    # Create JWT token
    # --------------------------------------------------------

    access_token = create_access_token(
        user_id=user.user_id,
        role=user.role
    )

    # --------------------------------------------------------
    # Return token + safe user information
    # --------------------------------------------------------

    return {
        "message": "Login successful",
        "access_token": access_token,
        "token_type": "bearer",
        "user": {
            "user_id": user.user_id,
            "name": user.name,
            "email": user.email,
            "role": user.role
        }
    }

