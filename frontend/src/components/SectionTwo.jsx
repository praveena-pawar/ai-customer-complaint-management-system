function SectionTwo({ complaintData, setComplaintData }) {

  const handleChange = (e) => {
    setComplaintData({
      ...complaintData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form-section">

      <h3>2. Product & Batch Identification</h3>

      <div className="form-grid">

        <div className="form-group">
          <label>Product Name</label>

          <input
            type="text"
            name="product_name"
            value={complaintData.product_name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Product Strength</label>

          <input
            type="text"
            name="product_strength"
            value={complaintData.product_strength}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Batch Number</label>

          <input
            type="text"
            name="batch_number"
            value={complaintData.batch_number}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Affected Quantity</label>

          <input
            type="text"
            name="affected_quantity"
            value={complaintData.affected_quantity}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Manufacturing Date</label>

          <input
            type="text"
            name="manufacturing_date"
            value={complaintData.manufacturing_date || ""}
            onChange={handleChange}
            placeholder="DD-MM-YYYY"
          />

        </div>


        <div className="form-group">
          <label>Expiry Date</label>

          <input
            type="text"
            name="expiry_date"
            value={complaintData.expiry_date || ""}
            onChange={handleChange}
            placeholder="DD-MM-YYYY"
          />


        </div>

      </div>

    </div>
  );
}

export default SectionTwo;