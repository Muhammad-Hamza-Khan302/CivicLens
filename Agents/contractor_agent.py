from typing import Dict, Any


# -----------------------------------------
# Issue → Contractor Specialization
# -----------------------------------------

SPECIALIZATION_MAP = {
    "pothole": "road_repair",
    "road_damage": "road_repair",
    "drainage": "drainage_maintenance",
    "streetlight": "electrical_maintenance",
    "garbage": "waste_management"
}


def recommend_contractor(
    issue: Dict[str, Any]
) -> Dict[str, Any]:
    """
    Identify the contractor specialization required
    for the reported civic issue.

    This agent does NOT select or invent a contractor.
    Actual contractor selection should be performed
    using the contractor database.
    """

    issue_type = issue.get(
        "issue_type",
        "other"
    )

    issue_type = str(
        issue_type
    ).lower().strip()

    # -----------------------------------------
    # Determine required specialization
    # -----------------------------------------

    specialization = SPECIALIZATION_MAP.get(
        issue_type
    )

    # -----------------------------------------
    # Known issue type
    # -----------------------------------------

    if specialization:

        return {
            "required_specialization": specialization,
            "selection_status": "pending"
        }

    # -----------------------------------------
    # Unknown issue type
    # -----------------------------------------

    return {
        "required_specialization": None,
        "selection_status": "pending",
        "reason": (
            "No contractor specialization could be "
            "determined from the available issue type."
        )
    }