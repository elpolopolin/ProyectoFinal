import React, { useContext ,useEffect, useState } from "react";
import { format } from "date-fns";
import './styles/Profile.css';
import { UsuarioContext } from "../App";


function Profile({ logout }) { // Receive logout prop

  const [descripcion, setDescripcion] = useState(false);
  const usuario = useContext(UsuarioContext); //llama a usuario del context, este puede ser llamado desde toda la app..
  const [mostrarPanelConfiguracion, setMostrarPanelConfiguracion] = useState(false);
 

  useEffect(() => {
    if (usuario.Descripcion !== "") {
      setDescripcion(true);
    } else {
      setDescripcion(false);
    }
  }, [usuario.Descripcion]);

  const formatDateDDMMYY = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };


  return (
    <div className="profile-container">

    {/*configuration */}
      <div className="drawer">
    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
     
      <label htmlFor="my-drawer" className=" absolute top-0 right-0"><a className="text-2xl">⚙️</a></label>
    </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
          <li> <a className="hover:bg-red-500" onClick={logout}>
        Cerrar Sesion
        </a> </li>
        </ul>
      </div>
    </div>
       
    
    <img src={usuario.FotoPerfil} className="profile-image" alt="Profile" />
      <h1 className="profile-name">
        {usuario.Nombre} {usuario.Apellido}
      </h1>
      <p className="profile-username">@{usuario.NombreUsuario}</p>
      <br></br>
      {descripcion && (
        <span class="inline-block align-baseline ">
        <div className="caja-descripcion">
          <p className="profile-descripcion">{usuario.Descripcion}</p>
        </div>
        </span>
      )}
  
      {!descripcion && (
        <div className="caja-descripcion">
          <p className="profile-descripcion">
            <a className="underline">Agregar descripcion</a>
          </p>
        </div>
      )}
      <div className="text-center mt-10  bg-blue-200">
      <p className="text-white bg-red-500">{formatDateDDMMYY(usuario.FechaNacimiento)}</p>
      <p className="text-white bg-orange-500">{usuario.Direccion}</p>
      <p className="text-white bg-yellow-600">Genero: {usuario.Genero}</p>
      <p className="text-white bg-green-800 w-full"> .</p>
      <p className="text-white bg-blue-800 w-full"> .</p>
      <p className="text-white bg-fuchsia-500 w-full"> .</p>
      </div>
      
      <br></br>


    
    </div>
  );
}

export default Profile;