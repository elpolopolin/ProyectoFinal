import React, { useContext ,useState, useEffect } from "react";
import { AuthContext } from '../App';
import { format } from "date-fns";
import MostrarEvento from "./MostrarEvento";
import axios from "axios";     

function Eventos({ eventos }) {
      let numColumns = 2; // Número de columnas predeterminado
      const [searchTerm, setSearchTerm] = useState("");
      if (eventos.length <= 2) {
        numColumns = eventos.length; // Mostrar 2 eventos en una fila
      }
      const [mostrarEvento, setMostrarEvento] = useState(false);
      const [eventoMostrar, setEventoMostrar] = useState({});
      const [participantes, setParticipantes] = useState({});
      
      const { isLoggedIn, userLogged } = useContext(AuthContext); //usuarioLoggeado y si esta loggeado true sino hay user logged false

      const handleClick = (evento) => {
        setMostrarEvento(true);
        setEventoMostrar(evento);
      };

      const handleClick2 = () => {
        setMostrarEvento(false);
      };


      const cargarParticipantes = (idEvento) => {
        let link = "http://localhost:3000/getById/";
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

      useEffect(() => {
        eventos.forEach((evento) => {
          cargarParticipantes(evento.Id);
         
        });
      }, [eventos]);

      const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        
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
            <div className="eventos-container">
              <div
                id="eventos"
                className="row container"
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${numColumns}, 0.5fr)`,
                  gap: "1rem",
                  height: "680px",
               
                  overflowY: "scroll",
                }}
              >
                {filteredEventos.map((evento) => {
                  let privacidad = "";
                  let direccion = "";

                  if (evento.Publico === false) {
                    privacidad = "Solo Invitación";
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
                    <div>
                      <div 
                        key={evento.Id}
                        className="card mb-4"
                        onClick={() => handleClick(evento)}
                        
                      >
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
            </div>
          )}
          {mostrarEvento && (
            <div className="container">
            
              <button onClick={handleClick2} className="btn-transparent">
                &lt;
              </button>
            
              <MostrarEvento evento={eventoMostrar} participantesEvento ={participantes[eventoMostrar.Id]} />
            
          </div>
          )}
        </div>
      );
    }

export default Eventos;