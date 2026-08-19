from enum import Enum
from pydantic import BaseModel


class UserRole(str, Enum):
    CITIZEN = "citizen"
    GOVERNMENT = "government"
    ADMIN = "admin"


class User(BaseModel):
    user_id: str
    name: str
    email: str
    role: UserRole