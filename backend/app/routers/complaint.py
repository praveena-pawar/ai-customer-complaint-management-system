from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.schemas.copilot import ComplaintRequest, ComplaintResponse
from app.services.complaint_service import analyze_complaint

router = APIRouter()


@router.post("/copilot/analyze", response_model=ComplaintResponse)
def analyze(
    request: ComplaintRequest,
    db: Session = Depends(get_db)
):
    return analyze_complaint(request, db)