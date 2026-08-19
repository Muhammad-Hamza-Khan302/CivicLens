from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from Backend.Database.database import get_db
from Backend.Models.report import Report
from Backend.Services.report_service import (
    create_report,
    get_reports,
    get_report_by_id
)


router = APIRouter()


@router.post("/reports")
def submit_report(
    report: Report,
    db: Session = Depends(get_db)
):
    created_report = create_report(report, db)

    return {
        "message": "Civic report submitted successfully",
        "report": created_report
    }


@router.get("/reports")
def get_all_reports(
    db: Session = Depends(get_db)
):
    reports = get_reports(db)

    return {
        "message": "Reports retrieved successfully",
        "count": len(reports),
        "reports": reports
    }


@router.get("/reports/{report_id}")
def get_single_report(
    report_id: str,
    db: Session = Depends(get_db)
):
    report = get_report_by_id(report_id, db)

    if not report:
        raise HTTPException(
            status_code=404,
            detail="Report not found"
        )

    return {
        "message": "Report retrieved successfully",
        "report": report
    }