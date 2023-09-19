export const updateData = (token, data) => {
  console.log(token, data);
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: data,
      });
      if (!response.ok) {
        throw new Error("Échec de la mise à jour des données");
      }

      // Dispatchez une action Redux pour mettre à jour l'état global si nécessaire
      dispatch({ type: "UPDATE_DATA_SUCCESS", payload: data });
    } catch (error) {
      console.error(error);
      // Dispatchez une action Redux pour gérer les erreurs si nécessaire
      dispatch({ type: "UPDATE_DATA_FAILURE", payload: error.message });
    }
  };
};

