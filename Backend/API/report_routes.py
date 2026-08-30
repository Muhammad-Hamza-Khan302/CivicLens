from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from Backend.Database.database import get_db

from Backend.Models.report import (
    Report,
    ReportStatus,
    RejectReportRequest,
    RequestInformationRequest,
    UpdatePriorityRequest,
    AssignDepartmentRequest
)

from Backend.Services.report_service import (
    create_report,
    get_reports,
    get_report_by_id,
    update_report_status,
    verify_report,
    reject_report,
    request_information,
    update_report_priority,
    assign_department
)


router = APIRouter()


@router.post("/reports")
def submit_report(
    report: Report,
    db: Session = Depends(get_db)
):

    created_report = create_report(
        report,
        db
    )

    return {
        "message":
            "Civic report submitted successfully",
        "report":
            created_report
    }


@router.get("/reports")
def get_all_reports(
    db: Session = Depends(get_db)
):

    reports = get_reports(db)

    return {
        "message":
            "Reports retrieved successfully",

        "count":
            len(reports),

        "reports":
            reports
    }


@router.get("/reports/{report_id}")
def get_single_report(
    report_id: str,
    db: Session = Depends(get_db)
):

    report = get_report_by_id(
        report_id,
        db
    )

    if not report:
        raise HTTPException(
            status_code=404,
            detail="Report not found"
        )

    return {
        "message":
            "Report retrieved successfully",

        "report":
            report
    }


# ============================================================
# GOVERNMENT ACTIONS
# ============================================================

@router.put(
    "/reports/{report_id}/review"
)
def start_report_review(
    report_id: str,
    db: Session = Depends(get_db)
):

    report, error = update_report_status(
        report_id,
        ReportStatus.REVIEWING,
        db
    )

    if error:
        raise HTTPException(
            status_code=400,
            detail=error
        )

    return {
        "message":
            "Report moved to review",

        "report":
            report
    }


@router.put(
    "/reports/{report_id}/verify"
)
def verify_civic_report(
    report_id: str,
    db: Session = Depends(get_db)
):

    report, error = verify_report(
        report_id,
        db
    )

    if error:
        raise HTTPException(
            status_code=400,
            detail=error
        )

    return {
        "message":
            "Report verified successfully",

        "report":
            report
    }


@router.put(
    "/reports/{report_id}/reject"
)
def reject_civic_report(
    report_id: str,
    data: RejectReportRequest,
    db: Session = Depends(get_db)
):

    if not data.reason.strip():
        raise HTTPException(
            status_code=400,
            detail="Rejection reason is required"
        )

    report, error = reject_report(
        report_id,
        data.reason,
        db
    )

    if error:
        raise HTTPException(
            status_code=400,
            detail=error
        )

    return {
        "message":
            "Report rejected successfully",

        "report":
            report
    }


@router.put(
    "/reports/{report_id}/request-information"
)
def request_report_information(
    report_id: str,
    data: RequestInformationRequest,
    db: Session = Depends(get_db)
):

    if not data.message.strip():
        raise HTTPException(
            status_code=400,
            detail="Information request is required"
        )

    report, error = request_information(
        report_id,
        data.message,
        db
    )

    if error:
        raise HTTPException(
            status_code=400,
            detail=error
        )

    return {
        "message":
            "Information requested successfully",

        "report":
            report
    }


@router.put(
    "/reports/{report_id}/priority"
)
def change_report_priority(
    report_id: str,
    data: UpdatePriorityRequest,
    db: Session = Depends(get_db)
):

    report, error = update_report_priority(
        report_id,
        data.priority,
        db
    )

    if error:
        raise HTTPException(
            status_code=400,
            detail=error
        )

    return {
        "message":
            "Report priority updated successfully",

        "report":
            report
    }


@router.put(
    "/reports/{report_id}/department"
)
def assign_report_department(
    report_id: str,
    data: AssignDepartmentRequest,
    db: Session = Depends(get_db)
):

    report, error = assign_department(
        report_id,
        data.department,
        db
    )

    if error:
        raise HTTPException(
            status_code=400,
            detail=error
        )

    return {
        "message":
            "Department assigned successfully",

        "report":
            report
    }