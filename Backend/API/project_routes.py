from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from Backend.Database.database import get_db
from Backend.Models.project import Project, ProjectStatus
from Backend.Services.project_service import (
    create_project,
    assign_contractor,
    update_project_status,
    get_all_projects,
    get_project_by_id,
    get_projects_by_status,
    get_projects_by_report_id
)


router = APIRouter(
    prefix="/projects",
    tags=["Projects"]
)


@router.post("/")
def create_civic_project(
    project: Project,
    db: Session = Depends(get_db)
):
    created_project = create_project(
        project,
        db
    )

    return {
        "message": "Civic project created successfully",
        "project": created_project
    }


@router.put("/{project_id}/assign-contractor")
def assign_civic_contractor(
    project_id: str,
    contractor_id: str,
    db: Session = Depends(get_db)
):
    project, error = assign_contractor(
        project_id,
        contractor_id,
        db
    )

    if error:
        raise HTTPException(
            status_code=400,
            detail=error
        )

    return {
        "message": "Contractor assigned successfully",
        "project_id": project.project_id,
        "contractor_id": project.assigned_contractor_id,
        "status": project.status
    }


@router.put("/{project_id}/status")
def update_civic_project_status(
    project_id: str,
    status: ProjectStatus,
    db: Session = Depends(get_db)
):
    project, error = update_project_status(
        project_id,
        status,
        db
    )

    if error:
        raise HTTPException(
            status_code=400,
            detail=error
        )

    return {
        "message": "Project status updated successfully",
        "project_id": project.project_id,
        "status": project.status
    }


@router.get("/")
def get_projects(
    db: Session = Depends(get_db)
):
    projects = get_all_projects(db)

    return {
        "message": "Projects retrieved successfully",
        "projects": projects
    }


@router.get("/status/{status}")
def get_projects_status(
    status: ProjectStatus,
    db: Session = Depends(get_db)
):
    projects = get_projects_by_status(
        status,
        db
    )

    return {
        "message": "Projects retrieved successfully",
        "status": status,
        "projects": projects
    }


@router.get("/report/{report_id}")
def get_report_projects(
    report_id: str,
    db: Session = Depends(get_db)
):
    projects = get_projects_by_report_id(
        report_id,
        db
    )

    return {
        "message": "Report projects retrieved successfully",
        "projects": projects
    }


@router.get("/{project_id}")
def get_project(
    project_id: str,
    db: Session = Depends(get_db)
):
    project = get_project_by_id(
        project_id,
        db
    )

    if not project:
        raise HTTPException(
            status_code=404,
            detail="Project not found"
        )

    return {
        "message": "Project retrieved successfully",
        "project": project
    }