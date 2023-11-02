import React, { useContext ,useEffect, useState } from "react";
import { format } from "date-fns";
import './styles/Profile.css';
import { UsuarioContext } from "../App";
import axios from "axios";
import { HostContext } from "../App";
import { Link } from "react-router-dom";


function Profile({ logout, cargarUsuario }) { // Receive logout prop
  const host = useContext(HostContext);
  const [descripcion, setDescripcion] = useState(false);
  const usuario = cargarUsuario(); //aca llamamos a cargar usuario asi actualiza desde app.js y podemos acceder a su data correctamente (aunque esto es una mala praxis la app la arme asi y me da paja hacer una buena authentication etc)
  const [mostrarPanelConfiguracion, setMostrarPanelConfiguracion] = useState(false);
  const [categoriasUser, setCategoriasUser] = useState([]);

  useEffect(() => {
    if (usuario.Descripcion !== "") {
      setDescripcion(true);
    } else {
      setDescripcion(false);
    }

  }, [usuario.Descripcion]);

  useEffect(() => {
    CargarCategoriasDeUsuario();
  },[]);

  const formatDateDDMMYY = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const CargarCategoriasDeUsuario = () => {
    if (usuario) {
      const link = host + "/CategoriasDeUsuario/" + usuario.Id;
      axios
      .get(link)
      .then((result) => { 
        const ids = result.data;
          axios
          .post(`${host}/getCategorias`, { categoriaIds: ids })
          .then((response) => {
            console.log("Categorías obtenidas:", response.data);
            setCategoriasUser(response.data)
          })
          .catch((error) => {
            console.error("Error al obtener categorías:", error);
          });
          
      })
    }
  }

  const getRandomColor = () => {
    const colors = ['red', 'blue', 'green', 'purple', 'indigo', 'pink', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  }

  return (
    <div className="profile-container overflow-y-auto">
   
   <div className="drawer">
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked={mostrarPanelConfiguracion}
          onChange={() => setMostrarPanelConfiguracion(!mostrarPanelConfiguracion)}
        />
        <div className="drawer-content"></div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <li><a>Editar perfil</a></li>

            <Link  to={`/EventosUsuario`} className="cursor-pointer">
            <li><a className="hover:bg-green-300" >Mis Eventos</a> </li>
            </Link>
            <Link  to={`/categorias`} className="cursor-pointer">
            <li><a className="hover:bg-pink-300" >Mis Categorias</a> </li>
            </Link>
            <li>
              <a className="hover:bg-red-500" onClick={logout}>
                Cerrar Sesión
              </a>
            </li>
          </ul>
        </div>
      </div>

   
    <div class="">

     <i class="text-2xl p-2 absolute top-0 right-2 text-black fa fa-cog" aria-hidden="true"  onClick={() => setMostrarPanelConfiguracion(!mostrarPanelConfiguracion)}></i>
  
    <div class="  transition-all text-white rounded-lg ">
    <div class="  ">
            <img src={usuario.FotoPerfil} style={{width: "100%", height:"300px"}}/>
        </div>
        <div class="md:mt-12 mt-12  ">
                
                <div class="flex gap-1">
                    <p class="text-lg font-bold">@{usuario.NombreUsuario}</p>
                </div>
          
            <div class="flex gap-20 mt-5 text-m">
            <div class="flex flex-col gap-1">
                <div class="flex gap-3 items-center text-gray-200">
                    <i class="text-gray-100 fa fa-id-card-o"></i>
                    <p class=" font-semibold" >{usuario.Nombre} {usuario.Apellido} </p>
                </div>
                
                <div class="flex gap-3 items-center">
                    <i class="text-gray-100 fa fa-address-card"></i>
                    <p class="font-semibold ">{usuario.Genero}</p>
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
                
            </div>
            
            </div>

                    <div className="border rounded-lg p-2 mt-5 mx-auto max-w-md h-30 overflow-y-auto">
                    <p className="text-center">{usuario.Descripcion}</p>
                    </div> 
            {    /*   <button class="my-5 h-12 w-full bg-blue-500 cursor-pointer text-white transition-all hover:bg-blue-800 rounded-lg ">Añadir como amigo</button>  esto va solo en verperfil*/ }
        </div>

              <div className="text-center">
        <h1 className="text-xl font-bold my-4">Categorías:</h1>
      </div>
      <div className="flex flex-wrap gap-4">
        {categoriasUser.map((category, index) => (
          <div
            key={category.IdCategoria}
            className={` text-center p-4 rounded-lg cursor-pointer`}
          >
            <h3 className="text-white">{category.NombreCategoria}</h3>
          </div>
        ))}
      </div>
    </div>
</div>


    
    </div>
  );
}

export default Profile;


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
