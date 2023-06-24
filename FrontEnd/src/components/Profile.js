import React, { useEffect, useState } from "react";

function Profile({ usuario }) {

    const [descripcion, setDescripcion] = useState(false)

    useEffect(() => {
        if (usuario.Descripcion == ""){
            setDescripcion(true);
        }
        else {
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
    
    {!descripcion &&
        <div className="caja-descripcion">
        <p className="profile-descripcion">{usuario.Descripcion}</p>
        </div>
    }
    {descripcion &&
        <div className="caja-descripcion">
        <p className="profile-descripcion"><a className="underline">Agregar descripcion</a></p>
        </div>
    }
     <p className="profile-nacimiento">{usuario.FechaNacimiento}</p>
    

    </div>
  );
}

export default Profile;