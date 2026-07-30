from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.sql import func

from app.database.database import Base


class Complaint(Base):
    __tablename__ = "complaints"

    id = Column(Integer, primary_key=True, index=True)

    complaint_source = Column(String(100), nullable=False)
    customer_name = Column(String(100), nullable=False)

    product_name = Column(String(255), nullable=False)
    product_strength = Column(String(100), nullable=False)
    batch_number = Column(String(100), nullable=False)

    manufacturing_date = Column(String(100), nullable=False)
    expiry_date = Column(String(100), nullable=False)

    affected_quantity = Column(String(100), nullable=False)

    complaint_category = Column(String(100), nullable=False)
    complaint_description = Column(Text, nullable=False)

    severity = Column(String(50), nullable=False)
    suggested_next_action = Column(Text, nullable=False)
    risk_assessment = Column(Text, nullable=False)

    summary = Column(Text, nullable=False)

    created_at = Column(DateTime(timezone=True), server_default=func.now())