from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from Backend.Database.database import get_db
from Backend.Models.contractor import Contractor
from Backend.Services.contractor_service import (
    create_contractor,
    get_all_contractors,
    get_contractor_by_id,
    get_contractors_by_specialization
)


router = APIRouter(
    prefix="/contractors",
    tags=["Contractors"]
)


@router.post("/")
def create_civic_contractor(
    contractor: Contractor,
    db: Session = Depends(get_db)
):
    created_contractor = create_contractor(
        contractor,
        db
    )

    return {
        "message": "Contractor created successfully",
        "contractor": created_contractor
    }


@router.get("/")
def get_contractors(
    db: Session = Depends(get_db)
):
    contractors = get_all_contractors(db)

    return {
        "message": "Contractors retrieved successfully",
        "contractors": contractors
    }


@router.get("/specialization/{specialization}")
def get_specialized_contractors(
    specialization: str,
    db: Session = Depends(get_db)
):
    contractors = get_contractors_by_specialization(
        specialization,
        db
    )

    return {
        "message": "Contractors retrieved successfully",
        "specialization": specialization,
        "contractors": contractors
    }


@router.get("/{contractor_id}")
def get_contractor(
    contractor_id: str,
    db: Session = Depends(get_db)
):
    contractor = get_contractor_by_id(
        contractor_id,
        db
    )

    if not contractor:
        raise HTTPException(
            status_code=404,
            detail="Contractor not found"
        )

    return {
        "message": "Contractor retrieved successfully",
        "contractor": contractor
    }