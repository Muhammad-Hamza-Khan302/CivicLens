from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from Backend.Database.database import get_db
from Backend.Models.issue import Issue
from Backend.Services.issue_service import (
    process_issue,
    get_all_issues,
    get_issue_by_id,
    get_issues_by_report
)
from Backend.Agents.issue_analyzer import analyze_issue


router = APIRouter(
    prefix="/issues",
    tags=["Issues"]
)


@router.post("/")
def create_issue(
    issue: Issue,
    db: Session = Depends(get_db)
):
    # Analyze the issue locally
    analysis = analyze_issue(issue.description)

    # Update the issue with local AI analysis
    issue.issue_type = analysis["issue_type"]
    issue.severity = analysis["severity"]
    issue.confidence = analysis["confidence"]

    # Save to database
    processed_issue = process_issue(issue, db)

    return {
        "message": "Civic issue processed successfully",
        "issue": processed_issue
    }


@router.get("/")
def get_issues(
    db: Session = Depends(get_db)
):
    """
    Get all civic issues.
    """

    issues = get_all_issues(db)

    return {
        "message": "Issues retrieved successfully",
        "count": len(issues),
        "issues": issues
    }


@router.get("/report/{report_id}")
def get_report_issues(
    report_id: str,
    db: Session = Depends(get_db)
):
    """
    Get all issues associated with a specific report.
    """

    issues = get_issues_by_report(report_id, db)

    return {
        "message": "Report issues retrieved successfully",
        "count": len(issues),
        "issues": issues
    }


@router.get("/{issue_id}")
def get_issue(
    issue_id: str,
    db: Session = Depends(get_db)
):
    """
    Get one civic issue by issue ID.
    """

    issue = get_issue_by_id(issue_id, db)

    if issue is None:
        raise HTTPException(
            status_code=404,
            detail="Issue not found"
        )

    return {
        "message": "Issue retrieved successfully",
        "issue": issue
    }