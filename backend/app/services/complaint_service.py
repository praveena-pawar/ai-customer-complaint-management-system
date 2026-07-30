from sqlalchemy.orm import Session

from app.database.crud import create_complaint
from app.langgraph.graph import graph


def analyze_complaint(request, db: Session):

    state = {
        "complaint_text": request.complaint_text,

        "complaint_source": "",
        "customer_name": "",

        "product_name": "",
        "product_strength": "",
        "batch_number": "",
        "manufacturing_date": "",
        "expiry_date": "",
        "affected_quantity": "",

        "complaint_category": "",
        "complaint_description": "",

        "severity": "",
        "suggested_next_action": "",
        "risk_assessment": "",

        "summary": ""
    }

    result = graph.invoke(state)

    complaint_data = {
        "complaint_source": result["complaint_source"],
        "customer_name": result["customer_name"],

        "product_name": result["product_name"],
        "product_strength": result["product_strength"],
        "batch_number": result["batch_number"],
        "manufacturing_date": result["manufacturing_date"],
        "expiry_date": result["expiry_date"],
        "affected_quantity": result["affected_quantity"],

        "complaint_category": result["complaint_category"],
        "complaint_description": result["complaint_description"],

        "severity": result["severity"],
        "suggested_next_action": result["suggested_next_action"],
        "risk_assessment": result["risk_assessment"],

        "summary": result["summary"]
    }

    create_complaint(db, complaint_data)

    return result