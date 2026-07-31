import { useState } from "react";

import "../styles/Dashboard.css";

import Header from "../components/Header";
import ComplaintForm from "../components/ComplaintForm";
import AIChat from "../components/AIChat";

function Dashboard() {
  const [complaintData, setComplaintData] = useState({
    complaint_source: "",
    customer_name: "",
    product_name: "",
    product_strength: "",
    batch_number: "",
    manufacturing_date: "",
    expiry_date: "",
    affected_quantity: "",
    complaint_category: "",
    complaint_description: "",
    severity: "",
    suggested_next_action: "",
    risk_assessment: "",  
    summary: "",
    facility: "",
    material: "",
    market: "",
    country: "",
  });

  const [loading, setLoading] = useState(false);

  return (
    <div className="dashboard">
      <Header />

      <div className="dashboard-body">
        <div className="left-panel">
          <ComplaintForm
            complaintData={complaintData}
            setComplaintData={setComplaintData}
          />
        </div>

        <div className="right-panel">
          <AIChat
            loading={loading}
            setLoading={setLoading}
            complaintData={complaintData}
            setComplaintData={setComplaintData}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;