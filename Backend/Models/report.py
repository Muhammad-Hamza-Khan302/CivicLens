from enum import Enum
from pydantic import BaseModel
from typing import Optional


class ReportStatus(str, Enum):
    SUBMITTED = "submitted"
    REVIEWING = "reviewing"
    INFORMATION_REQUESTED = "information_requested"
    VERIFIED = "verified"
    REJECTED = "rejected"
    ASSIGNED = "assigned"
    IN_PROGRESS = "in_progress"
    RESOLVED = "resolved"


class ReportPriority(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"


class Location(BaseModel):
    latitude: float
    longitude: float
    address: Optional[str] = None


class Report(BaseModel):
    report_id: str
    citizen_id: str
    description: Optional[str] = None
    image_url: Optional[str] = None
    location: Location
    status: ReportStatus = ReportStatus.SUBMITTED
    priority: Optional[ReportPriority] = None
    department: Optional[str] = None
    government_notes: Optional[str] = None
    rejection_reason: Optional[str] = None
    information_request: Optional[str] = None


class RejectReportRequest(BaseModel):
    reason: str


class RequestInformationRequest(BaseModel):
    message: str


class UpdatePriorityRequest(BaseModel):
    priority: ReportPriority


class AssignDepartmentRequest(BaseModel):
    department: str