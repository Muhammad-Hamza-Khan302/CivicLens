from typing import Dict, Any


def create_plan(
    issue: Dict[str, Any],
    policy_context: str = ""
) -> Dict[str, Any]:
    """
    Create an execution plan for the CivicLens agentic workflow.

    The Planner decides which agents should be involved
    and in what order.
    """

    issue_type = issue.get("issue_type", "other")
    severity = issue.get("severity", "medium")

    plan = []

    # Every issue needs priority assessment
    plan.append("priority_agent")

    # Policy context is useful for civic recommendations
    if policy_context:
        plan.append("policy_review")

    # Project-related issues need project planning
    if issue_type in {
        "pothole",
        "garbage",
        "drainage",
        "streetlight",
        "road_damage"
    }:
        plan.append("project_agent")

    # Contractor selection comes after project planning
    if issue_type in {
        "pothole",
        "drainage",
        "streetlight",
        "road_damage"
    }:
        plan.append("contractor_agent")

    # High-risk issues should eventually be verified
    if severity in {
        "high",
        "critical"
    }:
        plan.append("verification_agent")

    return {
        "issue_type": issue_type,
        "severity": severity,
        "plan": plan
    }