import React, { useState } from "react";
import { updateData } from "../../Actions/changeUserInfos";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser, updateNameData } from "../../redux/authSlice";
import './FormChangeInfos.css'
export default function FormChangeName() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch();
  const handleFirstnameInput = (e) => setFirstName(e.target.value);
  const handleLastNameInput = (e) => setLastName(e.target.value);
  const token = useSelector((state) => state.auth.token);
  const userData = useSelector((state) => state.auth.user);




  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const jsonData = `{"firstName": "${firstName}", "lastName": "${lastName}"}`

      await dispatch(updateData(token, jsonData));

      const updatedData = JSON.parse(jsonData)
      
      console.log(updatedData);
      await dispatch(updateNameData(updatedData));
      await dispatch(setUser(updatedData));


      setFirstName("");
      setLastName("");
    
      
    } catch (err) {}
  };
  return (
    <div >
      <h1 style={{ margin: 0 }} >
        Welcome back
        <br />
        {userData.firstName} {userData.lastName} !
      </h1>
      <form onSubmit={handleSubmit} className="changeInfos" >
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleFirstnameInput}
          placeholder="Prénom"
          className="sign-in-button button"
        />
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleLastNameInput}
          placeholder="Nom"
          className="sign-in-button button"
        />
        <button type="submit" className="sign-in-button buttonValid" >Mettre à jour</button>
      </form>
    </div>
  );
}
