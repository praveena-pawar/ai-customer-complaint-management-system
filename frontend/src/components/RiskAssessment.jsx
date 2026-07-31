function RiskAssessment({ complaintData }) {
  return (
    <div className="risk-card">

      <div className="risk-header">
        🛡 AI Copilot Risk Assessment
      </div>

      <div className="form-group">
        <label>Severity (Suggested)</label>

        <input
          type="text"
          value={complaintData.severity}
          readOnly
        />
      </div>

      <div className="form-group">
        <label>Suggested Next Action</label>

        <textarea
          rows="3"
          value={complaintData.suggested_next_action}
          readOnly
        />
      </div>

      <div className="form-group">
        <label>Initial Risk Assessment</label>

        <textarea
          rows="4"
          value={complaintData.risk_assessment}
          readOnly
        />
      </div>

    </div>
  );
}

export default RiskAssessment;