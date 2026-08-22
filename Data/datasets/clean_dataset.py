import pandas as pd
from pathlib import Path


# ===============================
# FILE PATHS
# ===============================

BASE_DIR = Path(__file__).resolve().parent

INPUT_FILE = BASE_DIR / "civic_issues.csv"
OUTPUT_FILE = BASE_DIR / "civic_issues_clean.csv"


# ===============================
# LOAD DATASET
# ===============================

print("Loading civic issue dataset...")

df = pd.read_csv(INPUT_FILE)


# ===============================
# RELEVANT CIVIC ISSUES
# ===============================

relevant_issues = [
    "Street Condition",
    "Street Light Condition",
    "Illegal Dumping",
    "UNSANITARY CONDITION",
    "Dirty Condition",
    "Water Maintenance",
    "WATER LEAK",
    "Sewer Maintenance",
    "Sidewalk Condition",
    "Damaged Tree",
    "Traffic Signal Condition"
]


# ===============================
# FILTER RELEVANT ISSUES
# ===============================

clean_df = df[
    df["complaint_type"].isin(relevant_issues)
].copy()


# ===============================
# KEEP USEFUL FIELDS
# ===============================

columns_to_keep = [
    "unique_key",
    "created_date",
    "complaint_type",
    "descriptor",
    "status",
    "agency",
    "agency_name",
    "incident_zip",
    "city",
    "borough",
    "street_name",
    "latitude",
    "longitude",
    "location"
]


# Keep only columns that actually exist
available_columns = [
    column
    for column in columns_to_keep
    if column in clean_df.columns
]

clean_df = clean_df[available_columns]


# ===============================
# REMOVE MISSING ISSUE TYPES
# ===============================

clean_df = clean_df.dropna(
    subset=["complaint_type"]
)


# ===============================
# REMOVE DUPLICATES
# ===============================

if "unique_key" in clean_df.columns:

    clean_df = clean_df.drop_duplicates(
        subset=["unique_key"]
    )


# ===============================
# SAVE CLEAN DATASET
# ===============================

clean_df.to_csv(
    OUTPUT_FILE,
    index=False
)


# ===============================
# DISPLAY RESULTS
# ===============================

print("\n===== CLEANING COMPLETE =====")

print("Original records:", len(df))

print("Clean records:", len(clean_df))

print("Columns:", len(clean_df.columns))


print("\n===== ISSUE DISTRIBUTION =====")

print(
    clean_df["complaint_type"].value_counts()
)


print("\nSaved as:", OUTPUT_FILE)