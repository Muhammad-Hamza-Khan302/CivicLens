import os
from dotenv import load_dotenv

load_dotenv()


class Settings:
    APP_NAME = "CivicLens"
    APP_VERSION = "1.0.0"

    # Groq
    GROQ_API_KEY = os.getenv("GROQ_API_KEY")

    if not GROQ_API_KEY:
        raise ValueError("GROQ_API_KEY is not set in the .env file")

    # Database
    DB_SERVER = os.getenv("DB_SERVER")
    DB_NAME = os.getenv("DB_NAME")
    DB_USER = os.getenv("DB_USER")
    DB_PASSWORD = os.getenv("DB_PASSWORD")
    DB_DRIVER = os.getenv("DB_DRIVER")


settings = Settings()