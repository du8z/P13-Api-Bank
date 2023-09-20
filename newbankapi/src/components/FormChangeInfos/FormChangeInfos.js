import React, { useState } from "react";
import { connect } from "react-redux";
import { updateData } from "../../Actions/changeUserInfos";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser, updateNameData } from "../../redux/authSlice";

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
      // const data = `{
      //   "firstName": "${firstName}",
      //   "lastName": "${lastName}"
      // }`;
      const jsonData = `{"firstName": "${firstName}", "lastName": "${lastName}"}`

      await dispatch(updateData(token, jsonData));

      const updatedData = JSON.parse(jsonData)
      
      console.log(updatedData);
      await dispatch(updateNameData(updatedData));
      await dispatch(setUser(updatedData));


      // Définir l'état refreshComponent à true pour actualiser la partie du composant
      setFirstName("");
      setLastName("");
    
      // return 
      
    } catch (err) {}
  };
  return (
    <div>
      <h1>
        Welcome back
        <br />
        {userData.firstName} {userData.lastName} !
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleFirstnameInput}
          placeholder="Prénom"
        />
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleLastNameInput}
          placeholder="Nom"
        />
        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  );
}
