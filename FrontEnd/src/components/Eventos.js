import React from "react";
import { format } from 'date-fns';

function Eventos({ eventos }) {
  let numColumns = 3; // Número de columnas predeterminado
  if (eventos.length <= 2) {
    numColumns = eventos.length; // Mostrar 2 eventos en una fila
  }

  return (
    <div
      id="eventos"
      className="row container"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
       gap: "1rem",
        height: "660px",
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
            privacidad = evento.Precio;
            privacidad += "$";
            direccion = evento.Direccion;
          } else {
            privacidad = "Gratis";
            direccion = evento.Direccion;
          }
        }

        return (
          <div key={evento.Id} className="">
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
                    "dd 'de' MMMM 'de' yyyy 'a las' HH'hs'"
                  )}
                </p>
                <p className="card-text card-text-line">{privacidad}</p>
                <p className="card-text card-text-line">{direccion}</p>
                    
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Eventos;