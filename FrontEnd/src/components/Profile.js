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
    <div className="drawer-content">    </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <li><a>Editar perfil</a></li>
          <li><a>Ayuda</a></li>
          <li> <a className="hover:bg-red-500" onClick={logout}>
        Cerrar Sesion
        </a> </li>
        </ul>
      </div>
    </div>
    <div class="flex justify-center min-h-screen">
    <div class="h-auto sm:w-96 w-[360px] transition-all text-white rounded-lg overflow-hidden">
    <div class="h-80 w-full ">
            <img src={usuario.FotoPerfil}/>
        </div>
        <div class="md:-mt-12 -mt-24 px-4 ">
            <p class="text-2xl font-semibold"></p>
            <div class="flex gap-6 ">
                <p class="text-lg font-semibold" >{usuario.Nombre} {usuario.Apellido} </p>
                <div class="flex gap-1">
                    <p class="text-lg font-semibold">@{usuario.NombreUsuario}</p>
                </div>
            </div>
            <div class="flex flex-col gap-1">
                <div class="flex gap-3 items-center text-gray-200">
                    <i class="text-gray-100 fa fa-id-card-o"></i>
                    <p class="font-semibold ">{formatDateDDMMYY(usuario.FechaNacimiento)}</p>
                </div>
                <div class="flex gap-3 items-center">
                    <i class="text-gray-100 fa fa-location-arrow"></i>
                    <p class="font-semibold ">{usuario.Direccion}</p>
                </div>
                <div class="flex gap-3 items-center">
                    <i class="text-gray-100 fa fa-address-card"></i>
                    <p class="font-semibold ">{usuario.Genero}</p>
                </div>
                <div class="flex gap-3 items-center">
                    <i class="text-gray-100"></i>
                    <p class="font-semibold ">{usuario.Descripcion}</p>
                </div>
            </div>
            <button class="my-5 h-12 w-full bg-blue-500 cursor-pointer text-white transition-all hover:bg-blue-800 rounded-lg ">Añadir como amigo</button>
        </div>
    </div>
</div>
{/*     
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
      
      <br></br> */}


    
    </div>
  );
}

export default Profile;