from pathlib import Path


ALLOWED_EXTENSIONS = {
    ".jpg",
    ".jpeg",
    ".png",
    ".webp"
}

MAX_IMAGE_SIZE_MB = 20


def validate_image_path(image_path: str) -> bool:
    """
    Validate that the image exists,
    has a supported format,
    and is within the allowed size.
    """

    path = Path(image_path)

    if not path.exists():
        return False

    if not path.is_file():
        return False

    if path.suffix.lower() not in ALLOWED_EXTENSIONS:
        return False

    file_size_mb = path.stat().st_size / (1024 * 1024)

    if file_size_mb > MAX_IMAGE_SIZE_MB:
        return False

    return True