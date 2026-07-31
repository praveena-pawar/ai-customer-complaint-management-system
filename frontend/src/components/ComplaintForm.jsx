import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionFour from "./SectionFour";
import RiskAssessment from "./RiskAssessment";
import CommitButton from "./CommitButton";

import "../styles/ComplaintForm.css";

function ComplaintForm({ complaintData, setComplaintData }) {
  return (
    <div className="complaint-form">

      <h2>Complaint Details</h2>

      <SectionOne
        complaintData={complaintData}
        setComplaintData={setComplaintData}
      />

      <SectionTwo
        complaintData={complaintData}
        setComplaintData={setComplaintData}
      />



      <SectionFour
        complaintData={complaintData}
        setComplaintData={setComplaintData}
      />

      <RiskAssessment complaintData={complaintData} />

      <CommitButton />

    </div>
  );
}

export default ComplaintForm;