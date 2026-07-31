import json
import os
import tempfile

from fastapi import APIRouter, File, HTTPException, UploadFile

from app.services.pdf_service import extract_text_from_pdf
from app.services.groq_service import analyze_complaint

router = APIRouter(tags=["PDF Upload"])


@router.post("/copilot/upload-pdf")
async def upload_pdf(file: UploadFile = File(...)):

    if not file.filename.lower().endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Only PDF files are allowed."
        )

    with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as temp:
        temp.write(await file.read())
        temp_path = temp.name

    try:
        text = extract_text_from_pdf(temp_path)

        ai_response = analyze_complaint(text)

        return json.loads(ai_response)

    except json.JSONDecodeError:
        raise HTTPException(
            status_code=500,
            detail="Invalid JSON received from AI."
        )

    finally:
        os.remove(temp_path)