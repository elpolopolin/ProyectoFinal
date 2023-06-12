import React from "react";
import { format } from 'date-fns';

function Eventos({ eventos }) {
   
    return (
        <div id="eventos" className="row" style={{objectPosition: 'center',  height: '600px', overflowY: 'scroll'}}>
      {eventos.map((evento) => {
          let privacidad = "";
         let direccion = "";
    
          if (evento.Publico === false) {
           privacidad = "Solo Invitación";
          direccion = "Privada";
            }
         else {
            if (evento.Precio != null)
            {
                privacidad = evento.Precio;
                direccion = evento.Direccion;
            }
            else {
                privacidad = "Gratis";
                direccion = evento.Direccion;
            }
         
         }

          return (
            <div key={evento.Id} className="col-4 mb-4">
            <div className="card mb-4 h-100">
                <img
                 src={evento.ImagenEvento}
                className="card-img-top  ink"
                alt="..."
              />
              <div className="card-body">
                <h4 className="card-title">{evento.Nombre}</h4>
                   <p className="card-text">
                    {format(
                      new Date(evento.Fecha),
                     "dd 'de' MMMM 'de' yyyy 'a las' HH'hs'"
                   )}
                </p>
                <p className="card-text">{privacidad}</p>
                <p className="card-text">{direccion}</p>
                <button /*onClick={() => MasInfo(evento.Id)}*/>Info</button>
                </div>
               </div>
            </div>
           );
         })}
        </div>
      );
    }
    
    

export default Eventos;