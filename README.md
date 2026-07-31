# 🧠 AI Customer Complaint Management System

An AI-powered Customer Complaint Management System built using **React**, **FastAPI**, **LangGraph**, and **Groq AI**. The application automates complaint analysis by extracting structured information from customer complaints or PDF documents, assessing risk, and storing validated complaints in a Quality Management System (QMS).

---

---

# 🚀 Live Demo

### Frontend

https://ai-customer-complaint-management-sy.vercel.app

### Backend API

https://ai-customer-complaint-management-system.onrender.com/docs

---


## 🚀 Features

- 🤖 AI-powered complaint analysis
- 📝 AI-assisted complaint editing
- 📄 PDF complaint upload and information extraction
- 🧾 Automatic form population
- ⚠️ AI-generated risk assessment
- 📊 Severity classification
- ✅ Commit complaints to the QMS Ledger
- 💬 Interactive AI Copilot chat interface

---

## 🛠️ Tech Stack

### Frontend
- React
- Axios
- CSS

### Backend
- FastAPI
- LangGraph
- Groq API
- SQLAlchemy
- Pydantic

### Database
- SQLite

### AI
- Groq LLM
- LangGraph Workflow

---

# 📂 Project Structure

```text
AI-Customer-Complaint-Management-System/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── styles/
│   └── package.json
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── database/
│   │   ├── langgraph/
│   │   ├── models/
│   │   ├── schemas/
│   │   ├── services/
│   │   └── utils/
│   └── requirements.txt
│
└── README.md
```

---

# ⚙️ Application Workflow

```text
Customer Complaint / PDF
           │
           ▼
     React Frontend
           │
           ▼
      FastAPI Backend
           │
           ▼
   LangGraph Workflow
           │
           ▼
        Groq AI
           │
           ▼
 Structured Complaint Data
           │
           ▼
Automatic Form Population
           │
           ▼
 AI Risk Assessment
           │
           ▼
 Commit to QMS Ledger
           │
           ▼
       SQLite Database
```

---

# 📋 Complaint Information Extracted

The AI automatically extracts:

- Complaint Source
- Customer Name
- Product Name
- Product Strength
- Batch Number
- Manufacturing Date
- Expiry Date
- Affected Quantity
- Complaint Category
- Complaint Description
- Severity
- Suggested Next Action
- Risk Assessment
- Summary

---

# 🤖 AI Workflow

The LangGraph workflow performs the following steps:

1. Receive complaint text or extracted PDF text.
2. Send the complaint to the Groq Large Language Model.
3. Extract structured complaint information.
4. Generate severity and risk assessment.
5. Return structured JSON.
6. Populate the frontend complaint form.
7. Commit validated complaints to the QMS database.

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/analyze` | Analyze customer complaint |
| POST | `/edit` | Edit existing complaint |
| POST | `/upload-pdf` | Upload and analyze PDF |
| POST | `/commit` | Commit complaint to QMS |

---

# ▶️ Installation

## Clone Repository

```bash
git clone https://github.com/praveena-pawar/ai-customer-complaint-management-system.git
```

---

## Backend

```bash
cd backend

pip install -r requirements.txt

uvicorn app.main:app --reload
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```


# 🎯 Future Improvements

- Authentication and user management
- Complaint history dashboard
- Email notifications
- Analytics and reporting
- Multi-language complaint support
- Cloud database deployment

---

# 👩‍💻 Author

**Praveena Pawar**

GitHub: https://github.com/praveena-pawar

LinkedIn: https://www.linkedin.com/in/praveena-pawar-ai

---

# ⭐ Acknowledgements

- React
- FastAPI
- LangGraph
- Groq
- SQLAlchemy
