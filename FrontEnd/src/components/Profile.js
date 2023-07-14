import React, { useEffect, useState } from "react";
import { format } from "date-fns";


function Profile({ usuario}) {
  const [descripcion, setDescripcion] = useState(false);


  useEffect(() => {
    console.log(usuario)
    if (usuario.Descripcion != ""){
      setDescripcion(true);
  }
  else {
      setDescripcion(false);
  }
  }, []);


  return (
    <div className="profile-container" >
     
            <div className="flex items-center gap-4 mt-5  ring-2 ring-pink-300 rounded-md mx-2">
        <div className="grid w-1/2 mx-2 mt-2">
            <img src={usuario.FotoPerfil} className="profile-image rounded-full ring-2" alt="Profile" />
            <div className="grid grid-cols-2 mt-2">
              <h1 className="profile-name col-start-1">
                {usuario.Nombre} {usuario.Apellido}
              </h1>
              <h1 className="profile-username col-start-2 mr-20">@{usuario.NombreUsuario}</h1>
            </div>
        </div>
        <div className="grid w-5/6">
          {descripcion && (
            <div>
              <div className="caja-descripcion rounded-md">
                <p className="">{usuario.Descripcion}</p>
              </div>
            </div>
          )}
          {!descripcion && (
            <div className="caja-descripcion rounded-md">
              <p className="profile-descripcion">
                <a className="underline">Agregar descripción</a>
              </p>
            </div>
          )}
        </div>
        </div>
      <div className="profile-descripcion">
        

        <p className="mb-2 mt-2 font-bold caja-descripcion2">
          
        </p>
        <p className="mb-2 mt-2 caja-descripcion2">Soltero </p>
        <p className="mb-2 mt-2 caja-descripcion2">Intereses: </p>
        <p className="mb-2 mt-2 caja-descripcion2">MIS EVENTOS</p>
        <p className="mb-2 mt-2 caja-descripcion2">EVENTOS ASISTIDOS</p>
        <p className="mb-2 mt-2 caja-descripcion2">EVENTOS ASISTIDOS</p>
        <p className="mb-2 mt-2 caja-descripcion2">EVENTOS ASISTIDOS</p>
        <p className="mb-2 mt-2 caja-descripcion2">EVENTOS ASISTIDOS</p>
      </div>
 
    </div>

  );
}

export default Profile;


