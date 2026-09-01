
import pyodbc


SERVER = r"DESKTOP-1T9BLN2\SQLEXPRESS"
DATABASE = "CivicLens"
USERNAME = "civiclens_app"

PASSWORD = input("Enter local SQL password: ")


connection_string = (
    f"DRIVER={{ODBC Driver 17 for SQL Server}};"
    f"SERVER={SERVER};"
    f"DATABASE={DATABASE};"
    f"UID={USERNAME};"
    f"PWD={PASSWORD};"
    f"TrustServerCertificate=yes;"
)


try:
    connection = pyodbc.connect(connection_string)

    cursor = connection.cursor()

    tables = [
        "users",
        "reports",
        "issues",
        "decisions",
        "projects",
        "contractors"
    ]

    print("\nLOCAL SQL SERVER DATA:")

    for table in tables:
        cursor.execute(f"SELECT COUNT(*) FROM [{table}]")
        count = cursor.fetchone()[0]
        print(f"{table}: {count}")

    cursor.close()
    connection.close()

    print("\nLOCAL SQL CONNECTION SUCCESS")

except Exception as e:
    print("\nLOCAL SQL CONNECTION FAILED")
    print(e)

