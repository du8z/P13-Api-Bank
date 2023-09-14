import { Children } from "react";
import imgLogo from "../../img/argentBankLogo.png";
import SignIn from "../SignIn/SignIn";
import Logo from "../Logo/Logo";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import LogoutButton from "../LogOut/LogOut";


export default function Menu() {
  const [data, setData] = useState(null);

  let location = useLocation();
  const navigate = useNavigate();
  if (location.pathname === "/login" || location.pathname === "/") {
    return (
      <div>
        <nav className="main-nav">
          <a>
            <Logo />
          </a>
          <SignIn onClick={() => navigate("./login")} />
        </nav>
      </div>
    );
  } else {
    return (
      <div>
        <nav className="main-nav">
          <a>
            <Logo />
          </a>
          <LogoutButton />
        </nav>
      </div>
    );
  }
}
