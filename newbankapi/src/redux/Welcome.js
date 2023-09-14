import { useDispatch, useSelector } from "react-redux"
import { selectCurrentToken, selectCurrentUser,} from "./authSlice"
import { Link } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import UserProfile from "../components/UserProfile/UserProfile"
import React, { useEffect, useState } from 'react';
import { fetchUserInfo } from "../Actions/userAction"






const Welcome = () => {

    const dispatch = useDispatch();
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)
    const userData = useSelector((state) => state.auth.user)
    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
      });
    
      useEffect(() => {
        if (token) {
            dispatch(fetchUserInfo(token))
              .then((userData) => {
                // Mettre à jour l'état local avec les informations de l'utilisateur
                setUserInfo({
                //   firstName: userData.firstName,
                //   lastName: userData.lastName,
                });
              })
              .catch((error) => {
                console.error('Error in Welcome:', error);
              });
          }
        }, [dispatch, token]);


    const Welcome = user ? `Welcome ${user} !` : 'Welcome'
    const tokenAbbr = `${token.slice(0,9)}...`
    const content = (
        <MainLayout>
        <section className="welcome">
            <h1>{Welcome} </h1>
            <p>Token : {tokenAbbr} </p>
            <p>first Name : {userInfo.firstName}</p>
        </section>
        {/* <UserProfile/> */}
        </MainLayout>
    )
    return content
}
export default Welcome