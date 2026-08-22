import os
import importlib
import pandas as pd


BASE_DIR = os.path.dirname(os.path.abspath(__file__))


def check_directory(path):
    full_path = os.path.join(BASE_DIR, path)

    if os.path.isdir(full_path):
        print(f"[PASS] Directory exists: {path}")
        return True

    print(f"[FAIL] Directory missing: {path}")
    return False


def check_file(path):
    full_path = os.path.join(BASE_DIR, path)

    if os.path.isfile(full_path):
        print(f"[PASS] File exists: {path}")
        return True

    print(f"[FAIL] File missing: {path}")
    return False


def check_import(module_name):
    try:
        importlib.import_module(module_name)
        print(f"[PASS] Module imports: {module_name}")
        return True

    except Exception as e:
        print(f"[FAIL] Module failed: {module_name} -> {e}")
        return False


passed = 0
failed = 0


def test(condition, message):
    global passed, failed

    if condition:
        print(f"[PASS] {message}")
        passed += 1
    else:
        print(f"[FAIL] {message}")
        failed += 1


print("=" * 60)
print("       CIVICLENS HAMZA + JAVERIA INTEGRATION TEST")
print("=" * 60)


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
    "Frontend"
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
    # Backend
    "Backend/main.py",
    "Backend/LLM/groq_client.py",
    "Backend/LLM/prompts.py",
    "Backend/LLM/response_formatter.py",
    "Backend/Services/integration_service.py",
    "Backend/Services/issue_service.py",

    # RAG
    "RAG/config.py",
    "RAG/ingest.py",
    "RAG/retrieve.py",
    "RAG/rag_service.py",

    # Data
    "Data/datasets/civic_issues.csv",
    "Data/datasets/civic_issues_clean.csv",
    "Data/datasets/clean_dataset.py",
    "Data/datasets/inspect_dataset.py",
    "Data/datasets/download_dataset.py",

    # Policies
    "Data/Policies/complaint_priority.txt",
    "Data/Policies/drainage_flooding.txt",
    "Data/Policies/pothole_road_damage.txt",
    "Data/Policies/streetlight_maintenance.txt",
    "Data/Policies/waste_management.txt",

    # Frontend
    "Frontend/index.html",
    "Frontend/style.css",
    "Frontend/script.js",

    # Root
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
    "dotenv"
]

for package in packages:

    try:
        module = importlib.import_module(package)

        version = getattr(module, "__version__", "installed")

        print(f"[PASS] Package available: {package} ({version})")
        passed += 1

    except Exception as e:

        print(f"[FAIL] Package unavailable: {package} -> {e}")
        failed += 1


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

    original_df = pd.read_csv(original_file)

    print(f"Original dataset rows: {len(original_df)}")
    print(f"Original dataset columns: {len(original_df.columns)}")

    test(
        len(original_df) > 0,
        "Original dataset contains records"
    )

except Exception as e:

    print(f"[FAIL] Could not read original dataset: {e}")
    failed += 1


try:

    clean_df = pd.read_csv(clean_file)

    print(f"Clean dataset rows: {len(clean_df)}")
    print(f"Clean dataset columns: {len(clean_df.columns)}")

    test(
        len(clean_df) > 0,
        "Clean dataset contains records"
    )

    test(
        "complaint_type" in clean_df.columns,
        "Clean dataset contains complaint_type"
    )

except Exception as e:

    print(f"[FAIL] Could not read clean dataset: {e}")
    failed += 1


# ============================================================
# 5. POLICY FILE TEST
# ============================================================

print("\n===== 5. POLICY FILE TEST =====")

policy_files = [
    "complaint_priority.txt",
    "drainage_flooding.txt",
    "pothole_road_damage.txt",
    "streetlight_maintenance.txt",
    "waste_management.txt"
]

policy_directory = os.path.join(
    BASE_DIR,
    "Data",
    "Policies"
)


for policy in policy_files:

    path = os.path.join(
        policy_directory,
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

        print(
            f"[FAIL] Policy could not be read: "
            f"{policy} -> {e}"
        )

        failed += 1


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

try:

    from RAG.config import (
        PINECONE_API_KEY,
        PINECONE_INDEX_NAME
    )

    test(
        PINECONE_API_KEY is not None
        and PINECONE_API_KEY != "",
        "Pinecone API key loaded"
    )

    print(
        f"Pinecone index name: "
        f"{PINECONE_INDEX_NAME}"
    )

    test(
        PINECONE_INDEX_NAME is not None
        and PINECONE_INDEX_NAME != "",
        "Pinecone index name loaded"
    )

except Exception as e:

    print(
        f"[FAIL] RAG configuration failed: {e}"
    )

    failed += 2


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

    index_names = [
        item["name"]
        for item in indexes
    ]

    print("Available Pinecone indexes:")
    print(index_names)

    test(
        PINECONE_INDEX_NAME in index_names,
        f"Pinecone target index exists: "
        f"{PINECONE_INDEX_NAME}"
    )

except Exception as e:

    print(
        f"[FAIL] Pinecone connection failed: {e}"
    )

    failed += 1


# ============================================================
# 9. BACKEND IMPORT TEST
# ============================================================

print("\n===== 9. BACKEND IMPORT TEST =====")

backend_modules = [
    "Backend.main",
    "Backend.LLM.groq_client",
    "Backend.LLM.prompts",
    "Backend.LLM.response_formatter",
    "Backend.Services.integration_service",
    "Backend.Services.issue_service"
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
        settings.GROQ_API_KEY is not None
        and settings.GROQ_API_KEY != "",
        "Groq API key loaded"
    )

except Exception as e:

    print(
        f"[FAIL] Groq configuration failed: {e}"
    )

    failed += 1


# ============================================================
# 11. FRONTEND TEST
# ============================================================

print("\n===== 11. FRONTEND TEST =====")

frontend_files = [
    "index.html",
    "style.css",
    "script.js"
]

frontend_directory = os.path.join(
    BASE_DIR,
    "Frontend"
)

for file in frontend_files:

    path = os.path.join(
        frontend_directory,
        file
    )

    try:

        with open(
            path,
            "r",
            encoding="utf-8"
        ) as f:

            content = f.read()

        test(
            len(content.strip()) > 0,
            f"Frontend file readable: {file}"
        )

    except Exception as e:

        print(
            f"[FAIL] Frontend file failed: "
            f"{file} -> {e}"
        )

        failed += 1


# ============================================================
# FINAL RESULT
# ============================================================

print("\n" + "=" * 60)
print("              FINAL TEST RESULT")
print("=" * 60)

print(f"Tests Passed : {passed}")
print(f"Tests Failed : {failed}")

print("=" * 60)

if failed == 0:

    print(
        "CIVICLENS HAMZA + JAVERIA INTEGRATION: SUCCESS"
    )

else:

    print(
        "CIVICLENS HAMZA + JAVERIA INTEGRATION: FAILED"
    )

    print(
        "Review the FAIL messages above."
    )

print("=" * 60)