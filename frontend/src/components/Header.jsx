import StatusBadge from "./StatusBadge";

function Header() {
  return (
    <header className="header">

      <div>

        <h1>
          Log Customer Complaint
        </h1>

        <p>
          API & FDF Quality Assurance Module
        </p>

      </div>

      <StatusBadge />

    </header>
  );
}

export default Header;