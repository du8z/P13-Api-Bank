import { Children } from "react";
import imgLogo from "../../img/argentBankLogo.png";
import SignIn from "../SignIn/SignIn";
import Logo from "../Logo/Logo";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import LogoutButton from "../LogOut/LogOut";
import { useSelector } from "react-redux";
import './Menu.css'


const svg = (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="24" fill="#E2E8F0"/>
    <g clip-path="url(#clip0_89_555)">
      <path d="M24 27.5C29.6812 27.5 34.2857 22.9115 34.2857 17.25C34.2857 11.5885 29.6812 7 24 7C18.3188 7 13.7143 11.5885 13.7143 17.25C13.7143 22.9115 18.3188 27.5 24 27.5ZM31.2 30.0625H29.858C28.0741 30.8793 26.0893 31.3438 24 31.3438C21.9107 31.3438 19.9339 30.8793 18.142 30.0625H16.8C10.8375 30.0625 6 34.8832 6 40.825V44.1562C6 46.2783 7.72768 48 9.85714 48H38.1429C40.2723 48 42 46.2783 42 44.1562V40.825C42 34.8832 37.1625 30.0625 31.2 30.0625Z" fill="white"/>
    </g>
    <defs>
      <clipPath id="clip0_89_555">
        <rect width="36" height="41" fill="white" transform="translate(6 7)"/>
      </clipPath>
    </defs>
  </svg>
);

export default function Menu() {
  const userData = useSelector((state) => state.auth.user);
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
          <div>         
            <a>
              <Logo />
            </a>
          </div>
        <div className="user">
          {svg}
          <p className="userMargin">{userData.firstName}</p>
          <LogoutButton />
        </div>
        </nav>
      </div>
    );
  }
}
