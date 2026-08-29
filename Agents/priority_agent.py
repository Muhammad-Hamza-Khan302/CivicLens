import json
import re
from typing import Dict, Any, Optional

from Backend.LLM.groq_client import generate_response


ALLOWED_PRIORITIES = {
    "low",
    "medium",
    "high",
    "critical"
}


def extract_policy_urgency(
    policy_context: str,
    issue_type: str
) -> Optional[int]:

    if not policy_context:
        return None

    policy_text = policy_context.lower()

    if issue_type.lower() == "pothole":

        match = re.search(
            r"within\s+(\d+)\s+days",
            policy_text
        )

        if match:
            return int(match.group(1))

    return None


def assess_priority(
    issue: Dict[str, Any],
    policy_context: str = ""
) -> Dict[str, Any]:

    severity = issue.get(
        "severity",
        "medium"
    )

    issue_type = issue.get(
        "issue_type",
        "other"
    )

    description = issue.get(
        "description",
        ""
    )

    system_prompt = """
You are the CivicLens Priority Agent.

Your task is to assess the priority of a civic issue
using the provided issue information and retrieved
policy context.

IMPORTANT RULES:

1. Do not invent facts.
2. Do not invent policies.
3. Do not invent government procedures.
4. Do not invent response deadlines.
5. Do not calculate or estimate a number of urgency days.
6. The urgency timeframe will be determined separately
   from explicit policy information.
7. Use the retrieved policy context as evidence.
8. This is an AI-assisted recommendation, not a final
   government decision.
9. Explain why the selected priority is appropriate.
10. Return ONLY valid JSON.

Allowed priority values:

- low
- medium
- high
- critical

Return exactly:

{
    "priority": "low|medium|high|critical",
    "reasoning": "..."
}

Do NOT include estimated_urgency_days.
"""

    user_prompt = f"""
CIVIC ISSUE

Issue Type:
{issue_type}

Severity:
{severity}

Description:
{description}


RETRIEVED POLICY CONTEXT

{policy_context}


TASK

Determine the appropriate CivicLens priority.

Use only the information provided.

Do not create a response deadline.

Return only JSON.
"""

    try:

        response = generate_response(
            system_prompt,
            user_prompt
        )

        result = json.loads(response)

        priority = str(
            result.get("priority", "")
        ).lower().strip()

        if priority not in ALLOWED_PRIORITIES:
            raise ValueError(
                "Invalid priority returned by LLM"
            )

        reasoning = result.get(
            "reasoning",
            ""
        )

        if not reasoning:
            raise ValueError(
                "Missing priority reasoning"
            )

        urgency_days = extract_policy_urgency(
            policy_context=policy_context,
            issue_type=issue_type
        )

        return {
            "priority": priority,
            "estimated_urgency_days": urgency_days,
            "reasoning": reasoning
        }

    except Exception:

        if severity == "critical":

            priority = "critical"

        elif severity == "high":

            priority = "high"

        elif severity == "medium":

            priority = "medium"

        else:

            priority = "low"

        urgency_days = extract_policy_urgency(
            policy_context=policy_context,
            issue_type=issue_type
        )

        return {
            "priority": priority,
            "estimated_urgency_days": urgency_days,
            "reasoning": (
                f"The issue has {severity} severity. "
                f"The priority was determined using "
                f"the CivicLens fallback assessment."
            )
        }