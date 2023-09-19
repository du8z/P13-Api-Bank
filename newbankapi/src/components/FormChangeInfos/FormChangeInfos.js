import React, { useState } from "react";
import { connect } from "react-redux";
import { updateData } from "../../Actions/changeUserInfos";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/authSlice";

export default function FormChangeName() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [name, setName] = useState("");
  const [refreshComponent, setRefreshComponent] = useState(false); // Ajout de l'état pour actualiser le composant
  const dispatch = useDispatch();
  const handleFirstnameInput = (e) => setFirstName(e.target.value);
  const handleLastNameInput = (e) => setLastName(e.target.value);
  const token = useSelector((state) => state.auth.token);
  const userData = useSelector((state) => state.auth.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = `{"firstName": "${firstName}","lastName": "${lastName}"}`;
      console.log(data);
      setName(userData);

      dispatch(updateData(token, data));
      dispatch(setUser(data));

      // Définir l'état refreshComponent à true pour actualiser la partie du composant
      setRefreshComponent(true);
    } catch (err) {}
  };
  console.log(refreshComponent);
  return (
    <div>
      <h1>
        Welcome back
        <br />
        {refreshComponent ? (
          `${userData.firstName} ${userData.lastName} !`
        ) : (
          `${userData.firstName} ${userData.lastName} !`
        )}
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
