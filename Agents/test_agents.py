from Agents.agent_orchestrator import run_agent_workflow


def main():

    issue = {
        "issue_type": "pothole",
        "severity": "high",
        "confidence": 0.95,
        "description": (
            "A large pothole is visible on the road "
            "with cracked pavement around it."
        ),
        "safety_risk": "high"
    }

    result = run_agent_workflow(
        issue=issue,
        policy_context=""
    )

    print("\n--- CivicLens Agentic AI Result ---")

    for agent_name, agent_result in result.items():

        print(f"\n[{agent_name.upper()}]")
        print(agent_result)


if __name__ == "__main__":
    main()