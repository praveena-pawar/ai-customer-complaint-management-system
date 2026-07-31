function SectionFour({ complaintData, setComplaintData }) {
  const handleChange = (e) => {
    setComplaintData({
      ...complaintData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form-section">

      <h3>4. Defect Analysis</h3>

      <div className="form-group">
        <label>Complaint Category</label>

        <input
          type="text"
          name="complaint_category"
          value={complaintData.complaint_category}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Complaint Description</label>

        <textarea
          rows="5"
          name="complaint_description"
          value={complaintData.complaint_description}
          onChange={handleChange}
        />
      </div>

    </div>
  );
}

export default SectionFour;