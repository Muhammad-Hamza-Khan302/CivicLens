from enum import Enum
from pydantic import BaseModel, Field
from typing import Optional


class ReportStatus(str, Enum):
    SUBMITTED = "submitted"
    PROCESSING = "processing"
    ANALYZED = "analyzed"
    VERIFIED = "verified"
    RESOLVED = "resolved"


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