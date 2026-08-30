from Backend.Database.database import SessionLocal
from Backend.Database.user_model import UserDB
from Backend.Services.auth_service import hash_password


def create_user(
    db,
    user_id,
    name,
    email,
    password,
    role
):
    existing_user = db.query(UserDB).filter(
        UserDB.email == email
    ).first()

    if existing_user:
        print(f"{role.upper()} user already exists:")
        print(f"Email: {email}")
        print(f"User ID: {existing_user.user_id}")
        return

    user = UserDB(
        user_id=user_id,
        name=name,
        email=email,
        password_hash=hash_password(password),
        role=role
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    print(f"{role.upper()} user created successfully.")
    print(f"User ID : {user.user_id}")
    print(f"Name    : {user.name}")
    print(f"Email   : {user.email}")
    print(f"Role    : {user.role}")


db = SessionLocal()

try:
    create_user(
        db=db,
        user_id="GOV-001",
        name="CivicLens Government",
        email="government@civiclens.pk",
        password="Gov@12345",
        role="government"
    )

    print()

    create_user(
        db=db,
        user_id="ADM-001",
        name="CivicLens Administrator",
        email="admin@civiclens.pk",
        password="Admin@12345",
        role="admin"
    )

finally:
    db.close()


print()
print("Test user creation complete.")