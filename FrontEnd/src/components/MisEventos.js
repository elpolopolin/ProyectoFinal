import React, { useState, useEffect } from "react";
import axios from "axios";

function MisEventos({ usuario }) {
  const [eventosIds, setEventosIds] = useState([]);
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    cargarEventosIds();
  }, []);

  const cargarEventosIds = () => {
    const link = "http://localhost:3000/usuarios/EventosXUser/" + usuario.Id;
    axios
      .get(link)
      .then((result) => {
        const idEventos = result.data;
        setEventosIds(idEventos);
        cargarEventos(idEventos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cargarEventos = (eventosIds) => {
    if (eventosIds.length === 0) {
      console.log("No hay eventos para cargar.");
      return;
    }

    const linkBase = "http://localhost:3000/getbyidEvento/";

    const obtenerDatosEventos = async () => {
      const eventosPromises = eventosIds.map(async (eventoId) => {
        const response = await axios.get(linkBase + eventoId.IdEvento);
        return response.data;
       
      });
     
      const datosEventos = await Promise.all(eventosPromises);
       //console.log(datosEventos)
      setEventos(datosEventos);
    };

    obtenerDatosEventos().catch((error) => {
      console.log(error);
    });
  };

  if (eventos.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="text-white font-bold text-center">Loading...</div>
    </div>
    );
  }

  return (
    <div className=" p-10">
      <h1 className="text-white text-4xl font-bold text-center mb-8">
        Mis Eventos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {eventos.map((evento) => (
          <div
            key={evento.Id}
            className="rounded-lg shadow-md bg-white text-black cursor-pointer hover:shadow-lg"
          >
            {evento.ImagenEvento && (
              <figure className="h-40">
                <img
                  src={evento.ImagenEvento}
                  alt="..."
                  className="h-full w-full object-cover"
                />
              </figure>
            )}
            <div className="p-4">
              <h4 className="font-semibold text-lg mb-2">{evento.Nombre}</h4>
              <div className="flex justify-between">
                <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg">
                  Código QR
                </button>
                <button className="bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-lg">
                  Ver Más
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MisEventos;