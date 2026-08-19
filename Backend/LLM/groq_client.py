from groq import Groq

from Backend.Config.settings import settings


client = Groq(
    api_key=settings.GROQ_API_KEY
)


def generate_response(
    system_prompt: str,
    user_prompt: str
) -> str:
    """
    Send a prompt to Groq and return the generated response.
    """

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": system_prompt
            },
            {
                "role": "user",
                "content": user_prompt
            }
        ],
        temperature=0.7
    )

    return response.choices[0].message.content