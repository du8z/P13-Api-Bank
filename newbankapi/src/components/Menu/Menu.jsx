import { Children } from "react";
import imgLogo from '../../img/argentBankLogo.png'
import SignIn from "../SignIn/SignIn";
import Logo from "../Logo/Logo";
import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate  } from 'react-router-dom';


export default function Menu() {



  const [data, setData] = useState(null);

/*   useEffect(() => {
        const fetchData = async () => {
              try {
                    const response = await fetch(
                          `http://localhost:3001/api/v1/user/signup`
                    );
                    const jsonData = await response.json();
                    setData(jsonData.data);
              } catch (error) {
                    console.error("Une erreur s'est produite :", error);
              }
        };

        fetchData();
        console.log(data);
  });  */

const navigate = useNavigate();

  return (
    <div>
      <nav className="main-nav">
        <a >
        <Logo  />
        </a>
        <SignIn onClick={()=> navigate('./login')} />
      </nav>
    </div>
  );
}
