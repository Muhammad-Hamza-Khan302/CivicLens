from enum import Enum
from pydantic import BaseModel, EmailStr


class UserRole(str, Enum):
    CITIZEN = "citizen"
    GOVERNMENT = "government"
    ADMIN = "admin"


class User(BaseModel):
    user_id: str
    name: str
    email: EmailStr
    role: UserRole


class SignupRequest(BaseModel):
    name: str
    email: EmailStr
    password: str


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class LoginResponse(BaseModel):
    access_token: str
    token_type: str
    user: User