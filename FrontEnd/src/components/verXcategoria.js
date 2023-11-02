import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HostContext } from "../App";
import axios from "axios";
import { Link } from "react-router-dom";
import CalendarioIcon from "../icons/Calendario.png";
import { format } from "date-fns";
import EntradaIcon from "../icons/Entrada.png";
import PinIcon from "../icons/pin.png";

function VerXcategoria({cargarUsuario}) {
    const host = useContext(HostContext);
    const usuario = cargarUsuario();
    const { id } = useParams();
    const idd = parseInt(id); 
    const [eventos, setEventos] = useState([]);
    const [busqueda, setBusqueda] = useState("");
   

    useEffect(() => {
        cargarEventosDeCategoria()
      
      }, []);

   
  

      const cargarEventosDeCategoria = () =>{
        axios
        .get(host + "/EventosCategoria/" + idd)
        .then((result) => {
          const events = result.data;
          console.log(result.data)
          setEventos(events);
        })
        .catch((error) => {
          console.log(error);
        });
      }

    return (
        <>
        <div className="p-4">
        <div className="relative md:w-full md:flex md:justify-center">
        <input
        type="search"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        id="search-dropdown"
        className="block rounded-full p-2.5 w-full md:w-1/2 md: z-20 text-sm text-gray-900 bg-gray-50 border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
        placeholder="Search..."
        />
        <button
        type="submit"
        className="md:flex md:justify-center  rounded-r-full absolute top-0 right-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus-ring-blue-800"
        >
        <svg
            class="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
        >
            <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
        </svg>
        </button>
    </div>
            <div className="mana-container overflow-y-auto text-white">
            <div
              className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8 "
              style={{ marginTop: "30px" }}
            >
                    <div className="Eventos grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 xsm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            {eventos.map((eventop) => (
                        <div
                            key={eventop.Id}
                            className="group relative overflow-hidden rounded-lg bg-gray-200 shadow-indigo-500/50 shadow-lg"
                            style={{ aspectRatio: "1 / 1" }}
                        >
                            <Link
                            key={eventop.Id}
                            to={`/eventos/VerEvento/${eventop.Id}`}
                            className="cursor-pointer"
                            >
                    
                            
                                <img src={eventop.ImagenEvento} alt="..." 
                                className="h-full w-full object-cover object-center group-hover:opacity-75 transition duration-300"
                                />
                                <div className="categoria-overlay flex items-center justify-center absolute inset-0 bg-black bg-opacity-50 opacity-0 transition duration-300">
                                    <h1 className="m-2 md:m-0 bg-pink-500 p-4 w-full md:w-1/2 text-center">{eventop.Participando} / {eventop.Participantes}</h1>
                                </div>
                            
                            </Link>
                            <h3 className="mt-2 text-sm font-bold text-center absolute bottom-0 w-full bg-black bg-opacity-50 text-white py-2">
                     {eventop.Nombre}
                </h3>
                </div>
                ))}
            </div>
            </div>
            </div>
    </div>
 </>
)
}

export default VerXcategoria