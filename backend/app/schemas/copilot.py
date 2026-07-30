from pydantic import BaseModel


class ComplaintRequest(BaseModel):
    complaint_text: str


class ComplaintResponse(BaseModel):
    complaint_source: str
    customer_name: str

    product_name: str
    product_strength: str
    batch_number: str
    manufacturing_date: str
    expiry_date: str
    affected_quantity: str

    complaint_category: str
    complaint_description: str

    severity: str
    suggested_next_action: str
    risk_assessment: str

    summary: str