import React, { useContext ,useEffect, useState } from "react";
import { format } from "date-fns";
import './styles/Profile.css';
import { UsuarioContext } from "../App";
import dayjs from "dayjs";

function Profile({ logout }) { // Receive logout prop

  const [descripcion, setDescripcion] = useState(false);
  const usuario = useContext(UsuarioContext); //llama a usuario del context, este puede ser llamado desde toda la app..

  dayjs(usuario.FechaNacimiento).format("dd MM yyyy");

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
      <br></br>
      {descripcion && (
        <span class="inline-block align-baseline ...">
        <div className="caja-descripcion">
          <p className="profile-descripcion">{usuario.Descripcion}</p>
        </div>
        </span>
      )}

      {/* <span class="inline-block align-baseline ...">
        <div className="caja-descripcion">
          <p className="profile-descripcion">{usuario.Descripcion}</p> intereses
        </div>
        </span> */}
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