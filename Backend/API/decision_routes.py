from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from Backend.Database.database import get_db
from Backend.Models.decision import Decision

from Backend.Services.decision_service import (
    create_decision,
    get_all_decisions,
    get_decision_by_id,
    get_decisions_by_report_id,
    create_decision_from_report
)


router = APIRouter(
    prefix="/decisions",
    tags=["Decisions"]
)


@router.post("/")
def create_civic_decision(
    decision: Decision,
    db: Session = Depends(get_db)
):
    created_decision = create_decision(
        decision,
        db
    )

    return {
        "message": "Decision created successfully",
        "decision": created_decision
    }


@router.post("/from-report/{report_id}")
def create_decision_for_report(
    report_id: str,
    decision_id: str,
    db: Session = Depends(get_db)
):
    """
    Automatically create a decision from the issue
    associated with a report.
    """

    decision, error = create_decision_from_report(
        report_id,
        decision_id,
        db
    )

    if error:
        raise HTTPException(
            status_code=404,
            detail=error
        )

    return {
        "message": "Decision generated successfully",
        "decision": decision
    }


@router.get("/")
def get_decisions(
    db: Session = Depends(get_db)
):
    decisions = get_all_decisions(db)

    return {
        "message": "Decisions retrieved successfully",
        "decisions": decisions
    }


@router.get("/{decision_id}")
def get_decision(
    decision_id: str,
    db: Session = Depends(get_db)
):
    decision = get_decision_by_id(
        decision_id,
        db
    )

    if not decision:
        raise HTTPException(
            status_code=404,
            detail="Decision not found"
        )

    return {
        "message": "Decision retrieved successfully",
        "decision": decision
    }


@router.get("/report/{report_id}")
def get_report_decisions(
    report_id: str,
    db: Session = Depends(get_db)
):
    decisions = get_decisions_by_report_id(
        report_id,
        db
    )

    return {
        "message": "Report decisions retrieved successfully",
        "decisions": decisions
    }