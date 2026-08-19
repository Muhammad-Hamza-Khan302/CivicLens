from Backend.Agents.decision_agent import create_decision
from Backend.Models.issue import IssueType, Severity


result = create_decision(
    IssueType.POTHOLE,
    Severity.HIGH
)


print("Decision Analysis")
print("-----------------")
print("Priority:", result["priority"].value)
print("Recommended Action:", result["recommended_action"])
print("Reasoning:", result["reasoning"])
print("Urgency:", result["estimated_urgency_days"], "days")