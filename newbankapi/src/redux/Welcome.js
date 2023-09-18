import { useDispatch, useSelector, useStore } from "react-redux"
import { selectCurrentToken, selectCurrentUser,} from "./authSlice"
import { Link } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import UserProfile from "../components/UserProfile/UserProfile"
import React, { useEffect, useState } from 'react';
import { fetchUserInfo } from "../Actions/userAction"
import { FETCH_USER_INFO_SUCCESS } from "../Actions/userAction"
import { apiSlice } from "../app/api/apiSlice"


const Welcome = () => {
    const store = useStore()
    const dispatch = useDispatch();
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)
   
      const users = store.getState().auth.user
      console.log(users);
    



    const Welcome = user ? `Welcome ${user} !` : 'Welcome'
    const tokenAbbr = `${token.slice(0,9)}...`
    const content = (
        <MainLayout>
        <section className="welcome">
            <h1>Welcome {user.firstName} {user.lastName}</h1>
            <p>Token : {tokenAbbr} </p>
            <p>first Name : </p>
        </section>
        {/* <UserProfile/> */}
        </MainLayout>
    )
    return content
}
export default Welcome





