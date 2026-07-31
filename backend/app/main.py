import logging

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers.edit_router import router as edit_router
from app.routers.pdf_router import router as pdf_router
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

# Allow React frontend to communicate with FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "Welcome to AI Customer Complaint Management System API"
    }

app.include_router(router)
app.include_router(edit_router)
app.include_router(pdf_router)