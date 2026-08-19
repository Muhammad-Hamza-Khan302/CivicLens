from enum import Enum
from pydantic import BaseModel


class IssueType(str, Enum):
    POTHOLE = "pothole"
    GARBAGE = "garbage"
    DRAINAGE = "drainage"
    STREETLIGHT = "streetlight"
    ROAD_DAMAGE = "road_damage"
    OTHER = "other"


class Severity(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"


class Issue(BaseModel):
    issue_id: str
    report_id: str
    issue_type: IssueType
    severity: Severity
    confidence: float
    description: str