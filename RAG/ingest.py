from pathlib import Path

from pinecone import Pinecone

from RAG.config import (
    PINECONE_API_KEY,
    PINECONE_INDEX_NAME,
    PINECONE_NAMESPACE,
)


BASE_DIR = Path(__file__).resolve().parent.parent

POLICIES_DIR = BASE_DIR / "Data" / "policies"


def create_chunks(text, chunk_size=800):
    """
    Split policy text into simple word-based chunks.
    """

    words = text.split()

    chunks = []

    for i in range(0, len(words), chunk_size):

        chunk = " ".join(
            words[i:i + chunk_size]
        )

        if chunk.strip():

            chunks.append(chunk)

    return chunks


def ingest_documents():
    """
    Read all policy documents and upload their chunks
    to the CivicLens Pinecone knowledge base.
    """

    if not PINECONE_API_KEY:

        raise ValueError(
            "PINECONE_API_KEY is missing from .env"
        )

    if not POLICIES_DIR.exists():

        raise FileNotFoundError(
            f"Policy directory not found: {POLICIES_DIR}"
        )

    pc = Pinecone(
        api_key=PINECONE_API_KEY
    )

    index = pc.Index(
        PINECONE_INDEX_NAME
    )

    records = []

    policy_files = list(
        POLICIES_DIR.glob("*.txt")
    )

    if not policy_files:

        print("No policy documents found.")

        return

    for file_path in policy_files:

        text = file_path.read_text(
            encoding="utf-8",
            errors="ignore"
        )

        chunks = create_chunks(text)

        print(
            f"{file_path.name}: "
            f"{len(chunks)} chunks"
        )

        for chunk_number, chunk in enumerate(chunks):

            records.append(
                {
                    "_id": f"{file_path.stem}-{chunk_number}",
                    "text": chunk,
                    "source": file_path.name,
                }
            )

    if not records:

        print("No records to upload.")

        return

    index.upsert_records(
        namespace=PINECONE_NAMESPACE,
        records=records
    )

    print(
        f"Successfully uploaded "
        f"{len(records)} chunks."
    )

    print(
        f"Namespace: {PINECONE_NAMESPACE}"
    )


if __name__ == "__main__":

    ingest_documents()