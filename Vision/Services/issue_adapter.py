from Backend.Models.issue import Issue, IssueType, Severity
from Vision.Models.vision_result import VisionResult


def vision_to_issue(
    vision_result: VisionResult,
    issue_id: str,
    report_id: str
) -> Issue:
    """
    Convert VisionResult into the existing CivicLens Issue model.
    """

    return Issue(
        issue_id=issue_id,
        report_id=report_id,
        issue_type=IssueType(
            vision_result.issue_type
        ),
        severity=Severity(
            vision_result.severity
        ),
        confidence=vision_result.confidence,
        description=vision_result.description
    )