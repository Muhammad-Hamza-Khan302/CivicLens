from sqlalchemy.orm import Session

from Backend.Models.report import (
    Report,
    ReportStatus,
    ReportPriority,
    Location
)

from Backend.Database.report_model import ReportDB


def report_to_model(report):
    return Report(
        report_id=report.report_id,
        citizen_id=report.citizen_id,
        description=report.description,
        image_url=report.image_url,
        location=Location(
            latitude=report.latitude,
            longitude=report.longitude,
            address=report.address
        ),
        status=ReportStatus(report.status),
        priority=(
            ReportPriority(report.priority)
            if report.priority
            else None
        ),
        department=report.department,
        government_notes=report.government_notes,
        rejection_reason=report.rejection_reason,
        information_request=report.information_request
    )


def create_report(
    report: Report,
    db: Session
) -> Report:

    report.status = ReportStatus.SUBMITTED

    db_report = ReportDB(
        report_id=report.report_id,
        citizen_id=report.citizen_id,
        description=report.description,
        image_url=report.image_url,
        latitude=report.location.latitude,
        longitude=report.location.longitude,
        address=report.location.address,
        status=report.status.value,
        priority=(
            report.priority.value
            if report.priority
            else None
        ),
        department=report.department,
        government_notes=report.government_notes,
        rejection_reason=report.rejection_reason,
        information_request=report.information_request
    )

    db.add(db_report)
    db.commit()
    db.refresh(db_report)

    return report_to_model(
        db_report
    )


def get_reports(
    db: Session
):
    reports = db.query(
        ReportDB
    ).all()

    return [
        report_to_model(report)
        for report in reports
    ]


def get_report_by_id(
    report_id: str,
    db: Session
):
    report = (
        db.query(ReportDB)
        .filter(
            ReportDB.report_id == report_id
        )
        .first()
    )

    if not report:
        return None

    return report_to_model(
        report
    )


def update_report_status(
    report_id: str,
    new_status: ReportStatus,
    db: Session
):
    report = (
        db.query(ReportDB)
        .filter(
            ReportDB.report_id == report_id
        )
        .first()
    )

    if not report:
        return None, "Report not found"

    current_status = (
        report.status
    )

    target_status = (
        new_status.value
    )

    if current_status == target_status:
        return (
            report_to_model(report),
            None
        )

    if (
        current_status == "rejected" and
        target_status != "rejected"
    ):
        return None, (
            "A rejected report cannot be moved "
            "to another status"
        )

    if (
        current_status == "resolved" and
        target_status != "resolved"
    ):
        return None, (
            "A resolved report cannot be moved "
            "to another status"
        )

    if target_status == "resolved":
        report.status = (
            ReportStatus.RESOLVED.value
        )

        db.commit()
        db.refresh(report)

        return (
            report_to_model(report),
            None
        )

    valid_transitions = {
        "submitted": [
            "reviewing",
            "rejected",
            "information_requested"
        ],

        "reviewing": [
            "verified",
            "rejected",
            "information_requested"
        ],

        "information_requested": [
            "reviewing",
            "rejected",
            "resolved"
        ],

        "verified": [
            "assigned",
            "in_progress",
            "resolved"
        ],

        "assigned": [
            "in_progress",
            "resolved"
        ],

        "in_progress": [
            "resolved"
        ],

        "rejected": [],

        "resolved": []
    }

    allowed_statuses = (
        valid_transitions.get(
            current_status,
            []
        )
    )

    if target_status not in allowed_statuses:
        return None, (
            f"Invalid report status transition: "
            f"{current_status} → {target_status}"
        )

    report.status = target_status

    db.commit()
    db.refresh(report)

    return (
        report_to_model(report),
        None
    )


def verify_report(
    report_id: str,
    db: Session
):
    return update_report_status(
        report_id,
        ReportStatus.VERIFIED,
        db
    )


def reject_report(
    report_id: str,
    reason: str,
    db: Session
):
    report = (
        db.query(ReportDB)
        .filter(
            ReportDB.report_id == report_id
        )
        .first()
    )

    if not report:
        return None, "Report not found"

    if not reason.strip():
        return None, (
            "Rejection reason is required"
        )

    if report.status == "resolved":
        return None, (
            "A resolved report cannot be rejected"
        )

    report.rejection_reason = (
        reason.strip()
    )

    report.status = (
        ReportStatus.REJECTED.value
    )

    db.commit()
    db.refresh(report)

    return (
        report_to_model(report),
        None
    )


def request_information(
    report_id: str,
    message: str,
    db: Session
):
    report = (
        db.query(ReportDB)
        .filter(
            ReportDB.report_id == report_id
        )
        .first()
    )

    if not report:
        return None, "Report not found"

    if not message.strip():
        return None, (
            "Information request is required"
        )

    if report.status in [
        "rejected",
        "resolved"
    ]:
        return None, (
            "Information cannot be requested "
            "for a closed report"
        )

    report.information_request = (
        message.strip()
    )

    report.status = (
        ReportStatus.INFORMATION_REQUESTED.value
    )

    db.commit()
    db.refresh(report)

    return (
        report_to_model(report),
        None
    )


def update_report_priority(
    report_id: str,
    priority: ReportPriority,
    db: Session
):
    report = (
        db.query(ReportDB)
        .filter(
            ReportDB.report_id == report_id
        )
        .first()
    )

    if not report:
        return None, "Report not found"

    if report.status == "rejected":
        return None, (
            "Priority cannot be changed "
            "for a rejected report"
        )

    report.priority = (
        priority.value
    )

    db.commit()
    db.refresh(report)

    return (
        report_to_model(report),
        None
    )


def assign_department(
    report_id: str,
    department: str,
    db: Session
):
    report = (
        db.query(ReportDB)
        .filter(
            ReportDB.report_id == report_id
        )
        .first()
    )

    if not report:
        return None, "Report not found"

    department = department.strip()

    if not department:
        return None, (
            "Department cannot be empty"
        )

    if report.status == "rejected":
        return None, (
            "Department cannot be assigned "
            "to a rejected report"
        )

    report.department = department

    db.commit()
    db.refresh(report)

    return (
        report_to_model(report),
        None
    )