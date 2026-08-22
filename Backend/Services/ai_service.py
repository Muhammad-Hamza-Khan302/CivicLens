from Backend.Agents.issue_analyzer import analyze_issue

from Backend.LLM.groq_client import generate_response

from Backend.LLM.prompts import (
    SYSTEM_PROMPT,
    build_issue_analysis_prompt
)

from Backend.LLM.response_formatter import format_response

from Backend.Services.rag_service import (
    get_policy_context
)


def analyze_issue_with_rag(
    description: str
) -> dict:
    """
    Analyze a civic issue using:

    1. Local issue analysis
    2. RAG policy retrieval
    3. Groq LLM
    4. Response formatting
    """

    # -----------------------------------------
    # STEP 1: Local issue analysis
    # -----------------------------------------

    analysis = analyze_issue(
        description
    )

    issue_type = analysis["issue_type"]
    severity = analysis["severity"]
    confidence = analysis["confidence"]

    # -----------------------------------------
    # STEP 2: Retrieve policy context
    # -----------------------------------------

    policy_context = get_policy_context(
        description
    )

    # -----------------------------------------
    # STEP 3: Convert values to strings
    # -----------------------------------------

    issue_type_value = getattr(
        issue_type,
        "value",
        str(issue_type)
    )

    severity_value = getattr(
        severity,
        "value",
        str(severity)
    )

    # -----------------------------------------
    # STEP 4: Build prompt
    # -----------------------------------------

    user_prompt = build_issue_analysis_prompt(
        issue_type=issue_type_value,
        severity=severity_value,
        confidence=confidence,
        description=description,
        policy_context=policy_context
    )

    # -----------------------------------------
    # STEP 5: Generate LLM response
    # -----------------------------------------

    answer = generate_response(
        SYSTEM_PROMPT,
        user_prompt
    )

    # -----------------------------------------
    # STEP 6: Format response
    # -----------------------------------------

    return format_response(
        answer=answer,
        issue_type=issue_type_value,
        severity=severity_value,
        recommendation=answer
    )