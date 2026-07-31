import { useState } from "react";
import {
  analyzeComplaint,
  editComplaint,
  uploadPDF,
} from "../services/api";

import LoadingSpinner from "./LoadingSpinner";
import "../styles/AIChat.css";

function AIChat({
  loading,
  setLoading,
  complaintData,
  setComplaintData,
}) {
  const [message, setMessage] = useState("");

  const [chatMessages, setChatMessages] = useState([
    {
      sender: "ai",
      text: "Hello! I'm your AI Complaint Copilot. Paste a customer complaint or upload a PDF to begin.",
    },
  ]);

  const handleAnalyze = async () => {
    if (!message.trim()) return;

    try {
      setLoading(true);

      const userMessage = message;

      setChatMessages((prev) => [
        ...prev,
        {
          sender: "user",
          text: userMessage,
        },
      ]);

      const hasExistingComplaint =
        complaintData.product_name ||
        complaintData.batch_number ||
        complaintData.complaint_description;

      const response = hasExistingComplaint
        ? await editComplaint(complaintData, userMessage)
        : await analyzeComplaint(userMessage);

      setComplaintData(response);

      setChatMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: hasExistingComplaint
            ? "Complaint updated successfully."
            : "Complaint analyzed successfully.",
        },
      ]);

      setMessage("");
    } catch (error) {
      console.error(error);
      alert("Failed to process complaint.");
    } finally {
      setLoading(false);
    }
  };

  const handlePDFSelect = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setLoading(true);

      setChatMessages((prev) => [
        ...prev,
        {
          sender: "pdf",
          text: file.name,
        },
      ]);

      const response = await uploadPDF(file);

      setComplaintData(response);

      setChatMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "PDF processed successfully. Complaint information has been extracted.",
        },
      ]);
    } catch (error) {
      console.error(error);
      alert("Failed to process PDF.");
    } finally {
      setLoading(false);
      e.target.value = "";
    }
  };

  return (
    <div className="ai-chat">
      <div className="copilot-header">
        <div className="header-left">
          <span className="header-icon">⚗</span>

          <div>
            <h2>AIVOA Copilot</h2>
            <p>Drop complaint files or paste text below.</p>
          </div>
        </div>

        <span className="status-dot"></span>
      </div>

      <div className="chat-window">
        {chatMessages.map((chat, index) => (
          <div
            key={index}
            className={`chat-message ${chat.sender}`}
          >
            {chat.sender === "ai" && "🤖 "}
            {chat.sender === "user" && "👤 "}
            {chat.sender === "pdf" && "📄 "}
            {chat.text}
          </div>
        ))}

        {loading && <LoadingSpinner />}
      </div>

      <div className="chat-footer">
        <div className="chat-input">
          <input
            id="pdf-upload"
            type="file"
            accept=".pdf"
            hidden
            onChange={handlePDFSelect}
          />

          <button
            type="button"
            className="attach-btn"
            onClick={() =>
              document.getElementById("pdf-upload").click()
            }
          >
            📎
          </button>

          <textarea
            rows={1}
            className="message-input"
            placeholder="Type a message or paste a complaint..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            type="button"
            className="send-btn"
            onClick={handleAnalyze}
          >
            ✓
          </button>
        </div>

        <div className="powered">
          POWERED BY LANGGRAPH
        </div>
      </div>
    </div>
  );
}

export default AIChat;