import { useNavigate } from "react-router-dom";
import React from "react";

export default function SignIn() {

  const navigate = useNavigate();
  function handleClick() {
    navigate("/login");
  }
  const Cursor = {
    cursor : 'pointer',
  }

  return (
    <div onClick={handleClick} style={Cursor}>
      <i className="fa fa-user-circle"></i>
      Sign In
    </div>
  );
}
