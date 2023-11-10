import React, { useContext ,useEffect, useState } from "react";
import { HostContext } from "../App";
import axios from "axios";
import { Link, BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function EventosDeUsuario({cargarUsuario}) {
    const host = useContext(HostContext);
    const usuario = cargarUsuario(); //aca llamamos a cargar usuario asi actualiza desde app.js y podemos acceder a su data correctamente (aunque esto es una mala praxis la app la arme asi y me da paja hacer una buena authentication etc)
    const [eventosUser, setEventosUser] = useState([]);
    
    useEffect(() => {
        cargarEventos();
      },[]);

    const cargarEventos = () => {
        let link = host + "/eventosUser/";
        link += usuario.Id;
        axios
          .get(link)
          .then((result) => {
            setEventosUser(result.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };

    return (
        <div className="p-4">
    <h1 className="text-white text-center mb-4 font-bold text-2xl">Eventos Usuario:</h1>
    <div className="card-container overflow-y-scroll">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-x-5 xl:gap-x-8">
        {eventosUser.map((event) => (
          <div key={event.id} className="relative flex flex-col text-gray-700 bg-white dark:bg-neutral-700 shadow-md rounded-xl bg-clip-border">
            <div className="relative mx-4 mt-4 overflow-hidden shadow-lg h-48 rounded-xl bg-clip-border">
              <img src={event.ImagenEvento} alt="profile-picture" className="w-full h-full object-cover rounded-t-lg" />
            </div>
            <div className="p-6 text-center">
              <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal dark:text-white text-blue-gray-900">
                {event.Nombre}
              </h4>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
                Categoria {event.idCategoria}
              </p>
              <Link to={`/EditarEvento/${event.Id}`} >
              <button className="bg-pink-500 text-white px-4 py-2 mt-4 rounded-full hover:bg--700 focus:outline-none">
                Editar
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
    )
}

export default EventosDeUsuario;