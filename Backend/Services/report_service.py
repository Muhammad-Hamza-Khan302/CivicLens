from sqlalchemy.orm import Session

from Backend.Models.report import Report, ReportStatus, Location
from Backend.Database.report_model import ReportDB


def create_report(report: Report, db: Session) -> Report:
    """
    Create a civic report and save it to the database.
    """

    report.status = ReportStatus.SUBMITTED

    db_report = ReportDB(
        report_id=report.report_id,
        citizen_id=report.citizen_id,
        description=report.description,
        image_url=report.image_url,
        latitude=report.location.latitude,
        longitude=report.location.longitude,
        address=report.location.address,
        status=report.status.value
    )

    db.add(db_report)
    db.commit()
    db.refresh(db_report)

    return report


def get_reports(db: Session):
    """
    Get all civic reports.
    """

    reports = db.query(ReportDB).all()

    result = []

    for report in reports:
        result.append(
            Report(
                report_id=report.report_id,
                citizen_id=report.citizen_id,
                description=report.description,
                image_url=report.image_url,
                location=Location(
                    latitude=report.latitude,
                    longitude=report.longitude,
                    address=report.address
                ),
                status=ReportStatus(report.status)
            )
        )

    return result


def get_report_by_id(
    report_id: str,
    db: Session
):
    """
    Get one civic report by ID.
    """

    report = db.query(ReportDB).filter(
        ReportDB.report_id == report_id
    ).first()

    if not report:
        return None

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
        status=ReportStatus(report.status)
    )