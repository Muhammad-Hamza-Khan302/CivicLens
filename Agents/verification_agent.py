from typing import Dict, Any


def request_verification(
    issue: Dict[str, Any]
) -> Dict[str, Any]:
    """
    Determine whether a civic issue requires
    verification after corrective action.

    High-severity issues require verification.
    """

    severity = str(
        issue.get(
            "severity",
            "medium"
        )
    ).lower().strip()

    # -----------------------------------------
    # Verification Rule
    # -----------------------------------------

    requires_verification = severity in {
        "high",
        "critical"
    }

    # -----------------------------------------
    # Final Result
    # -----------------------------------------

    return {
        "requires_verification": requires_verification,
        "verification_status": (
            "required"
            if requires_verification
            else "not_required"
        )
    }