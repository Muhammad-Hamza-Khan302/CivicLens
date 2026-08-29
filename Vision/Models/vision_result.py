from enum import Enum
from pydantic import BaseModel


class SafetyRisk(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"


class VisionResult(BaseModel):
    issue_type: str
    severity: str
    confidence: float
    description: str
    safety_risk: SafetyRisk