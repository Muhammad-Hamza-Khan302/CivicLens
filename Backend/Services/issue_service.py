from sqlalchemy.orm import Session

from Backend.Models.issue import Issue, IssueType, Severity
from Backend.Database.issue_model import IssueDB


def process_issue(issue: Issue, db: Session) -> Issue:
    """
    Process the detected civic issue and save it to the database.
    """

    db_issue = IssueDB(
        issue_id=issue.issue_id,
        report_id=issue.report_id,
        issue_type=issue.issue_type.value,
        severity=issue.severity.value,
        confidence=issue.confidence,
        description=issue.description
    )

    db.add(db_issue)
    db.commit()
    db.refresh(db_issue)

    return issue


def get_all_issues(db: Session):
    """
    Get all civic issues from the database.
    """

    issues = db.query(IssueDB).all()

    result = []

    for issue in issues:
        result.append(
            Issue(
                issue_id=issue.issue_id,
                report_id=issue.report_id,
                issue_type=IssueType(issue.issue_type),
                severity=Severity(issue.severity),
                confidence=issue.confidence,
                description=issue.description
            )
        )

    return result


def get_issue_by_id(issue_id: str, db: Session):
    """
    Get one civic issue by its ID.
    """

    issue = (
        db.query(IssueDB)
        .filter(IssueDB.issue_id == issue_id)
        .first()
    )

    if issue is None:
        return None

    return Issue(
        issue_id=issue.issue_id,
        report_id=issue.report_id,
        issue_type=IssueType(issue.issue_type),
        severity=Severity(issue.severity),
        confidence=issue.confidence,
        description=issue.description
    )


def get_issues_by_report(report_id: str, db: Session):
    """
    Get all issues associated with a specific report.
    """

    issues = (
        db.query(IssueDB)
        .filter(IssueDB.report_id == report_id)
        .all()
    )

    result = []

    for issue in issues:
        result.append(
            Issue(
                issue_id=issue.issue_id,
                report_id=issue.report_id,
                issue_type=IssueType(issue.issue_type),
                severity=Severity(issue.severity),
                confidence=issue.confidence,
                description=issue.description
            )
        )

    return result