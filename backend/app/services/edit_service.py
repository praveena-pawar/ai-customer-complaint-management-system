import json

from fastapi import HTTPException

from app.services.groq_service import edit_complaint


def update_complaint(request):

    ai_response = edit_complaint(
        current_complaint=request.current_complaint,
        instruction=request.instruction,
    )

    try:
        return json.loads(ai_response)

    except json.JSONDecodeError:
        raise HTTPException(
            status_code=500,
            detail="Invalid JSON received from AI."
        )