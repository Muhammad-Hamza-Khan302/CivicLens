from sqlalchemy.orm import Session

from Backend.Models.decision import Decision
from Backend.Database.decision_model import DecisionDB

from Backend.Database.issue_model import IssueDB
from Backend.Models.issue import IssueType, Severity

from Backend.Agents.decision_agent import create_decision as generate_decision


def create_decision(
    decision: Decision,
    db: Session
) -> Decision:
    """
    Create a civic issue decision and save it to the database.
    """

    db_decision = DecisionDB(
        decision_id=decision.decision_id,
        report_id=decision.report_id,
        priority=decision.priority.value,
        recommended_action=decision.recommended_action,
        reasoning=decision.reasoning,
        policy_references=",".join(decision.policy_references),
        estimated_urgency_days=decision.estimated_urgency_days
    )

    db.add(db_decision)
    db.commit()
    db.refresh(db_decision)

    return decision


def get_all_decisions(db: Session):
    """
    Get all civic decisions.
    """

    return db.query(DecisionDB).all()


def get_decision_by_id(
    decision_id: str,
    db: Session
):
    """
    Get a decision using its ID.
    """

    return db.query(DecisionDB).filter(
        DecisionDB.decision_id == decision_id
    ).first()


def get_decisions_by_report_id(
    report_id: str,
    db: Session
):
    """
    Get all decisions related to a report.
    """

    return db.query(DecisionDB).filter(
        DecisionDB.report_id == report_id
    ).all()


def create_decision_from_report(
    report_id: str,
    decision_id: str,
    db: Session
):
    """
    Automatically create a decision from an existing issue.

    Uses the local Decision Agent.
    No LLM/API tokens required.
    """

    # Find the issue associated with the report
    issue = db.query(IssueDB).filter(
        IssueDB.report_id == report_id
    ).first()

    if not issue:
        return None, "No issue found for this report"

    # Convert database values back to enums
    issue_type = IssueType(issue.issue_type)
    severity = Severity(issue.severity)

    # Run the LOCAL decision agent
    analysis = generate_decision(
        issue_type,
        severity
    )

    # Create Decision model
    decision = Decision(
        decision_id=decision_id,
        report_id=report_id,
        priority=analysis["priority"],
        recommended_action=analysis["recommended_action"],
        reasoning=analysis["reasoning"],
        policy_references=analysis["policy_references"],
        estimated_urgency_days=analysis["estimated_urgency_days"]
    )

    # Save decision using the service function
    saved_decision = create_decision(
        decision,
        db
    )

    return saved_decision, None