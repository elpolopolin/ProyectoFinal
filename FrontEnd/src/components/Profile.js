import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import './styles/Profile.css';

function Profile({ usuario, logout }) { // Receive logout prop
  const [descripcion, setDescripcion] = useState(false);

  useEffect(() => {
    if (usuario.Descripcion !== "") {
      setDescripcion(true);
    } else {
      setDescripcion(false);
    }
  }, []);

  return (
    <div className="profile-container">
      <img src={usuario.FotoPerfil} className="profile-image" alt="Profile" />
      <h1 className="profile-name">
        {usuario.Nombre} {usuario.Apellido}
      </h1>
      <p className="profile-username">@{usuario.NombreUsuario}</p>
      
      {descripcion && (
        <div className="caja-descripcion">
          <p className="profile-descripcion">{usuario.Descripcion}</p>
        </div>
      )}
      {!descripcion && (
        <div className="caja-descripcion">
          <p className="profile-descripcion">
            <a className="underline">Agregar descripcion</a>
          </p>
        </div>
      )}

      <br></br>
      <button onClick={logout} className="logout-button btn btn-outline btn-error">
        Cerrar Sesion
      </button>
    </div>
  );
}

export default Profile;