function SectionOne({ complaintData, setComplaintData }) {
  const handleChange = (e) => {
    setComplaintData({
      ...complaintData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form-section">

      <h3>1. Origin & Customer Details</h3>

      <div className="form-grid">

        <div className="form-group">
          <label>Complaint Source</label>

          <input
            type="text"
            name="complaint_source"
            value={complaintData.complaint_source}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Customer Name</label>

          <input
            type="text"
            name="customer_name"
            value={complaintData.customer_name}
            onChange={handleChange}
          />
        </div>

      </div>

    </div>
  );
}

export default SectionOne;