import json
import logging

from fastapi import HTTPException
from langgraph.graph import StateGraph, END
from app.langgraph.state import ComplaintState
from app.services.groq_service import analyze_complaint

logger = logging.getLogger(__name__)

def analyze_complaint_node(state):

    ai_response = analyze_complaint(state["complaint_text"])
    print("\n========== RAW AI RESPONSE ==========")
    print(ai_response)
    print("=====================================\n")

    logger.info("AI response received successfully.")

    try:
        data = json.loads(ai_response)

        state["complaint_source"] = data.get("complaint_source", "")
        state["customer_name"] = data.get("customer_name", "")

        state["product_name"] = data.get("product_name", "")
        state["product_strength"] = data.get("product_strength", "")
        state["batch_number"] = data.get("batch_number", "")
        state["manufacturing_date"] = data.get("manufacturing_date", "")
        state["expiry_date"] = data.get("expiry_date", "")
        state["affected_quantity"] = data.get("affected_quantity", "")

        state["complaint_category"] = data.get("complaint_category", "")
        state["complaint_description"] = data.get("complaint_description", "")

        state["severity"] = data.get("severity", "")
        state["suggested_next_action"] = data.get("suggested_next_action", "")
        state["risk_assessment"] = data.get("risk_assessment", "")

        state["summary"] = data.get("summary", "")

        return state
    

    except json.JSONDecodeError:
        raise HTTPException(
            status_code=500,
            detail="Invalid JSON received from AI."
        )


graph_builder = StateGraph(ComplaintState)

graph_builder.add_node("analyze_complaint", analyze_complaint_node)

graph_builder.set_entry_point("analyze_complaint")

graph_builder.add_edge("analyze_complaint", END)

graph = graph_builder.compile()