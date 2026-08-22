from pinecone import Pinecone

from RAG.config import (
    PINECONE_API_KEY,
    PINECONE_INDEX_NAME,
    PINECONE_NAMESPACE,
)


if not PINECONE_API_KEY:

    raise ValueError(
        "PINECONE_API_KEY is missing from .env"
    )


pc = Pinecone(
    api_key=PINECONE_API_KEY
)

index = pc.Index(
    PINECONE_INDEX_NAME
)


def retrieve_context(question, top_k=3):
    """
    Retrieve the most relevant policy information
    from the CivicLens Pinecone knowledge base.
    """

    results = index.search(
        namespace=PINECONE_NAMESPACE,

        query={
            "inputs": {
                "text": question
            },
            "top_k": top_k
        },

        fields=[
            "text",
            "source"
        ]
    )

    contexts = []

    for hit in results.result.hits:

        text = hit.fields.get(
            "text",
            ""
        )

        source = hit.fields.get(
            "source",
            ""
        )

        if text:

            contexts.append(
                f"Source: {source}\n{text}"
            )

    return "\n\n---\n\n".join(
        contexts
    )