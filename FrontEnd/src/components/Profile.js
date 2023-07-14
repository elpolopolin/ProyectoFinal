import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import './Profile.css';


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
      <img src={usuario.FotoPerfil} className="profile-image rounded-full ring-2" alt="Profile" />
        <h1 className="profile-name col-start-1">
          {usuario.Nombre} {usuario.Apellido}
        </h1>
          <h1 className="profile-username col-start-2">@{usuario.NombreUsuario}</h1>
           <div className="caja-descripcion mt-2  ">
              {descripcion && (
                <div>
                  <p className="">{usuario.Descripcion}</p>
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
        
      <div className="profile-descripcion">
        <div className="usuario-fechanacimiento">
        {format(
                    new Date(usuario.FechaNacimiento),
                    "MMMM/dd/yyyy "
                  )}
        
        </div>
          
        <p className="mb-2 mt-2 caja-descripcion2">Soltero </p>
        <p className="mb-2 mt-2 caja-descripcion2">Intereses: </p>
        <div className="flex w-full">
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
          <div className="divider divider-horizontal"></div>
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
        </div>
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


