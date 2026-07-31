function CommitButton() {
  const handleCommit = () => {
    alert("Complaint committed successfully.");
  };

  return (
    <button className="commit-button" onClick={handleCommit}>
      Commit to QMS Ledger
    </button>
  );
}

export default CommitButton;