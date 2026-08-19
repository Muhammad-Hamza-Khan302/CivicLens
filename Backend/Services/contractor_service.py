from sqlalchemy.orm import Session

from Backend.Models.contractor import Contractor
from Backend.Database.contractor_model import ContractorDB


def create_contractor(
    contractor: Contractor,
    db: Session
) -> Contractor:
    """
    Create a contractor and save it to the database.
    """

    db_contractor = ContractorDB(
        contractor_id=contractor.contractor_id,
        company_name=contractor.company_name,
        contact_email=contractor.contact_email,
        specialization=",".join(contractor.specialization),
        rating=contractor.rating,
        completed_projects=contractor.completed_projects
    )

    db.add(db_contractor)
    db.commit()
    db.refresh(db_contractor)

    return contractor


def get_all_contractors(db: Session):
    """
    Get all contractors.
    """

    return db.query(ContractorDB).all()


def get_contractor_by_id(
    contractor_id: str,
    db: Session
):
    """
    Get a contractor by ID.
    """

    return db.query(ContractorDB).filter(
        ContractorDB.contractor_id == contractor_id
    ).first()


def get_contractors_by_specialization(
    specialization: str,
    db: Session
):
    """
    Get contractors matching a specialization.
    """

    return db.query(ContractorDB).filter(
        ContractorDB.specialization.ilike(
            f"%{specialization}%"
        )
    ).all()