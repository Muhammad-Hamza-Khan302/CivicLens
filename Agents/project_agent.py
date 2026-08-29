import json
from typing import Dict, Any

from Backend.LLM.groq_client import generate_response


def create_project(
    issue: Dict[str, Any],
    action_result: Dict[str, Any],
    priority_result: Dict[str, Any],
    policy_context: str = ""
) -> Dict[str, Any]:
    """
    Generate a grounded civic project recommendation.

    The project must remain limited to the reported issue,
    recommended action, and retrieved policy context.
    """

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

    recommended_action = action_result.get(
        "recommended_action",
        ""
    )

    priority = priority_result.get(
        "priority",
        "medium"
    )

    urgency_days = priority_result.get(
        "estimated_urgency_days"
    )

    # -----------------------------------------
    # SYSTEM PROMPT
    # -----------------------------------------

    system_prompt = """
You are the CivicLens Project Agent.

Your task is to convert a civic issue and its
recommended corrective action into a simple,
grounded civic project.

IMPORTANT RULES:

1. Use ONLY the information provided.

2. Do NOT invent:
   - locations
   - budgets
   - contractors
   - officials
   - staff roles
   - case managers
   - request numbers
   - tracking systems
   - communication procedures
   - websites
   - phone numbers
   - apps
   - government workflows

3. Do NOT invent deadlines.

4. Do NOT create follow-up procedures.

5. Do NOT create monitoring procedures.

6. Do NOT create documentation requirements.

7. Do NOT invent how a government agency operates.

8. If a responsible agency is explicitly present
   in the provided policy context, it may be mentioned.

9. If an explicit policy timeframe is provided,
   it may be mentioned only as policy context.

10. The project should describe the actual corrective
    work required for the civic issue.

11. Keep the project concise.

12. Do not make a final government decision.

13. Return ONLY valid JSON.

Return exactly:

{
    "project_title": "...",
    "project_description": "..."
}
"""

    # -----------------------------------------
    # USER PROMPT
    # -----------------------------------------

    user_prompt = f"""
CIVIC ISSUE

Issue Type:
{issue_type}

Severity:
{severity}

Description:
{description}


PRIORITY

{priority}


POLICY-BASED URGENCY

{urgency_days if urgency_days is not None else "Not specified"}


RECOMMENDED ACTION

{recommended_action}


RETRIEVED POLICY CONTEXT

{policy_context}


TASK

Create a simple civic project.

The project should describe:

- what civic issue needs to be addressed
- what corrective work is required
- the responsible agency only if explicitly supported
- the policy timeframe only if explicitly provided

Do NOT create:

- service request procedures
- tracking procedures
- follow-up procedures
- monitoring procedures
- documentation procedures
- invented deadlines
- invented government workflows

Return only JSON.
"""

    try:

        response = generate_response(
            system_prompt,
            user_prompt
        )

        result = json.loads(response)

        project_title = result.get(
            "project_title",
            ""
        )

        project_description = result.get(
            "project_description",
            ""
        )

        if not project_title:
            raise ValueError(
                "Missing project title"
            )

        if not project_description:
            raise ValueError(
                "Missing project description"
            )

        # -----------------------------------------
        # VALIDATION
        # -----------------------------------------

        project_text = (
            project_title + " " +
            project_description
        ).lower()

        policy_text = policy_context.lower()

        # Unsupported workflow/procedure phrases
        unsupported_phrases = [
            "request number",
            "tracking system",
            "track the request",
            "monitor the request",
            "follow up",
            "follow-up",
            "case manager",
            "online portal",
            "mobile app",
            "phone",
            "document all communications",
            "record all communications",
            "contact dot",
            "contact the department"
        ]

        for phrase in unsupported_phrases:

            if phrase in project_text:

                if phrase not in policy_text:

                    raise ValueError(
                        "Unsupported government procedure "
                        f"detected: {phrase}"
                    )

        # -----------------------------------------
        # Validate unsupported timeframes
        # -----------------------------------------

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

        for timeframe in unsupported_timeframes:

            if timeframe in project_text:

                if timeframe not in policy_text:

                    raise ValueError(
                        "Unsupported timeframe detected: "
                        f"{timeframe}"
                    )

        # -----------------------------------------
        # Return validated result
        # -----------------------------------------

        return {
            "project_title": project_title,
            "project_description": project_description
        }

    except Exception:

        # -----------------------------------------
        # SAFE FALLBACK
        # -----------------------------------------

        clean_issue_type = (
            issue_type
            .replace("_", " ")
            .title()
        )

        project_title = (
            f"{clean_issue_type} Repair"
        )

        project_description = (
            recommended_action
            or (
                f"Address the reported {clean_issue_type.lower()} "
                "through appropriate corrective work."
            )
        )

        return {
            "project_title": project_title,
            "project_description": project_description
        }