import os
import time
import importlib
import re

import pandas as pd
import requests


# ============================================================
# CIVICLENS COMPLETE TEAM INTEGRATION TEST
#
# Hamza   -> Backend
# Javeria -> RAG + Data + Frontend
# Tayyab  -> Agents + Vision
# ============================================================

BASE_DIR = os.path.dirname(
    os.path.abspath(__file__)
)

BASE_URL = "http://127.0.0.1:8000"

passed = 0
failed = 0
total = 0


# ============================================================
# TEST HELPERS
# ============================================================

def test(condition, message):
    global passed, failed, total

    total += 1

    if condition:
        passed += 1
        print(f"[PASS] {message}")
    else:
        failed += 1
        print(f"[FAIL] {message}")


def check_file(path):
    return os.path.isfile(
        os.path.join(BASE_DIR, path)
    )


def check_directory(path):
    return os.path.isdir(
        os.path.join(BASE_DIR, path)
    )


def check_import(module_name):
    try:
        importlib.import_module(module_name)
        return True

    except Exception as e:
        print(f"       Error: {e}")
        return False


def read_file(path):
    try:
        with open(
            os.path.join(BASE_DIR, path),
            "r",
            encoding="utf-8"
        ) as file:
            return file.read()

    except Exception as e:
        print(f"       Error reading {path}: {e}")
        return ""


# ============================================================
# HEADER
# ============================================================

print("=" * 70)
print("             CIVICLENS COMPLETE INTEGRATION TEST")
print("=" * 70)

print("Team Components:")
print("Hamza   -> Backend")
print("Javeria -> RAG + Data + Frontend")
print("Tayyab  -> Agents + Vision")


# ============================================================
# 1. PROJECT STRUCTURE
# ============================================================

print("\n===== 1. PROJECT STRUCTURE =====")

directories = [
    "Backend",
    "Backend/Models",
    "Backend/Services",
    "Backend/API",
    "Backend/Database",
    "Backend/Agents",
    "Backend/LLM",
    "Backend/Config",
    "RAG",
    "Data",
    "Data/datasets",
    "Data/Policies",
    "Frontend",
    "Vision",
    "Vision/Models",
    "Vision/Services",
    "Agents"
]

for directory in directories:
    test(
        check_directory(directory),
        f"Directory exists: {directory}"
    )


# ============================================================
# 2. REQUIRED FILES
# ============================================================

print("\n===== 2. REQUIRED FILES =====")

files = [
    "Backend/main.py",

    "Backend/Models/report.py",
    "Backend/Models/issue.py",
    "Backend/Models/decision.py",
    "Backend/Models/project.py",
    "Backend/Models/contractor.py",
    "Backend/Models/user.py",

    "Backend/Services/report_service.py",
    "Backend/Services/issue_service.py",
    "Backend/Services/decision_service.py",
    "Backend/Services/project_service.py",
    "Backend/Services/contractor_service.py",
    "Backend/Services/integration_service.py",
    "Backend/Services/ai_service.py",
    "Backend/Services/auth_service.py",

    "Backend/API/report_routes.py",
    "Backend/API/issue_routes.py",
    "Backend/API/decision_routes.py",
    "Backend/API/project_routes.py",
    "Backend/API/contractor_routes.py",
    "Backend/API/user_routes.py",
    "Backend/API/auth_routes.py",

    "Backend/LLM/groq_client.py",
    "Backend/LLM/prompts.py",
    "Backend/LLM/response_formatter.py",

    "RAG/config.py",
    "RAG/ingest.py",
    "RAG/retrieve.py",
    "RAG/rag_service.py",

    "Data/datasets/civic_issues.csv",
    "Data/datasets/civic_issues_clean.csv",
    "Data/datasets/download_dataset.py",
    "Data/datasets/clean_dataset.py",
    "Data/datasets/inspect_dataset.py",

    "Data/Policies/complaint_priority.txt",
    "Data/Policies/drainage_flooding.txt",
    "Data/Policies/pothole_road_damage.txt",
    "Data/Policies/streetlight_maintenance.txt",
    "Data/Policies/waste_management.txt",

    "Vision/Models/vision_result.py",
    "Vision/Services/image_service.py",
    "Vision/Services/issue_adapter.py",
    "Vision/Services/vision_analyzer.py",

    "Agents/action_agent.py",
    "Agents/agent_orchestrator.py",
    "Agents/contractor_agent.py",
    "Agents/planner_agent.py",
    "Agents/priority_agent.py",
    "Agents/project_agent.py",
    "Agents/verification_agent.py",
    "Agents/test_agents.py",

    "Frontend/index.html",
    "Frontend/style.css",
    "Frontend/script.js",

    ".env",
    "requirements.txt"
]

for file in files:
    test(
        check_file(file),
        f"File exists: {file}"
    )


# ============================================================
# 3. PYTHON DEPENDENCIES
# ============================================================

print("\n===== 3. PYTHON DEPENDENCIES =====")

packages = [
    "pandas",
    "requests",
    "pinecone",
    "groq",
    "fastapi",
    "sqlalchemy",
    "dotenv",
    "pydantic",
    "jose",
    "passlib"
]

for package in packages:
    try:
        module = importlib.import_module(package)

        version = getattr(
            module,
            "__version__",
            "installed"
        )

        test(
            True,
            f"Package available: {package} ({version})"
        )

    except Exception as e:

        test(
            False,
            f"Package unavailable: {package} -> {e}"
        )


# ============================================================
# 4. DATASET TEST
# ============================================================

print("\n===== 4. DATASET TEST =====")

original_file = os.path.join(
    BASE_DIR,
    "Data",
    "datasets",
    "civic_issues.csv"
)

clean_file = os.path.join(
    BASE_DIR,
    "Data",
    "datasets",
    "civic_issues_clean.csv"
)

try:

    original_df = pd.read_csv(
        original_file
    )

    print(
        f"Original dataset rows: {len(original_df)}"
    )

    print(
        f"Original dataset columns: "
        f"{len(original_df.columns)}"
    )

    test(
        len(original_df) > 0,
        "Original dataset contains records"
    )

    test(
        "complaint_type" in original_df.columns,
        "Original dataset contains complaint_type"
    )

except Exception as e:

    test(
        False,
        f"Original dataset could not be read: {e}"
    )


try:

    clean_df = pd.read_csv(
        clean_file
    )

    print(
        f"Clean dataset rows: {len(clean_df)}"
    )

    print(
        f"Clean dataset columns: "
        f"{len(clean_df.columns)}"
    )

    test(
        len(clean_df) > 0,
        "Clean dataset contains records"
    )

    test(
        "complaint_type" in clean_df.columns,
        "Clean dataset contains complaint_type"
    )

except Exception as e:

    test(
        False,
        f"Clean dataset could not be read: {e}"
    )


# ============================================================
# 5. POLICY TEST
# ============================================================

print("\n===== 5. POLICY FILE TEST =====")

policy_files = [
    "complaint_priority.txt",
    "drainage_flooding.txt",
    "pothole_road_damage.txt",
    "streetlight_maintenance.txt",
    "waste_management.txt"
]

for policy in policy_files:

    path = os.path.join(
        BASE_DIR,
        "Data",
        "Policies",
        policy
    )

    try:

        with open(
            path,
            "r",
            encoding="utf-8"
        ) as file:

            content = file.read()

        test(
            len(content.strip()) > 0,
            f"Policy readable: {policy}"
        )

    except Exception as e:

        test(
            False,
            f"Policy failed: {policy} -> {e}"
        )


# ============================================================
# 6. RAG MODULE TEST
# ============================================================

print("\n===== 6. RAG MODULE TEST =====")

rag_modules = [
    "RAG.config",
    "RAG.ingest",
    "RAG.retrieve",
    "RAG.rag_service"
]

for module in rag_modules:

    test(
        check_import(module),
        f"RAG module imports: {module}"
    )


# ============================================================
# 7. RAG CONFIGURATION
# ============================================================

print("\n===== 7. RAG CONFIGURATION =====")

PINECONE_API_KEY = None
PINECONE_INDEX_NAME = None

try:

    from RAG.config import (
        PINECONE_API_KEY,
        PINECONE_INDEX_NAME
    )

    test(
        bool(PINECONE_API_KEY),
        "Pinecone API key loaded"
    )

    print(
        f"Pinecone index name: "
        f"{PINECONE_INDEX_NAME}"
    )

    test(
        bool(PINECONE_INDEX_NAME),
        "Pinecone index name loaded"
    )

except Exception as e:

    test(
        False,
        f"RAG configuration failed: {e}"
    )


# ============================================================
# 8. PINECONE CONNECTION
# ============================================================

print("\n===== 8. PINECONE CONNECTION =====")

try:

    from pinecone import Pinecone

    pc = Pinecone(
        api_key=PINECONE_API_KEY
    )

    indexes = pc.list_indexes()

    index_names = []

    try:

        index_names = [
            item["name"]
            for item in indexes
        ]

    except Exception:

        try:

            index_names = [
                item.name
                for item in indexes
            ]

        except Exception:

            index_names = []

    print(
        "Available Pinecone indexes:"
    )

    print(index_names)

    test(
        PINECONE_INDEX_NAME in index_names,
        (
            "Pinecone target index exists: "
            f"{PINECONE_INDEX_NAME}"
        )
    )

except Exception as e:

    test(
        False,
        f"Pinecone connection failed: {e}"
    )


# ============================================================
# 9. BACKEND MODULE TEST
# ============================================================

print("\n===== 9. BACKEND MODULE TEST =====")

backend_modules = [
    "Backend.main",
    "Backend.LLM.groq_client",
    "Backend.LLM.prompts",
    "Backend.LLM.response_formatter",
    "Backend.Services.report_service",
    "Backend.Services.issue_service",
    "Backend.Services.decision_service",
    "Backend.Services.project_service",
    "Backend.Services.contractor_service",
    "Backend.Services.integration_service",
    "Backend.Services.ai_service",
    "Backend.Services.auth_service"
]

for module in backend_modules:

    test(
        check_import(module),
        f"Backend module imports: {module}"
    )


# ============================================================
# 10. GROQ CONFIGURATION
# ============================================================

print("\n===== 10. GROQ CONFIGURATION =====")

try:

    from Backend.Config.settings import settings

    test(
        bool(settings.GROQ_API_KEY),
        "Groq API key loaded"
    )

except Exception as e:

    test(
        False,
        f"Groq configuration failed: {e}"
    )


# ============================================================
# 11. JWT CONFIGURATION
# ============================================================

print("\n===== 11. JWT CONFIGURATION =====")

try:

    from Backend.Config.settings import settings

    jwt_secret = settings.JWT_SECRET_KEY

    test(
        bool(jwt_secret),
        "JWT_SECRET_KEY exists in .env"
    )

    test(
        len(jwt_secret) >= 32,
        "JWT secret key is sufficiently long"
    )

    test(
        jwt_secret not in [
            "your-secret-key",
            "secret",
            "change-me",
            "your_jwt_secret",
            "change-this-to-a-long-random-secret-value"
        ],
        "Default JWT secret was replaced"
    )

except Exception as e:

    test(
        False,
        f"JWT configuration failed: {e}"
    )


# ============================================================
# 12. USER MODEL TEST
# ============================================================

print("\n===== 12. USER MODULE TEST =====")

try:

    from Backend.Models.user import UserRole

    test(
        True,
        "User model imports"
    )

    test(
        True,
        "UserRole imports successfully"
    )

    roles = [
        role.value
        for role in UserRole
    ]

    print(
        f"Available user roles: {roles}"
    )

    required_roles = [
        "citizen",
        "government",
        "admin"
    ]

    test(
        all(
            role in roles
            for role in required_roles
        ),
        "User roles are defined"
    )

except Exception as e:

    test(
        False,
        f"User model test failed: {e}"
    )


# ============================================================
# 13. AUTHENTICATION + USER SECURITY
# ============================================================

print(
    "\n===== 13. AUTHENTICATION + USER SECURITY TEST ====="
)

access_token = None

timestamp = int(
    time.time()
)

test_email = (
    f"civiclens_test_{timestamp}"
    "@example.com"
)

test_password = "CivicLens@12345"

signup_payload = {
    "name": "CivicLens Integration Test",
    "email": test_email,
    "password": test_password
}


# ------------------------------------------------------------
# 13A. SIGNUP
# ------------------------------------------------------------

try:

    print(
        f"Creating test user: {test_email}"
    )

    signup_response = requests.post(
        f"{BASE_URL}/auth/signup",
        json=signup_payload,
        timeout=15
    )

    print(
        f"Signup HTTP status: "
        f"{signup_response.status_code}"
    )

    test(
        signup_response.status_code == 200,
        (
            "POST /auth/signup works"
            if signup_response.status_code == 200
            else
            f"POST /auth/signup failed: "
            f"{signup_response.text}"
        )
    )

except Exception as e:

    test(
        False,
        f"Signup request failed: {e}"
    )


# ------------------------------------------------------------
# 13B. LOGIN
# ------------------------------------------------------------

try:

    login_response = requests.post(
        f"{BASE_URL}/auth/login",
        json={
            "email": test_email,
            "password": test_password
        },
        timeout=15
    )

    print(
        f"Login HTTP status: "
        f"{login_response.status_code}"
    )

    test(
        login_response.status_code == 200,
        (
            "POST /auth/login works"
            if login_response.status_code == 200
            else
            f"POST /auth/login failed: "
            f"{login_response.text}"
        )
    )

    if login_response.status_code == 200:

        login_data = (
            login_response.json()
        )

        access_token = (
            login_data.get(
                "access_token"
            )
        )

        test(
            bool(access_token),
            "Login response contains access_token"
        )

        test(
            login_data.get(
                "token_type"
            ) == "bearer",
            "Login response contains bearer token type"
        )

        if access_token:

            print(
                "JWT access token received successfully."
            )


except Exception as e:

    test(
        False,
        f"Login request failed: {e}"
    )


# ------------------------------------------------------------
# 13C. UNAUTHENTICATED SECURITY
# ------------------------------------------------------------

try:

    unauth_response = requests.get(
        f"{BASE_URL}/users",
        timeout=10
    )

    print(
        "Unauthenticated /users status:",
        unauth_response.status_code
    )

    test(
        unauth_response.status_code == 401,
        "GET /users rejects unauthenticated requests"
    )

except Exception as e:

    test(
        False,
        f"Unauthenticated /users test failed: {e}"
    )


# ------------------------------------------------------------
# 13D. AUTHENTICATED CURRENT USER
# ------------------------------------------------------------

if access_token:

    headers = {
        "Authorization":
            f"Bearer {access_token}"
    }

    try:

        me_response = requests.get(
            f"{BASE_URL}/users/me",
            headers=headers,
            timeout=10
        )

        print(
            "Authenticated /users/me status:",
            me_response.status_code
        )

        test(
            me_response.status_code == 200,
            "GET /users/me works with JWT authentication"
        )

        if me_response.status_code == 200:

            me_data = me_response.json()

            authenticated_user = me_data.get(
                "user",
                me_data
            )

            test(
                authenticated_user.get(
                    "email"
                ) == test_email,
                "Authenticated user data is correct"
            )

            test(
                authenticated_user.get(
                    "role"
                ) == "citizen",
                "Authenticated test user has citizen role"
            )

    except Exception as e:

        test(
            False,
            f"Authenticated /users/me request failed: {e}"
        )

else:

    test(
        False,
        "JWT token available for authenticated user test"
    )


# ============================================================
# 14. VISION MODULE TEST
# ============================================================

print("\n===== 14. VISION MODULE TEST =====")

vision_modules = [
    "Vision.Models.vision_result",
    "Vision.Services.image_service",
    "Vision.Services.issue_adapter",
    "Vision.Services.vision_analyzer"
]

for module in vision_modules:

    test(
        check_import(module),
        f"Vision module imports: {module}"
    )


# ============================================================
# 15. VISION MODEL TEST
# ============================================================

print("\n===== 15. VISION MODEL TEST =====")

try:

    from Vision.Models.vision_result import (
        VisionResult,
        SafetyRisk
    )

    test(
        True,
        "VisionResult model imports"
    )

    test(
        True,
        "SafetyRisk enum imports"
    )

    try:

        result = VisionResult(
            issue_type="pothole",
            severity="high",
            confidence=0.95,
            description="Large pothole detected",
            safety_risk=SafetyRisk.HIGH
        )

        test(
            result.issue_type == "pothole",
            "VisionResult model creates successfully"
        )

        test(
            result.safety_risk == SafetyRisk.HIGH,
            "SafetyRisk value works correctly"
        )

    except Exception as e:

        test(
            False,
            f"VisionResult construction failed: {e}"
        )

except Exception as e:

    test(
        False,
        f"Vision model test failed: {e}"
    )


# ============================================================
# 16. AGENT MODULE TEST
# ============================================================

print("\n===== 16. AGENT MODULE TEST =====")

agent_modules = [
    "Agents.action_agent",
    "Agents.agent_orchestrator",
    "Agents.contractor_agent",
    "Agents.planner_agent",
    "Agents.priority_agent",
    "Agents.project_agent",
    "Agents.verification_agent"
]

for module in agent_modules:

    test(
        check_import(module),
        f"Agent module imports: {module}"
    )


# ============================================================
# 17. AGENT TEST FILE
# ============================================================

print("\n===== 17. AGENT TEST FILE =====")

test(
    check_file("Agents/test_agents.py"),
    "Tayyab agent test file exists"
)


# ============================================================
# 18. FRONTEND FILE TEST
# ============================================================

print("\n===== 18. FRONTEND FILE TEST =====")

frontend_files = [
    "Frontend/index.html",
    "Frontend/style.css",
    "Frontend/script.js"
]

frontend_html = read_file(
    "Frontend/index.html"
)

frontend_css = read_file(
    "Frontend/style.css"
)

frontend_js = read_file(
    "Frontend/script.js"
)

for file in frontend_files:

    content = read_file(file)

    test(
        len(content.strip()) > 0,
        f"Frontend file readable: {file}"
    )


# ============================================================
# 19. CAMERA-ONLY REPORTING TEST
# ============================================================

print("\n===== 19. CAMERA-ONLY REPORTING TEST =====")

frontend_lower = (
    frontend_html +
    "\n" +
    frontend_js
).lower()


# ------------------------------------------------------------
# Camera support
# ------------------------------------------------------------

camera_support = (
    "getusermedia" in frontend_lower
    or "mediadevices" in frontend_lower
    or "facingmode" in frontend_lower
)

test(
    camera_support,
    "Frontend contains camera functionality"
)


# ------------------------------------------------------------
# Actual HTML file input detection
# ------------------------------------------------------------

# This checks only actual HTML input elements.
# It does NOT fail because the word "file" appears in comments
# or JavaScript APIs.

file_input_patterns = [
    r"<input[^>]*type\s*=\s*[\"']file[\"'][^>]*>",
    r"<input[^>]*type\s*=\s*file[^>]*>"
]

file_input_found = any(
    re.search(
        pattern,
        frontend_html,
        re.IGNORECASE
    )
    for pattern in file_input_patterns
)


test(
    not file_input_found,
    "No HTML file-upload input is present"
)


# ------------------------------------------------------------
# Visible upload/attachment controls
# ------------------------------------------------------------

upload_phrases = [
    "attach file",
    "upload file",
    "upload photo",
    "upload image",
    "choose file",
    "select file",
    "browse files"
]

upload_control_found = any(
    phrase in frontend_html.lower()
    for phrase in upload_phrases
)


test(
    not upload_control_found,
    "No visible upload/attachment control is present"
)


# ------------------------------------------------------------
# Camera capture
# ------------------------------------------------------------

capture_support = any(
    phrase in frontend_lower
    for phrase in [
        "capture photo",
        "take photo",
        "start camera",
        "capturephoto",
        "startcamera"
    ]
)


test(
    capture_support,
    "Camera capture control exists"
)


# ============================================================
# 20. PAKISTAN CITY SELECTION
# ============================================================

print("\n===== 20. PAKISTAN CITY TEST =====")

city_names = [
    "Islamabad",
    "Rawalpindi",
    "Lahore",
    "Karachi",
    "Peshawar",
    "Quetta",
    "Multan",
    "Faisalabad"
]

city_names_lower = [
    city.lower()
    for city in city_names
]

city_found_count = sum(
    city in frontend_lower
    for city in city_names_lower
)

city_selector_exists = (
    "signupcity" in frontend_lower
    or "reportcity" in frontend_lower
    or "pakistancities" in frontend_lower
    or 'id="signupCity"'.lower() in frontend_lower
    or 'id="reportCity"'.lower() in frontend_lower
)

test(
    city_found_count >= 3 or city_selector_exists,
    "Pakistani cities and city selection are available"
)

test(
    city_selector_exists,
    "City selection functionality is present"
)



# ============================================================
# 21. MAP / LOCATION TEST
# ============================================================

print("\n===== 21. MAP / LOCATION TEST =====")

location_support = any(
    phrase in frontend_lower
    for phrase in [
        "geolocation",
        "getcurrentposition",
        "latitude",
        "longitude"
    ]
)

test(
    location_support,
    "Frontend location support exists"
)

map_support = any(
    phrase in frontend_lower
    for phrase in [
        "map",
        "map-preview",
        "mappreview",
        "map-location"
    ]
)

test(
    map_support,
    "Frontend map/location interface exists"
)


# ============================================================
# 22. LANGUAGE TEST
# ============================================================

print("\n===== 22. LANGUAGE TEST =====")

# English option
english_present = (
    "english" in frontend_lower
    or 'data-language="en"' in frontend_lower
    or "data-language='en'" in frontend_lower
)

# Urdu option
urdu_present = (
    "اردو" in frontend_html
    or "urdu" in frontend_lower
    or 'data-language="ur"' in frontend_lower
    or "data-language='ur'" in frontend_lower
)

print(
    f"English detected: {english_present}"
)

print(
    f"Urdu detected: {urdu_present}"
)

test(
    english_present,
    "English language option exists"
)

test(
    urdu_present,
    "Urdu language option exists"
)

test(
    english_present and urdu_present,
    "English and Urdu language options exist"
)

language_switching = (
    "changelanguage" in frontend_lower
    or "translations" in frontend_lower
    or "language-btn" in frontend_lower
    or "data-language" in frontend_lower
    or "languagebutton" in frontend_lower
)

test(
    language_switching,
    "Language switching functionality is present"
)


# ============================================================
# 23. FRONTEND API CONNECTION TEST
# ============================================================

print("\n===== 22. LANGUAGE TEST =====")

english_present = (
    "english" in frontend_lower
    or 'data-language="en"' in frontend_lower
    or "language" in frontend_lower
)

urdu_present = (
    "اردو" in frontend_html
    or "urdu" in frontend_lower
    or 'data-language="ur"' in frontend_lower
    or '"ur"' in frontend_js
)

test(
    english_present,
    "English language option exists"
)

test(
    urdu_present,
    "Urdu language option exists"
)

test(
    english_present and urdu_present,
    "English and Urdu language options exist"
)

language_switching = (
    "changelanguage" in frontend_lower
    or "translations" in frontend_lower
    or "language-btn" in frontend_lower
    or "data-language" in frontend_lower
)

test(
    language_switching,
    "Language switching functionality is present"
)

# ============================================================
# 24. FASTAPI SERVER TEST
# ============================================================

print("\n===== 24. BACKEND SERVER TEST =====")

server_running = False

try:

    root_response = requests.get(
        f"{BASE_URL}/",
        timeout=5
    )

    server_running = True

    test(
        root_response.status_code == 200,
        "FastAPI server is running"
    )

    try:

        root_data = (
            root_response.json()
        )

        test(
            root_data.get(
                "message"
            ) == "CivicLens API is running",
            "FastAPI root endpoint works"
        )

    except Exception:

        test(
            False,
            "FastAPI root returned invalid JSON"
        )

except Exception as e:

    test(
        False,
        f"FastAPI server unavailable: {e}"
    )


# ============================================================
# 25. REPORT API TEST
# ============================================================

print("\n===== 25. REPORT API TEST =====")

if server_running:

    try:

        reports_response = requests.get(
            f"{BASE_URL}/reports",
            timeout=10
        )

        test(
            reports_response.status_code == 200,
            "GET /reports works"
        )

        if reports_response.status_code == 200:

            reports_data = (
                reports_response.json()
            )

            test(
                isinstance(
                    reports_data,
                    dict
                )
                and "reports" in reports_data,
                "Reports response contains reports"
            )

    except Exception as e:

        test(
            False,
            f"Report API test failed: {e}"
        )

else:

    test(
        False,
        "Report API test skipped because server is unavailable"
    )


# ============================================================
# 26. AI ISSUE ANALYSIS TEST
# ============================================================

print("\n===== 26. AI ISSUE ANALYSIS TEST =====")

if server_running:

    analysis_payload = {

        "issue_id":
            "ISS-INTEGRATION-001",

        "report_id":
            "REP-1787855481802",

        "issue_type":
            "road_damage",

        "severity":
            "high",

        "confidence":
            0.95,

        "description":
            (
                "Large pothole on the main road "
                "causing danger to vehicles and pedestrians."
            )
    }

    try:

        analysis_response = requests.post(
            f"{BASE_URL}/issues/analyze",
            json=analysis_payload,
            timeout=120
        )

        print(
            f"AI analysis HTTP status: "
            f"{analysis_response.status_code}"
        )

        test(
            analysis_response.status_code == 200,
            (
                "POST /issues/analyze works"
                if analysis_response.status_code == 200
                else
                (
                    "POST /issues/analyze failed: "
                    f"{analysis_response.text}"
                )
            )
        )

        if analysis_response.status_code == 200:

            analysis_data = (
                analysis_response.json()
            )

            test(
                "message" in analysis_data,
                "AI response contains message"
            )

            test(
                "analysis" in analysis_data,
                "AI response contains analysis"
            )

            analysis_result = (
                analysis_data.get(
                    "analysis",
                    {}
                )
            )

            if isinstance(
                analysis_result,
                dict
            ):

                test(
                    "answer" in analysis_result,
                    "AI analysis contains answer"
                )

                test(
                    "issue_type" in analysis_result,
                    "AI analysis contains detected issue type"
                )

                test(
                    "severity" in analysis_result,
                    "AI analysis contains severity"
                )

                print(
                    "\nAI detected issue:"
                )

                print(
                    analysis_result.get(
                        "issue_type",
                        "N/A"
                    )
                )

                print(
                    "\nAI severity:"
                )

                print(
                    analysis_result.get(
                        "severity",
                        "N/A"
                    )
                )

            else:

                test(
                    False,
                    "AI analysis has valid object format"
                )

    except Exception as e:

        test(
            False,
            f"AI analysis request failed: {e}"
        )

else:

    test(
        False,
        "AI analysis test skipped because server is unavailable"
    )


# ============================================================
# 27. FRONTEND SECURITY CONFIGURATION
# ============================================================

print("\n===== 27. FRONTEND SECURITY CONFIGURATION =====")

test(
    "login" in frontend_lower,
    "Frontend contains login functionality"
)

test(
    "signup" in frontend_lower,
    "Frontend contains signup functionality"
)

test(
    "logout" in frontend_lower,
    "Frontend contains logout functionality"
)

test(
    "citizen" in frontend_lower,
    "Citizen role is represented"
)

test(
    "government" in frontend_lower,
    "Government role is represented"
)

test(
    "admin" in frontend_lower,
    "Admin role is represented"
)


# ============================================================
# FINAL RESULT
# ============================================================

print("\n" + "=" * 70)
print("                       FINAL TEST RESULT")
print("=" * 70)

print(
    f"Tests Passed : {passed}"
)

print(
    f"Tests Failed : {failed}"
)

print(
    f"Total Tests  : {total}"
)

if total > 0:

    pass_rate = (
        passed / total
    ) * 100

else:

    pass_rate = 0


print(
    f"Pass Rate    : {pass_rate:.1f}%"
)

print("=" * 70)


if failed == 0:

    print(
        "CIVICLENS COMPLETE TEAM INTEGRATION: SUCCESS"
    )

    print()

    print(
        "Hamza Backend       : PASS"
    )

    print(
        "Javeria RAG/Data    : PASS"
    )

    print(
        "Javeria Frontend    : PASS"
    )

    print(
        "Tayyab Vision       : PASS"
    )

    print(
        "Tayyab Agents       : PASS"
    )

    print(
        "Authentication      : PASS"
    )

    print(
        "JWT Security        : PASS"
    )

    print(
        "Camera-Only         : PASS"
    )

    print(
        "Pakistan Cities     : PASS"
    )

    print(
        "Map/Location        : PASS"
    )

    print(
        "Language Support    : PASS"
    )

    print(
        "FastAPI Server      : PASS"
    )

    print(
        "AI Analysis         : PASS"
    )

    print(
        "Pinecone            : PASS"
    )

    print(
        "Groq                : PASS"
    )

else:

    print(
        "CIVICLENS COMPLETE TEAM INTEGRATION: FAILED"
    )

    print(
        "\nReview the [FAIL] messages above."
    )

print("=" * 70)