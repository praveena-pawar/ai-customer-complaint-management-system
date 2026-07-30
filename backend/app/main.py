import logging
from fastapi import FastAPI

from app.routers.complaint import router

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s"
)

app = FastAPI(
    title="AI Customer Complaint Management System",
    description="AI-powered complaint analysis using FastAPI, LangGraph, and Groq.",
    version="1.0.0"
)


@app.get("/")
def home():
    return {
        "message": "Welcome to AI Customer Complaint Management System API"
    }


app.include_router(router)