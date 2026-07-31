from fastapi import APIRouter

from app.schemas.edit import (
    EditComplaintRequest,
    EditComplaintResponse,
)
from app.services.edit_service import update_complaint

router = APIRouter(tags=["Edit Complaint"])


@router.post(
    "/copilot/edit",
    response_model=EditComplaintResponse,
)
def edit_complaint_endpoint(request: EditComplaintRequest):
    return update_complaint(request)