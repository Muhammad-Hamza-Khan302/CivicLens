from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

from Backend.Config.settings import settings


DATABASE_URL = (
    f"mssql+pyodbc://{settings.DB_USER}:{settings.DB_PASSWORD}"
    f"@{settings.DB_SERVER}:1433/{settings.DB_NAME}"
    f"?driver={settings.DB_DRIVER.replace(' ', '+')}"
    f"&Encrypt=yes"
    f"&TrustServerCertificate=no"
    f"&Connection+Timeout=30"
)


engine = create_engine(
    DATABASE_URL,
    echo=False,
    pool_pre_ping=True,
    pool_recycle=1800,
    connect_args={
        "timeout": 30
    }
)


SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)


Base = declarative_base()


def get_db():
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()