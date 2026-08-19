from enum import Enum
from pydantic import BaseModel
from typing import Optional


class ProjectStatus(str, Enum):
    PROPOSED = "proposed"
    APPROVED = "approved"
    BIDDING = "bidding"
    ASSIGNED = "assigned"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"


class Project(BaseModel):
    project_id: str
    report_id: str
    title: str
    description: str
    estimated_budget: Optional[float] = None
    status: ProjectStatus = ProjectStatus.PROPOSED
    assigned_contractor_id: Optional[str] = None