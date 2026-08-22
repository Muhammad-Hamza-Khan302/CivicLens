from RAG.rag_service import get_policy_context


def get_rag_context(
    question: str,
    top_k: int = 3
) -> str:
    """
    Get relevant civic policy context from the CivicLens RAG system.

    This function acts as the Backend bridge to the RAG module.
    """

    return get_policy_context(
        question=question,
        top_k=top_k
    )