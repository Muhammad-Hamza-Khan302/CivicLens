from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

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
# CORS
# ============================================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
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