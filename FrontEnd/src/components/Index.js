import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Importa Link para crear enlaces internos
import { HostContext } from "../App";
import axios from "axios";
import CalendarioIcon from "../icons/Calendario.png";
import EntradaIcon from "../icons/Entrada.png";
import PinIcon from "../icons/pin.png";
import { format } from "date-fns";
import './styles/home.css';
import Section1pc from "./section1pc";
import { UsuarioContext } from "../App";  

function Index() {
  const fechaActual = new Date().toLocaleDateString(); // Obtiene la fecha actual en formato de cadena
  const host = useContext(HostContext);
  const imagen = host + "/imagenesEventop/homefoto.png"
  const PinIcon = host + "/imagenesEventop/users.png"
  const [Eventos, setEventos] = useState([]);
  const usuario = useContext(UsuarioContext);
  const isMobile = window.innerWidth <= 768; // Define el ancho máximo para considerar como dispositivo móvil
  const [Categorias, setCategorias] = useState([]); // Definición de Categorias
  const [Recomendados, setRecomendados] = useState([]); // Definición de Categorias

  const [categoriaUser, setCategoriaUser] = useState([]);
  

  useEffect(() => {
    cargarEventos();
    cargarCategorias(); // Agrega la función para cargar categorías
    cargarRecomendados();
  }, []);

  const cargarEventos = () => {
    axios
      .get(host + "/getAll")
      .then((result) => {
        const events = result.data;
        setEventos(events);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const handleVerEventos = () => {

  }

  const cargarRecomendados = () => {
    axios
      .get(host + "/Recomendados")
      .then((result) => {
        const events = result.data;
        setRecomendados(events);
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

  return (
    <div>
      {!isMobile && (
           <div className="">
           <div className="nana-container overflow-y-scroll text-white">
             <h2 className="font-bold text-2xl text-center py-6"></h2>
             <div className="">
               <div
                 className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8 "
                 style={{ marginTop: "-30px" }}
               >
   
   
   
   
   <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 xsm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
     {Categorias.map((categoria) => (
       <div
         key={categoria.IdCategoria}
         className="group relative overflow-hidden rounded-lg bg-gray-200"
         style={{ aspectRatio: "1 / 1" }}
       >
         <img
           src={categoria.Imagen}
           className="h-full w-full object-cover object-center group-hover:opacity-75 transition duration-300"
           alt={categoria.NombreCategoria}
         />
         <div className="categoria-overlay flex items-center justify-center absolute inset-0 bg-black bg-opacity-50 opacity-0 transition duration-300">
           <Link key={categoria.IdCategoria}  to={`categoria/${categoria.IdCategoria}`}className="cursor-pointer" > <button className="text-white text-center opacity-0 group-hover:opacity-100 transition duration-300 bg-pink-500 hover:bg-pink-600 py-2 px-3 rounded" onClick={() => handleVerEventos(categoria.IdCategoria)}> 
             Ver Eventos
           </button> </Link>
         </div>
         <h3 className="mt-2 text-sm font-bold text-center absolute bottom-0 w-full bg-black bg-opacity-50 text-white py-2">
           {categoria.NombreCategoria}
         </h3>
       </div>
     ))}
   </div>
   
               </div>
             </div>
           </div>
         </div>
         )
      }
        {isMobile && ( 
          <div>
            <div className="h-20 bg-[#252525] flex items-center justify-center "> <h2 className="text-center text-white text-3xl font-bold">EVENTOP</h2>  </div>
                <div className="indones-container overflow-y-auto"> 
                <div className=""> <img className="" src={imagen} /></div>

                    
                    <h1 className="  m-2 text-white mb-2 text-l font-bold mt-2">Categorias</h1>
                    <div className=" m-2 flex overflow-x-scroll gap-2 mb-10" >
                    {Categorias.map((categoria) => (
                             <div
                             key={categoria.IdCategoria}
                             className="group  relative rounded-lg bg-gray-200 h-40"
                             style={{ aspectRatio: "1 / 1" }}
                           >
                             <img
                               src={categoria.Imagen}
                               className="h-full w-full object-cover object-center group-hover:opacity-75 transition duration-300"
                               alt={categoria.NombreCategoria}
                             />
                             <div className="categoria-overlay flex items-center justify-center absolute inset-0 bg-black bg-opacity-50 opacity-0 transition duration-300">
                             <Link key={categoria.IdCategoria}  to={`categoria/${categoria.IdCategoria}`}className="cursor-pointer" > <button className="text-white text-center opacity-0 group-hover:opacity-100 transition duration-300 bg-pink-500 hover:bg-pink-600 py-2 px-3 rounded" onClick={() => handleVerEventos(categoria.IdCategoria)}> 
                              Ver Mas
                            </button> </Link>
                             </div>
                             <h3 className="mt-2 text-sm font-bold text-center absolute bottom-0 w-full bg-black bg-opacity-50 text-white py-2">
                               {categoria.NombreCategoria}
                             </h3>
                           </div>
                     ))}
                      </div>

                      <h1 className="  m-2 text-white mb-2 text-l font-bold mt-2">Recomendados</h1>
                    <div className=" m-2 flex overflow-x-scroll gap-2" >
                    {Recomendados.map((eventop) => {
                      let privacidad = "";
                      let direccion = "";

                      if (eventop.Publico === false) {
                        privacidad = "?";
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
                          className="card bg-slate-700 h-48 text-white  relative transition-transform transform hover:-translate-y-1 hover:shadow-pink-500/50 shadow-lg  "
                         
                          style={{width: "33%"}}
                        >
                           <Link
                        key={eventop.Id}
                        to={`Eventos/VerEvento/${eventop.Id}`}
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
                            <div className="card-text   px-2 m-2 font-semibold ">
                            <h4 className="font-black mb-1 overflow-hidden" style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>
                        {eventop.Nombre}
                        </h4>

                              <p className="card-text card-text-line flex items-center " style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>
                                <img
                                  src={CalendarioIcon}
                                  className="h-3 w-3 mr-1 "
                                />
                                {format(new Date(eventop.Fecha), "dd'/'MM'/'yyyy")}
                              </p>

                              <p className="card-text card-text-line flex items-center " style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>
                                <img
                                  src={EntradaIcon}
                                  className="h-3 w-3 mr-1 "
                                />
                                {privacidad}
                              </p>
                              <p className="card-text card-text-line flex items-center" style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>
                                <img src={PinIcon} className="h-3 w-3 mr-1 " />
                                {eventop.Participando} / {eventop.Participantes}
                              </p>
                            </div>
                          </div>
                          </Link>
                        </div>
                      )
                    })}
                      </div>
                      
                </div>
                
          </div>
        )}
     
    </div>
  );
}

export default Index;