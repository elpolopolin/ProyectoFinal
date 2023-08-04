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
        cargarDetallesEventos(idEventos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cargarDetallesEventos = async (ids) => {
    const eventosData = await Promise.all(
      ids.map(async (eventoIdObj) => {
        const eventoId = eventoIdObj.IdEvento;
        const link = "http://localhost:3000/getbyidEvento/" + eventoId;
        try {
          const response = await axios.get(link);
          return response.data;
        } catch (error) {
          console.log(error);
          return null;
        }
      })
    );

    setEventos(eventosData.filter((evento) => evento !== null));
  };

  return (
    <>
      <h1 className="text-white">Mis Eventos</h1>
      {eventos.map((evento) => (
        <div key={evento.Id} className="card">
          {evento.ImagenEvento && (
            <img src={evento.ImagenEvento} alt={evento.Nombre} />
          )}
          <h2>{evento.Nombre}</h2>
          <button>VER MÁS</button>
        </div>
      ))}
    </>
  );
}

export default MisEventos;