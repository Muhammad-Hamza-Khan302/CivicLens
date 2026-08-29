from fastapi import FastAPI

from Backend.API import (
    report_routes,
    issue_routes,
    decision_routes,
    project_routes,
    contractor_routes,
    user_routes,
    auth_routes
)


app = FastAPI(
    title="CivicLens API",
    description=(
        "Backend API for CivicLens civic issue "
        "reporting and AI-assisted decision making"
    ),
    version="1.0.0"
)


# ============================================================
# API ROUTES
# ============================================================

app.include_router(
    report_routes.router
)

app.include_router(
    issue_routes.router
)

app.include_router(
    decision_routes.router
)

app.include_router(
    project_routes.router
)

app.include_router(
    contractor_routes.router
)

app.include_router(
    user_routes.router
)

app.include_router(
    auth_routes.router
)


# ============================================================
# ROOT
# ============================================================

@app.get("/")
def root():

    return {
        "message": "CivicLens API is running"
    }