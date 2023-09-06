import imgLogo from "../../img/argentBankLogo.png";
import { useNavigate, link   } from 'react-router-dom';
import React from 'react';

export default function Logo() {
    const Cursor = {
      cursor : 'pointer',
    }


const navigate = useNavigate();

  return (
    <div onClick={()=> navigate('../')} style={Cursor}>
      <img className="main-nav-logo-image" src={imgLogo} alt="Argent Bank Logo" />
      <h1 className="sr-only">Argent Bank</h1>
    </div>
  );
}