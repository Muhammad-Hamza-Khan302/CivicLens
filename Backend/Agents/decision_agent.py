from Backend.Models.issue import IssueType, Severity
from Backend.Models.decision import Priority


def create_decision(issue_type, severity):
    """
    Create a decision locally based on issue type and severity.
    No LLM required.
    """

    # Determine priority from severity
    if severity == Severity.CRITICAL:
        priority = Priority.CRITICAL
        urgency_days = 1

    elif severity == Severity.HIGH:
        priority = Priority.HIGH
        urgency_days = 3

    elif severity == Severity.MEDIUM:
        priority = Priority.MEDIUM
        urgency_days = 7

    else:
        priority = Priority.LOW
        urgency_days = 14

    # Determine recommended action
    if issue_type == IssueType.POTHOLE:
        action = "Repair the pothole and restore the damaged road surface."

    elif issue_type == IssueType.GARBAGE:
        action = "Arrange garbage collection and clean the affected area."

    elif issue_type == IssueType.DRAINAGE:
        action = "Inspect and clear the drainage system."

    elif issue_type == IssueType.STREETLIGHT:
        action = "Inspect and repair or replace the damaged streetlight."

    elif issue_type == IssueType.ROAD_DAMAGE:
        action = "Inspect and repair the damaged road."

    else:
        action = "Inspect the reported issue and determine the appropriate corrective action."

    reasoning = (
        f"The issue was classified as {issue_type.value} "
        f"with {severity.value} severity. "
        f"The recommended action is based on the issue type "
        f"and its severity."
    )

    return {
        "priority": priority,
        "recommended_action": action,
        "reasoning": reasoning,
        "estimated_urgency_days": urgency_days,
        "policy_references": []
    }