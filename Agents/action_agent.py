import json
from typing import Dict, Any

from Backend.LLM.groq_client import generate_response


def recommend_action(
    issue: Dict[str, Any],
    priority_result: Dict[str, Any],
    policy_context: str = ""
) -> Dict[str, Any]:

    issue_type = issue.get(
        "issue_type",
        "other"
    )

    severity = issue.get(
        "severity",
        "medium"
    )

    description = issue.get(
        "description",
        ""
    )

    priority = priority_result.get(
        "priority",
        "medium"
    )

    urgency_days = priority_result.get(
        "estimated_urgency_days"
    )

    system_prompt = """
You are the CivicLens Action Agent.

Your task is to recommend a practical corrective
action for a civic issue.

IMPORTANT RULES:

1. Use only the provided issue information,
   priority information, and retrieved policy context.

2. Do NOT invent facts.

3. Do NOT invent government agencies.

4. Do NOT invent government procedures.

5. Do NOT invent response deadlines.

6. Do NOT invent staff roles, case managers,
   follow-up procedures, inspections, or approvals.

7. Do NOT create a new timeframe such as:
   - 24 hours
   - 48 hours
   - 72 hours
   - 5 days
   - 7 days
   unless that exact timeframe is explicitly
   supported by the retrieved policy context.

8. If the policy provides a relevant timeframe,
   you may mention that timeframe accurately.

9. Clearly distinguish between:
   - what the policy says
   - what CivicLens recommends.

10. Do not claim that an AI recommendation is
    an official government requirement.

11. Keep the recommendation practical and concise.

12. Do not make a final government decision.

13. Return ONLY valid JSON.

Return exactly:

{
    "recommended_action": "...",
    "reasoning": "..."
}
"""

    user_prompt = f"""
CIVIC ISSUE

Issue Type:
{issue_type}

Severity:
{severity}

Description:
{description}


ASSIGNED CIVICLENS PRIORITY

Priority:
{priority}

Policy-based urgency timeframe:
{urgency_days if urgency_days is not None else "Not specified"}


RETRIEVED POLICY CONTEXT

{policy_context}


TASK

Recommend the most appropriate corrective action.

The recommendation must be grounded in the
provided information.

If the policy identifies a responsible agency,
you may mention that agency.

If the policy provides a response timeframe,
you may mention it.

If no timeframe is provided, do not create one.

Do not add unsupported government procedures.

Return only JSON.
"""

    try:

        response = generate_response(
            system_prompt,
            user_prompt
        )

        result = json.loads(
            response
        )

        recommended_action = result.get(
            "recommended_action",
            ""
        )

        reasoning = result.get(
            "reasoning",
            ""
        )

        if not recommended_action:
            raise ValueError(
                "Missing recommended action"
            )

        if not reasoning:
            raise ValueError(
                "Missing action reasoning"
            )

        unsupported_timeframes = [
            "24 hours",
            "48 hours",
            "72 hours",
            "48-72 hours",
            "5 days",
            "7 days",
            "within 24",
            "within 48",
            "within 72"
        ]

        policy_text = policy_context.lower()

        for timeframe in unsupported_timeframes:

            if timeframe in recommended_action.lower():

                if timeframe not in policy_text:

                    raise ValueError(
                        "Unsupported response timeframe "
                        "detected in AI recommendation"
                    )

        return {
            "recommended_action": recommended_action,
            "reasoning": reasoning
        }

    except Exception:

        if issue_type == "pothole":

            recommended_action = (
                "Prioritize municipal review of the "
                "reported pothole and arrange appropriate "
                "road repair through the responsible "
                "municipal process."
            )

        else:

            recommended_action = (
                "Inspect the reported issue and take "
                "the appropriate corrective action."
            )

        return {
            "recommended_action": recommended_action,
            "reasoning": (
                "The recommendation was generated using "
                "a safe fallback because the AI action "
                "response could not be validated."
            )
        }