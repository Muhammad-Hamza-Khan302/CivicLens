from Backend.Models.issue import IssueType, Severity


def analyze_issue(description: str):
    """
    Locally analyze a civic issue description.
    No LLM/API tokens required.
    """

    text = description.lower()

    # Detect issue type
    if "pothole" in text or "road hole" in text:
        issue_type = IssueType.POTHOLE

    elif "garbage" in text or "trash" in text or "waste" in text:
        issue_type = IssueType.GARBAGE

    elif "drain" in text or "drainage" in text or "sewer" in text:
        issue_type = IssueType.DRAINAGE

    elif "streetlight" in text or "street light" in text:
        issue_type = IssueType.STREETLIGHT

    elif "road damage" in text or "damaged road" in text:
        issue_type = IssueType.ROAD_DAMAGE

    else:
        issue_type = IssueType.OTHER

    # Detect severity
    if any(word in text for word in [
        "critical",
        "dangerous",
        "accident",
        "collapsed",
        "severe"
    ]):
        severity = Severity.CRITICAL

    elif any(word in text for word in [
        "large",
        "major",
        "serious",
        "blocked",
        "broken"
    ]):
        severity = Severity.HIGH

    elif any(word in text for word in [
        "small",
        "minor"
    ]):
        severity = Severity.LOW

    else:
        severity = Severity.MEDIUM

    # Local confidence
    confidence = 0.90

    return {
        "issue_type": issue_type,
        "severity": severity,
        "confidence": confidence,
        "description": description
    }