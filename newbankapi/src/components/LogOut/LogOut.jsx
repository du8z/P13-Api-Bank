import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/authSlice";

const svg = (

<svg width="20" height="17" viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.225 0.585815V10.428H69.5937V59.6388H30.225V69.481H79.4358V0.585815H30.225ZM40.0672 20.2702V30.1123H0.698486V39.9545H40.0672V49.7967L59.7515 35.0334L40.0672 20.2702Z" fill="black"/>
</svg>
)


const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };
  const Cursor = {
    cursor : 'pointer',

  }
  const Flex = {
    display: 'flex',
    alignItems: 'center',
  }
  const Marge = {
    marginRight: '15px',
    marginTop: '6px',
  }
  return (
    <div style={Flex}>
    <div style={Marge}>
      {svg}
    </div>
    <div onClick={handleLogout} style={Cursor}>
         Log Out
    </div>
    </div>
  );
};

export default LogoutButton;