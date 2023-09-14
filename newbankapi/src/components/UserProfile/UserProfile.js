import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserInfo } from '../../Actions/userAction';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { userInfo, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (token) {
      dispatch(fetchUserInfo(token));
    }
  }, [dispatch, token]);

  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  if (error) {
    return <div>Une erreur s'est produite : {error}</div>;
  }

  // Vérifiez si userInfo est défini avant de l'utiliser
  if (!userInfo) {
    return null; // ou tout autre rendu par défaut si l'info de l'utilisateur n'est pas encore chargée
  }

  return (
    <div>
      {/* <h2>Profil de l'utilisateur</h2>
      <p>Nom: {userInfo.firstName} {userInfo.lastName}</p>
      <p>Email: {userInfo.email}</p>
      Autres informations de l'utilisateur */}
    </div>
  );
};

export default UserProfile;
