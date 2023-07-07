import React, { useEffect, useState } from "react";

function Profile({ usuario }) {

    const [descripcion, setDescripcion] = useState(false)

    useEffect(() => {
        if (usuario.Descripcion != ""){
            setDescripcion(true);
        }
        else {
            setDescripcion(false);
        }
      }, []);
    


  return (
    <div className="profile-container text-white">
      <img src={usuario.FotoPerfil} className="profile-image fotoperfil" alt="Profile" /> 
      <h1 className="profile-name text-center">
        {usuario.Nombre} {usuario.Apellido}
      </h1>
      <p className="profile-username text-center">@{usuario.NombreUsuario}</p>
    
    {descripcion &&

        <div className="container mx-auto border-2 border-double border-fuchsia-500">
        <p className="profile-descripcion">{usuario.Descripcion}</p>
        <p className="profile-username text-left">Soltero</p>
        <p className="profile-username text-left">Intereses: </p>
        <p className="profile-username text-left">MIS EVENTOS</p>
        <p className="profile-username text-left ">EVENTOS ASISTIDOS</p>
        </div>
    }

    {!descripcion &&
        <div className="caja-descripcion">
        <p className="profile-descripcion"><a className="underline">Agregar descripcion</a></p>
        </div>
    }
     <p className="profile-nacimiento">{usuario.FechaNacimiento}</p>
    
    </div>
  );
}

export default Profile;