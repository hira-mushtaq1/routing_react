import React from "react";
import { useNavigate } from "react-router-dom";
function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <h1>NotFound 404</h1>
      <div className="btnn">
        <button onClick={() => navigate("/")}>Go to Home</button>
        <button onClick={() => navigate("/contact")}>Go to Contact</button>
      </div>
    </>
  );
}

export default NotFound;
