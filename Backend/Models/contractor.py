from pydantic import BaseModel
from typing import List


class Contractor(BaseModel):
    contractor_id: str
    company_name: str
    contact_email: str
    specialization: List[str]
    rating: float = 0.0
    completed_projects: int = 0