import { useNavigate, useParams } from "react-router-dom";
import React from "react";
function Profile() {
  const param = useParams();
  console.log(param);
  const navigate = useNavigate();
  return (
    <>
      <h1>Welcome {param.userName}</h1>
      <p>This is my Name</p>
      <div className="btnn">
        <button onClick={() => navigate("/")}>Go to Home</button>
        <button onClick={() => navigate("/contact")}>Go to Contact</button>
      </div>
    </>
  );
}

export default Profile;
