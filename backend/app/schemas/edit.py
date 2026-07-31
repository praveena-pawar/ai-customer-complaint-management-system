from pydantic import BaseModel

from app.schemas.copilot import ComplaintResponse


class EditComplaintRequest(BaseModel):
    instruction: str
    current_complaint: dict


class EditComplaintResponse(ComplaintResponse):
    pass