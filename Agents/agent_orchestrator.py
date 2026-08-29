from typing import Dict, Any

from Agents.planner_agent import create_plan
from Agents.priority_agent import assess_priority
from Agents.action_agent import recommend_action
from Agents.project_agent import create_project
from Agents.contractor_agent import recommend_contractor
from Agents.verification_agent import request_verification

from Backend.Services.rag_service import get_policy_context


def run_agent_workflow(
    issue: Dict[str, Any],
    policy_context: str = ""
) -> Dict[str, Any]:
    """
    Run the complete CivicLens Agentic AI workflow.

    Workflow:

    1. Retrieve policy context
    2. Planner Agent
    3. Priority Agent
    4. Action Agent
    5. Project Agent
    6. Contractor Agent
    7. Verification Agent
    """

    # -----------------------------------------
    # STEP 0: Retrieve Policy Context
    # -----------------------------------------

    if not policy_context:

        policy_question = (
            f"Civic issue: "
            f"{issue.get('issue_type', 'other')}. "

            f"Severity: "
            f"{issue.get('severity', 'medium')}. "

            f"Description: "
            f"{issue.get('description', '')}. "
        )

        policy_context = get_policy_context(
            question=policy_question,
            top_k=3
        )

    # -----------------------------------------
    # STEP 1: Planner Agent
    # -----------------------------------------

    plan = create_plan(
        issue=issue,
        policy_context=policy_context
    )

    # -----------------------------------------
    # STEP 2: Priority Agent
    # -----------------------------------------

    priority_result = assess_priority(
        issue=issue,
        policy_context=policy_context
    )

    # -----------------------------------------
    # STEP 3: Action Agent
    # -----------------------------------------

    action_result = recommend_action(
        issue=issue,
        priority_result=priority_result,
        policy_context=policy_context
    )

    # -----------------------------------------
    # STEP 4: Project Agent
    # -----------------------------------------

    project_result = create_project(
        issue=issue,
        action_result=action_result,
        priority_result=priority_result,
        policy_context=policy_context
    )

    # -----------------------------------------
    # STEP 5: Contractor Agent
    # -----------------------------------------

    contractor_result = recommend_contractor(
        issue
    )

    # -----------------------------------------
    # STEP 6: Verification Agent
    # -----------------------------------------

    verification_result = request_verification(
        issue
    )

    # -----------------------------------------
    # FINAL RESULT
    # -----------------------------------------

    return {
        "rag": {
            "policy_context": policy_context
        },

        "planner": plan,

        "priority": priority_result,

        "action": action_result,

        "project": project_result,

        "contractor": contractor_result,

        "verification": verification_result
    }