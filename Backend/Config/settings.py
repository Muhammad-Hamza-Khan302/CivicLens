
import os

from dotenv import load_dotenv


load_dotenv()


class Settings:

    APP_NAME = "CivicLens"
    APP_VERSION = "1.0.0"

    GROQ_API_KEY = os.getenv("GROQ_API_KEY")

    if not GROQ_API_KEY:
        raise ValueError(
            "GROQ_API_KEY is not set in the .env file"
        )

    DATABASE_URL = os.getenv("DATABASE_URL")

    if not DATABASE_URL:
        raise ValueError(
            "DATABASE_URL is not set in the .env file"
        )

    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")

    if not JWT_SECRET_KEY:
        raise ValueError(
            "JWT_SECRET_KEY is not set in the .env file"
        )

    JWT_ALGORITHM = "HS256"

    JWT_EXPIRE_MINUTES = 60


settings = Settings()

