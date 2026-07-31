import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const analyzeComplaint = async (complaintText) => {
  try {
    const response = await API.post("/copilot/analyze", {
      complaint_text: complaintText,
    });

    console.log("SUCCESS:", response);
    return response.data;
  } catch (error) {
    console.log("AXIOS ERROR:", error);

    if (error.response) {
      console.log("Status:", error.response.status);
      console.log("Data:", error.response.data);
    }

    throw error;
  }
};




export const editComplaint = async (currentComplaint, instruction) => {
  try {
    const response = await API.post("/copilot/edit", {
      current_complaint: currentComplaint,
      instruction: instruction,
    });

    return response.data;
  } catch (error) {
    console.log("AXIOS ERROR:", error);

    if (error.response) {
      console.log("Status:", error.response.status);
      console.log("Data:", error.response.data);
    }

    throw error;
  }
};




export const uploadPDF = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await API.post("/copilot/upload-pdf", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};