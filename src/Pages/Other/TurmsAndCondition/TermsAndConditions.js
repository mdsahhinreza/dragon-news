import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div style={{ minHeight: "85vh" }}>
      <h3>Here is out terms and conditions</h3>
      <p>
        Go back to Registration : <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default TermsAndConditions;
