import base64
import json

from groq import Groq

from Backend.Config.settings import settings
from Vision.Models.vision_result import VisionResult, SafetyRisk


client = Groq(
    api_key=settings.GROQ_API_KEY
)


MODEL_NAME = "qwen/qwen3.6-27b"


def encode_image(image_path: str) -> str:
    with open(image_path, "rb") as image_file:
        return base64.b64encode(
            image_file.read()
        ).decode("utf-8")


def analyze_image(image_path: str) -> VisionResult:
    """
    Analyze a civic issue image using Groq Vision.
    """

    image_base64 = encode_image(
        image_path
    )

    prompt = """
Analyze this civic issue image for CivicLens.

Determine:

1. issue_type:
   - pothole
   - garbage
   - drainage
   - streetlight
   - road_damage
   - other

2. severity:
   - low
   - medium
   - high
   - critical

3. confidence:
   A number between 0 and 1 representing
   confidence in the issue classification.

4. description:
   A concise factual description of what is
   visibly present in the image.

5. safety_risk:
   - low
   - medium
   - high
   - critical

Rules:
- Only describe what can reasonably be observed.
- Do not invent information.
- Do not assume hidden damage.
- If the issue is unclear, use "other".
- Return ONLY valid JSON.

JSON format:

{
    "issue_type": "...",
    "severity": "...",
    "confidence": 0.0,
    "description": "...",
    "safety_risk": "..."
}
"""

    response = client.chat.completions.create(
        model=MODEL_NAME,
        messages=[
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": prompt
                    },
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": (
                                "data:image/jpeg;base64,"
                                f"{image_base64}"
                            )
                        }
                    }
                ]
            }
        ],
        response_format={
            "type": "json_object"
        },
        temperature=0.2
    )

    content = response.choices[0].message.content

    result = json.loads(content)

    return VisionResult(
        issue_type=result["issue_type"],
        severity=result["severity"],
        confidence=float(result["confidence"]),
        description=result["description"],
        safety_risk=SafetyRisk(
            result["safety_risk"]
        )
    )