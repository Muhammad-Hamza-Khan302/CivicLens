import requests
import pandas as pd
from io import StringIO
from pathlib import Path


# Public civic-service dataset
URL = "https://data.cityofnewyork.us/resource/erm2-nwe9.csv"

params = {
    "$limit": 10000,
    "$order": "created_date DESC"
}


# Save the file in the same folder as this script
BASE_DIR = Path(__file__).resolve().parent

OUTPUT_FILE = BASE_DIR / "civic_issues.csv"


print("Downloading public civic issue data...")

response = requests.get(
    URL,
    params=params,
    timeout=120
)

response.raise_for_status()


df = pd.read_csv(
    StringIO(response.text)
)


df.to_csv(
    OUTPUT_FILE,
    index=False
)


print("\n===== DATASET DOWNLOAD COMPLETE =====")

print("Records:", len(df))
print("Columns:", len(df.columns))

print("Saved as:", OUTPUT_FILE)

print("\nAvailable columns:")

print(df.columns.tolist())