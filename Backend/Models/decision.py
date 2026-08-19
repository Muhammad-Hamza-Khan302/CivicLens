from enum import Enum
from pydantic import BaseModel
from typing import List


class Priority(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"


class Decision(BaseModel):
    decision_id: str
    report_id: str
    priority: Priority
    recommended_action: str
    reasoning: str
    policy_references: List[str] = []
    estimated_urgency_days: int