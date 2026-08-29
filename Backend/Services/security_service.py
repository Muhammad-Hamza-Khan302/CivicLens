from fastapi import Depends, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jose import JWTError, jwt
from sqlalchemy.orm import Session

from Backend.Config.settings import settings
from Backend.Database.database import get_db
from Backend.Database.user_model import UserDB


security = HTTPBearer()


# ============================================================
# GET CURRENT USER
# ============================================================

def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db)
):
    token = credentials.credentials

    try:

        payload = jwt.decode(
            token,
            settings.JWT_SECRET_KEY,
            algorithms=[settings.JWT_ALGORITHM]
        )

        user_id = payload.get("sub")

        if not user_id:
            raise HTTPException(
                status_code=401,
                detail="Invalid authentication token"
            )

    except JWTError:

        raise HTTPException(
            status_code=401,
            detail="Invalid or expired authentication token"
        )

    user = db.query(UserDB).filter(
        UserDB.user_id == user_id
    ).first()

    if not user:

        raise HTTPException(
            status_code=401,
            detail="User not found"
        )

    return user


# ============================================================
# ADMIN CHECK
# ============================================================

def require_admin(
    current_user: UserDB = Depends(get_current_user)
):

    if current_user.role != "admin":

        raise HTTPException(
            status_code=403,
            detail="Admin access required"
        )

    return current_user


# ============================================================
# GOVERNMENT OR ADMIN CHECK
# ============================================================

def require_government_or_admin(
    current_user: UserDB = Depends(get_current_user)
):

    if current_user.role not in [
        "government",
        "admin"
    ]:

        raise HTTPException(
            status_code=403,
            detail="Government or admin access required"
        )

    return current_user