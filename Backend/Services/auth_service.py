from datetime import datetime, timedelta, timezone

from jose import jwt
from passlib.context import CryptContext
from sqlalchemy.orm import Session

from Backend.Database.user_model import UserDB
from Backend.Config.settings import settings


SECRET_KEY = settings.JWT_SECRET_KEY

ALGORITHM = "HS256"

ACCESS_TOKEN_EXPIRE_MINUTES = 60


pwd_context = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto"
)
from datetime import datetime, timedelta, timezone

from jose import jwt
from passlib.context import CryptContext
from sqlalchemy.orm import Session

from Backend.Database.user_model import UserDB
from Backend.Config.settings import settings


# ============================================================
# JWT CONFIGURATION
# ============================================================

SECRET_KEY = settings.JWT_SECRET_KEY
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60


# ============================================================
# PASSWORD HASHING
# ============================================================

pwd_context = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto"
)


def hash_password(password: str) -> str:
    """
    Hash a plain-text password before storing it in the database.
    """

    return pwd_context.hash(password)


def verify_password(
    plain_password: str,
    hashed_password: str
) -> bool:
    """
    Check whether a plain-text password matches
    the stored password hash.
    """

    return pwd_context.verify(
        plain_password,
        hashed_password
    )


# ============================================================
# USER AUTHENTICATION
# ============================================================

def authenticate_user(
    email: str,
    password: str,
    db: Session
):
    """
    Find a user by email and verify their password.

    Returns:
        UserDB object if authentication succeeds.
        None if authentication fails.
    """

    user = db.query(UserDB).filter(
        UserDB.email == email
    ).first()

    if not user:
        return None

    if not verify_password(
        password,
        user.password_hash
    ):
        return None

    return user


# ============================================================
# JWT ACCESS TOKEN
# ============================================================

def create_access_token(
    user_id: str,
    role: str
) -> str:
    """
    Create a JWT access token containing
    the user's ID and role.
    """

    expire = datetime.now(
        timezone.utc
    ) + timedelta(
        minutes=ACCESS_TOKEN_EXPIRE_MINUTES
    )

    payload = {
        "sub": user_id,
        "role": role,
        "exp": expire
    }

    token = jwt.encode(
        payload,
        SECRET_KEY,
        algorithm=ALGORITHM
    )

    return token

