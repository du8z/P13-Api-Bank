import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/authSlice";


const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };
  const Cursor = {
    cursor : 'pointer',
  }
  return (
    <div onClick={handleLogout} style={Cursor}>
        LogOut
    </div>
  );
};

export default LogoutButton;