from typing import Dict


def format_response(
    answer: str,
    issue_type: str = "",
    severity: str = "",
    recommendation: str = ""
) -> Dict:
    """
    Format the LLM response into a consistent CivicLens structure.
    """

    return {
        "answer": answer,
        "issue_type": issue_type,
        "severity": severity,
        "recommendation": recommendation
    }