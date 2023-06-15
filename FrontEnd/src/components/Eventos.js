import React, { useState, useEffect } from "react";
import { format } from 'date-fns';
import MostrarEvento from "./MostrarEvento";

function Eventos({ eventos }) {
  let numColumns = 3; // Número de columnas predeterminado
  if (eventos.length <= 2) {
    numColumns = eventos.length; // Mostrar 2 eventos en una fila
  }
  const [mostrarEvento, setMostrarEvento] = useState(false);
  const [eventoMostrar, setEventoMostrar] = useState({});

  const handleClick = (evento) => {
    setMostrarEvento(true);
    setEventoMostrar(evento);
  };

  return (
    <div>
      {!mostrarEvento && (
        <div
          id="eventos"
          className="row container"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
            gap: "1rem",
            height: '680px',
            overflowY: "scroll",
          }}
        >
          {eventos.map((evento) => {
            let privacidad = "";
            let direccion = "";

            if (evento.Publico === false) {
              privacidad = 'Solo Invitación';
              direccion = "Privada";
            } else {
              if (evento.Precio != null) {
                privacidad = evento.Precio + "$";
                direccion = evento.Direccion;
              } else {
                privacidad = "Gratis";
                direccion = evento.Direccion;
              }
            }

            return (
              <div key={evento.Id} className="" onClick={() => handleClick(evento)}>
                <div className="card mb-4">
                  <img
                    src={evento.ImagenEvento}
                    className="card-img-top ink"
                    alt="..."
                  />
                  <div className="card-body">
                    <h4 className="card-title">{evento.Nombre}</h4>
                    <p className="card-text card-text-line">
                      {format(
                        new Date(evento.Fecha),
                        "dd 'de' MMMM 'de' yyyy ' ' HH'hs'"
                      )}
                    </p>
                    <p className="card-text card-text-line">{privacidad}</p>
                    <p className="card-text">{direccion}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {mostrarEvento && (
        <div className="container">
        <MostrarEvento evento={eventoMostrar} />
        </div>
      )}
    </div>
  );
}

export default Eventos;