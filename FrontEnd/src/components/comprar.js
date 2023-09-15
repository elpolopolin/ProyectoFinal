import React, { useContext, useState, useEffect } from "react";
import { HostContext } from "../App";
import { useParams } from 'react-router-dom';
import axios from "axios";
import 'font-awesome/css/font-awesome.min.css';

function Comprar() {
  const [evento, setEvento] = useState({});
  const { id } = useParams();
  const host = useContext(HostContext);

  useEffect(() => {
    if (id != null) {
      let link = host + "/getbyidEvento/";
      link += id;
      axios
        .get(link)
        .then((result) => {
          const event = result.data;
          setEvento(event);
        });
    } else {
      console.log("no hay evento");
    }
  }, []);

  const formatDateDDMMYY = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Función para obtener solo la hora de la fecha
  const formatTime = (dateString) => {
    const options = { hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleTimeString([], options);
  };


  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-pink-500">
      <div className=" w-full lg:w-3/4 md:w-1/2">
        <div className="bg-fuchsia-700 p-6 rounded-lg shadow-lg text-white mb-4 mx-6 text-center">
          <h2 className="text-2xl font-bold mb-4 text-center">{evento.Nombre}</h2>

          <div className="flex flex-wrap">
            <div className="flex items-center w-full md:w-1/3 mb-2">
              <p className="flex-grow">  <i className="fa fa-map-marker mr-2"></i>{evento.Direccion}</p>
            </div>
            <div className="flex items-center w-full md:w-1/3 mb-2">
              <p className="flex-grow"><i className="fa fa-calendar mr-2"></i>{formatDateDDMMYY(evento.Fecha)}</p>
            </div>
            <div className="flex items-center w-full md:w-1/3 mb-2">
              <p className="flex-grow"> <i className="fa fa-globe mr-2"></i>www.eventop.com</p>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="flex items-center w-full md:w-1/3 mb-2">
              <p className="flex-grow"><i className="fa fa-ticket mr-2"></i>{evento.Precio}$</p>
            </div>
            <div className="flex items-center w-full md:w-1/3 mb-2">
              <p className="flex-grow"> <i className="fa fa-clock-o mr-2"></i>{formatTime(evento.Fecha)}</p> 
            </div>
            <div className="flex items-center w-full md:w-1/3 mb-2">  
              <p className="flex-grow"><i className="fa fa-user-circle mr-2"></i>0/{evento.Participantes}</p>
            </div>

          </div>

         
        </div>

        
      </div>
    </div>
  </>
  );
}

export default Comprar;



