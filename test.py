import os
import pyodbc
from dotenv import load_dotenv

load_dotenv()

server = os.getenv("DB_SERVER")
database = os.getenv("DB_NAME")
username = os.getenv("DB_USER")
password = os.getenv("DB_PASSWORD")
driver = os.getenv("DB_DRIVER")

print("SERVER:", server)
print("DATABASE:", database)
print("USER:", username)
print("PASSWORD SET:", bool(password))
print("DRIVER:", driver)

connection_string = (
    f"DRIVER={{{driver}}};"
    f"SERVER={server},1433;"
    f"DATABASE={database};"
    f"UID={username};"
    f"PWD={password};"
    "Encrypt=yes;"
    "TrustServerCertificate=no;"
    "Connection Timeout=10;"
)

try:
    connection = pyodbc.connect(connection_string)
    print("AZURE SQL CONNECTION SUCCESS")
    connection.close()
except Exception as e:
    print("AZURE SQL CONNECTION FAILED")
    print(e)