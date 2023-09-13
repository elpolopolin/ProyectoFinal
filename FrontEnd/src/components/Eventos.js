import React, { useContext, useState, useEffect } from "react";
import { HostContext } from "../App";
import { format } from "date-fns";
import MostrarEvento from "./MostrarEvento";
import axios from "axios";
import CalendarioIcon from "../icons/Calendario.png";
import EntradaIcon from "../icons/Entrada.png";
import PinIcon from "../icons/pin.png";
import { Link } from "react-router-dom";

function Eventos({ eventos }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [mostrar, setMostrar] = useState(true);
  const [mostrarEvento, setMostrarEvento] = useState(false);
  const [eventoMostrar, setEventoMostrar] = useState({});
  const [participantes, setParticipantes] = useState({});
  const [categorias, setCategorias] = useState([]);
  const [ubicacionFilter, setUbicacionFilter] = useState("");
  const [fechaFilter, setFechaFilter] = useState("");
  const [fechaFilterOption, setFechaFilterOption] = useState("");
  const [showFilters, setShowFilters] = useState(false); // Estado para mostrar/ocultar los filtros en dispositivos móviles
  const host = useContext(HostContext);

  const [selectedCategory, setSelectedCategory] = useState("");

  const isMobile = window.innerWidth <= 768; // Define el ancho máximo para considerar como dispositivo móvil

  // Función para mostrar/ocultar los filtros en dispositivos móviles
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleClick = (evento) => {
    setMostrarEvento(true);
    setEventoMostrar(evento);
  };

  const handleClick2 = () => {
    setMostrarEvento(false);
  };

  const cargarParticipantes = (idEvento) => {
    let link = host + "/getById/";
    link += idEvento;
    axios
      .get(link)
      .then((result) => {
        const participantesEvento = result.data;
        setParticipantes((prevParticipantes) => ({
          ...prevParticipantes,
          [idEvento]: participantesEvento,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cargarCategorias = () => {
    axios
      .get(host + "/Categorias")
      .then((result) => {
        const cat = result.data;
        setCategorias(cat);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    cargarCategorias();
    eventos.forEach((evento) => {
      cargarParticipantes(evento.Id);
    });
  }, [eventos]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(busqueda)
    if (busqueda != null) {
      setMostrar(false);
    }
    if (busqueda === "") {
      setMostrar(true);
    }
  };

  const filteredEventos = eventos.filter((evento) => {
    const nombreMatches = evento.Nombre.toLowerCase().includes(searchTerm.toLowerCase());
    const ubicacionMatches = evento.Direccion.toLowerCase().includes(ubicacionFilter.toLowerCase());
    const fechaEvento = new Date(evento.Fecha);

    if (fechaFilterOption === "") {
      return nombreMatches && ubicacionMatches;
    } else if (fechaFilterOption === "Hoy") {
      const hoy = new Date();
      return nombreMatches && ubicacionMatches && fechaEvento.toDateString() === hoy.toDateString();
    } else if (fechaFilterOption === "EsteMes") {
      const hoy = new Date();
      return (
        nombreMatches &&
        ubicacionMatches &&
        fechaEvento.getMonth() === hoy.getMonth() &&
        fechaEvento.getFullYear() === hoy.getFullYear()
      );
    } else if (fechaFilterOption === "Otro") {
      return (
        nombreMatches &&
        ubicacionMatches &&
        format(fechaEvento, "yyyy'-'MM'-'dd") === fechaFilter
      );
    }
    return false;
  });

  return (
    <div className="">
      {isMobile ? (
        // Si es un dispositivo móvil, mostrar solo la búsqueda por nombre y el icono de más
        <div className="flex space-x-2 mx-2">
        <form onSubmit={handleSearch}>
          <div className="flex mt-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <option value="">Categorias</option>
              <option value="Shopping">Shopping</option>
              <option value="Images">Images</option>
              <option value="News">News</option>
              <option value="Finance">Finance</option>
            </select>
            <div class="relative w-full">
              <input
                type="search"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Search..."
              />
              <button
                type="submit"
                className="absolute top-0 right-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
          </div>
        </form>
          
            <button onClick={toggleFilters} className="rounded bg-gray-800 text-white w-24 border border-pink-600 mt-3">
              Filtros
            </button>
            
          </div>
        
      ) : (
        // Si no es un dispositivo móvil o si se muestran los filtros, mostrar los filtros adicionales
        <div className="flex space-x-2">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Buscar eventos por nombre"
            className="flex-grow mt-2 h-10"
          />
          <select
            value={ubicacionFilter}
            onChange={(e) => setUbicacionFilter(e.target.value)}
            className="flex-grow mt-2 h-10"
          >
            <option value="">Filtrar por ubicación</option>
            <option value="guardia vieja">Guardia Vieja</option>
            <option value="bosques de palermo">Bosques de Palermo</option>
            <option value="indonesia">Indonesia</option>
          </select>
          <div className="flex-grow mt-2 h-10">
            <select
              value={fechaFilterOption}
              onChange={(e) => setFechaFilterOption(e.target.value)}
            >
              <option value="">Filtrar Por Fecha</option>
              <option value="Hoy">Hoy</option>
              <option value="EsteMes">Este mes</option>
              <option value="Otro">Otro</option>
            </select>
            {fechaFilterOption === "Otro" && (
              <input
                type="date"
                value={fechaFilter}
                onChange={(e) => setFechaFilter(e.target.value)}
                placeholder="Fecha específica"
                className=" h-10"
              />
            )}
          </div>
        </div>
      )}

      {showFilters && isMobile && (
        // Mostrar los filtros adicionales solo en dispositivos móviles cuando se hace clic en el icono de más
        <div className="fixed inset-0 flex items-center justify-center z-50">
        
        <div className="bg-black shadow-md rounded-lg p-4 max-w-md w-64">
          <h2 className="text-2xl font-bold text-white">Filtros</h2>
          <div className="mt-4">
            <select
              value={ubicacionFilter}
              onChange={(e) => setUbicacionFilter(e.target.value)}
              className="w-full h-10 border border-black rounded-md px-2 py-1"
            >
              <option value="">Filtrar por ubicación</option>
              <option value="guardia vieja">Guardia Vieja</option>
              <option value="bosques de palermo">Bosques de Palermo</option>
              <option value="indonesia">Indonesia</option>
            </select>
          </div>
          <div className="mt-4">
            <select
              value={fechaFilterOption}
              onChange={(e) => setFechaFilterOption(e.target.value)}
              className="w-full h-10 border border-black rounded-md px-2 py-1"
            >
              <option value="">Filtrar Por Fecha</option>
              <option value="Hoy">Hoy</option>
              <option value="EsteMes">Este mes</option>
              <option value="Otro">Otro</option>
            </select>
            {fechaFilterOption === "Otro" && (
              <input
                type="date"
                value={fechaFilter}
                onChange={(e) => setFechaFilter(e.target.value)}
                placeholder="Fecha específica"
                className="w-full h-10 border border-black rounded-md mt-2 px-2 py-1"
              />
            )}
          </div>
          <div className="mt-4 flex justify-end">
            <button
              onClick={toggleFilters} // Cerrar el modal al hacer clic en este botón
              className="bg-rose-500 text-white px-4 py-2 rounded-md"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
      )}
   

      {!mostrarEvento && (
        <div className="text-sm mx-2">
          <div className="card-container overflow-y-auto ">
          {categorias.map((categoria) => (
            <div key={categoria.IdCategoria} className="">
              {mostrar && ( <h1 className="text-white mb-2 text-l font-bold">{categoria.NombreCategoria}</h1> )}

                <div className="flex overflow-x-auto" style={{gap: "10px"}}>
                  
                  {filteredEventos
                    .filter((eventop) => eventop.idCategoria === categoria.IdCategoria)
                    .map((eventop) => {
                      let privacidad = "";
                      let direccion = "";

                      if (eventop.Publico === false) {
                        privacidad = "Solo Invitación";
                        direccion = "Privada";
                      } else {
                        if (eventop.Precio != null) {
                          privacidad = eventop.Precio + "$";
                          direccion = eventop.Direccion;
                        } else {
                          privacidad = "Gratis";
                          direccion = eventop.Direccion;
                        }
                      }

                      return (
                       
                        <div
                          key={eventop.Id}
                          className="card  mb-4 w-auto   bg-white text-black "
                          onClick={() => handleClick(eventop)}
                        >
                           <Link
                        key={eventop.Id}
                        to={`VerEvento/${eventop.Id}`}
                        className="cursor-pointer"
                      >
                          <div className="">
                            <figure>
                              <img
                                src={eventop.ImagenEvento}
                                alt="..."
                                className="h-20 w-full"
                              />
                            </figure>
                            <div className="card-text  px-2 m-2 font-semibold ">
                              <h4 className="font-black mb-1 overflow-hidden">{eventop.Nombre}</h4>

                              <p className="card-text card-text-line flex items-center ">
                                <img
                                  src={CalendarioIcon}
                                  className="h-3 w-3 mr-1"
                                />
                                {format(new Date(eventop.Fecha), "dd'/'MM'/'yyyy")}
                              </p>

                              <p className="card-text card-text-line flex items-center">
                                <img
                                  src={EntradaIcon}
                                  className="h-3 w-3 mr-1 "
                                />
                                {privacidad}
                              </p>
                              <p className="card-text card-text-line flex items-center">
                                <img src={PinIcon} className="h-3 w-3 mr-1" />
                                {direccion}
                              </p>
                            </div>
                          </div>
                          </Link>
                        </div>
                     
                      );
                      
                    })}
                    </div>
              </div>
            
          ))}
        </div>
        </div>
      )}
</div>
    
  );
}



export default Eventos;

