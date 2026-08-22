import pandas as pd
from pathlib import Path


# ===============================
# FILE PATH
# ===============================

BASE_DIR = Path(__file__).resolve().parent

FILE_PATH = BASE_DIR / "civic_issues.csv"


# ===============================
# LOAD DATASET
# ===============================

df = pd.read_csv(FILE_PATH)


# ===============================
# DATASET OVERVIEW
# ===============================

print("\n===== DATASET OVERVIEW =====")

print("Rows:", len(df))

print("Columns:", len(df.columns))


# ===============================
# COMPLAINT TYPES
# ===============================

print("\n===== COMPLAINT TYPES =====")

if "complaint_type" in df.columns:

    print(
        df["complaint_type"]
        .value_counts()
        .head(30)
    )


# ===============================
# STATUS
# ===============================

print("\n===== STATUS =====")

if "status" in df.columns:

    print(
        df["status"]
        .value_counts()
    )


# ===============================
# MISSING VALUES
# ===============================

print("\n===== MISSING VALUES =====")

print(
    df.isnull()
    .sum()
    .sort_values(ascending=False)
    .head(15)
)


# ===============================
# SAMPLE RECORDS
# ===============================

print("\n===== SAMPLE RECORDS =====")


sample_columns = [
    "unique_key",
    "created_date",
    "complaint_type",
    "descriptor",
    "status",
    "borough",
    "latitude",
    "longitude"
]


available_columns = [
    column
    for column in sample_columns
    if column in df.columns
]


print(
    df[available_columns]
    .head(10)
    .to_string(index=False)
)