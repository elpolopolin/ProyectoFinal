import React, { useContext, useState, useEffect } from "react";
import { HostContext } from "../App";
import { format } from "date-fns";
import MostrarEvento from "./MostrarEvento";
import axios from "axios";
import CalendarioIcon from "../icons/Calendario.png";
import EntradaIcon from "../icons/Entrada.png";
import PinIcon from "../icons/pin.png";
import { Link, BrowserRouter, Routes, Route, useParams } from "react-router-dom";

function Eventos({ eventos }) {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [mostrar, setMostrar] = useState(true);
  const [mostrarEvento, setMostrarEvento] = useState(false);
  const [eventoMostrar, setEventoMostrar] = useState({});
  const [participantes, setParticipantes] = useState({});
  const [categorias, setCategorias] = useState([]);

  const host = useContext(HostContext); //en ort poner localhost o la ip de la pc

  
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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value != null){
      setMostrar(false)
    }
    if (event.target.value == ""){
      setMostrar(true)
    }
  
  };

  const filteredEventos = eventos.filter((evento) => {
    return evento.Nombre.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      {!mostrarEvento && (
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Buscar eventos por nombre"
        />
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