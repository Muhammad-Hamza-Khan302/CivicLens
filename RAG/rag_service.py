from RAG.retrieve import retrieve_context


def get_policy_context(
    question: str,
    top_k: int = 3
) -> str:
    """
    Retrieve relevant government policy and SOP
    information from the CivicLens RAG system.
    """

    if not question or not question.strip():
        return ""

    return retrieve_context(
        question,
        top_k=top_k
    )