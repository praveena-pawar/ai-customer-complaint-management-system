from sqlalchemy.orm import Session

from app.database.models import Complaint


def create_complaint(db: Session, complaint_data: dict):
    complaint = Complaint(**complaint_data)

    db.add(complaint)
    db.commit()
    db.refresh(complaint)

    return complaint