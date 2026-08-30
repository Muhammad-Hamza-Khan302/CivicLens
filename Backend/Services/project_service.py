
from sqlalchemy.orm import Session

from Backend.Models.project import Project, ProjectStatus
from Backend.Database.project_model import ProjectDB
from Backend.Database.contractor_model import ContractorDB


def create_project(
    project: Project,
    db: Session
) -> Project:
    """
    Create a civic project and save it to the database.
    """

    db_project = ProjectDB(
        project_id=project.project_id,
        report_id=project.report_id,
        title=project.title,
        description=project.description,
        estimated_budget=project.estimated_budget,
        status=project.status.value,
        assigned_contractor_id=project.assigned_contractor_id
    )

    db.add(db_project)
    db.commit()
    db.refresh(db_project)

    return project


def assign_contractor(
    project_id: str,
    contractor_id: str,
    db: Session
):
    """
    Assign a contractor to a project.

    Contractors can only be assigned while the project
    is in the bidding stage.
    """

    project = db.query(ProjectDB).filter(
        ProjectDB.project_id == project_id
    ).first()

    if not project:
        return None, "Project not found"

    contractor = db.query(ContractorDB).filter(
        ContractorDB.contractor_id == contractor_id
    ).first()

    if not contractor:
        return None, "Contractor not found"

    if project.status != ProjectStatus.BIDDING.value:
        return None, (
            "Contractor can only be assigned "
            "while the project is in bidding"
        )

    project.assigned_contractor_id = contractor_id
    project.status = ProjectStatus.ASSIGNED.value

    db.commit()
    db.refresh(project)

    return project, None


def update_project_status(
    project_id: str,
    new_status: ProjectStatus,
    db: Session
):
    """
    Update project status using valid lifecycle transitions.
    """

    project = db.query(ProjectDB).filter(
        ProjectDB.project_id == project_id
    ).first()

    if not project:
        return None, "Project not found"

    current_status = project.status
    new_status_value = new_status.value

    valid_transitions = {
        ProjectStatus.PROPOSED.value: [
            ProjectStatus.APPROVED.value
        ],

        ProjectStatus.APPROVED.value: [
            ProjectStatus.BIDDING.value
        ],

        ProjectStatus.BIDDING.value: [
            ProjectStatus.ASSIGNED.value
        ],

        ProjectStatus.ASSIGNED.value: [
            ProjectStatus.IN_PROGRESS.value
        ],

        ProjectStatus.IN_PROGRESS.value: [
            ProjectStatus.COMPLETED.value
        ],

        ProjectStatus.COMPLETED.value: []
    }

    allowed_statuses = valid_transitions.get(
        current_status,
        []
    )

    if new_status_value not in allowed_statuses:
        return None, (
            f"Invalid status transition: "
            f"{current_status} → {new_status_value}"
        )

    if new_status == ProjectStatus.ASSIGNED:
        if not project.assigned_contractor_id:
            return None, (
                "A contractor must be assigned "
                "before project becomes assigned"
            )

    project.status = new_status_value

    db.commit()
    db.refresh(project)

    return project, None


def get_all_projects(db: Session):
    """
    Get all civic projects.
    """

    return db.query(ProjectDB).all()


def get_project_by_id(
    project_id: str,
    db: Session
):
    """
    Get a project by ID.
    """

    return db.query(ProjectDB).filter(
        ProjectDB.project_id == project_id
    ).first()


def get_projects_by_status(
    status: ProjectStatus,
    db: Session
):
    """
    Get projects by their current status.
    """

    return db.query(ProjectDB).filter(
        ProjectDB.status == status.value
    ).all()


def get_projects_by_report_id(
    report_id: str,
    db: Session
):
    """
    Get projects related to a report.
    """

    return db.query(ProjectDB).filter(
        ProjectDB.report_id == report_id
    ).all()

