function ResultForm() {
  return (
    <div className="card">

      <h2>AI Extracted Details</h2>

      <form>

        <label>Complaint Source</label>
        <input type="text" placeholder="Complaint Source" />

        <label>Customer Name</label>
        <input type="text" placeholder="Customer Name" />

        <label>Product Name</label>
        <input type="text" placeholder="Product Name" />

        <label>Product Strength</label>
        <input type="text" placeholder="Product Strength" />

        <label>Batch Number</label>
        <input type="text" placeholder="Batch Number" />

        <label>Manufacturing Date</label>
        <input type="text" placeholder="Manufacturing Date" />

        <label>Expiry Date</label>
        <input type="text" placeholder="Expiry Date" />

        <label>Affected Quantity</label>
        <input type="text" placeholder="Affected Quantity" />

        <label>Complaint Category</label>
        <input type="text" placeholder="Complaint Category" />

        <label>Severity</label>
        <input type="text" placeholder="Severity" />

        <label>Suggested Next Action</label>
        <textarea
          rows="3"
          placeholder="Suggested Next Action"
        ></textarea>

        <label>Risk Assessment</label>
        <textarea
          rows="3"
          placeholder="Risk Assessment"
        ></textarea>

        <label>Complaint Description</label>
        <textarea
          rows="5"
          placeholder="Complaint Description"
        ></textarea>

        <label>Summary</label>
        <textarea
          rows="4"
          placeholder="Summary"
        ></textarea>

      </form>

    </div>
  );
}

export default ResultForm;