from typing import Any


def integrate_ai_components(
    vision_result: Any = None,
    rag_result: Any = None,
    agent_result: Any = None
) -> dict:
    """
    Combine results received from Vision, RAG, and Agentic AI components.
    """

    return {
        "vision": vision_result,
        "rag": rag_result,
        "agent": agent_result
    }