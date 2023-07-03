import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../App";
import { format } from "date-fns";
import MostrarEvento from "./MostrarEvento";
import axios from "axios";
import CalendarioIcon from "../icons/Calendario.png";
import EntradaIcon from "../icons/Entrada.png";
import PinIcon from "../icons/pin.png";


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
        <div className="text-sm">
          <div className="card-container overflow-y-auto"> 
            <div className="">
              {filteredEventos.slice(0, Math.ceil(filteredEventos.length / 2)).map((evento) => {
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
                  <div
                    key={evento.Id}
                    className="card mb-4 bg-white text-black"
                    onClick={() => handleClick(evento)}
                  >
                  <div className="">
                    <figure>
                      <img
                        src={evento.ImagenEvento}
                        alt="..."
                        className="h-20 w-full  "
                      />
                    </figure>
                    <div className="card-text px-2 m-2 font-semibold ">
                      <h4 className="  font-black mb-1">{evento.Nombre}</h4>

                      <p className="card-text card-text-line flex items-center overflow-hidden">
                        <img src={CalendarioIcon} className="h-3 w-3 mr-1" />
                        {format(new Date(evento.Fecha), "dd'/'MM'/'yyyy")}
                      </p>

                      <p className="card-text card-text-line flex items-center">
                      <img src={EntradaIcon} className="h-3 w-3 mr-1" />
                        {privacidad}
                        </p>
                      <p className="card-text card-text-line flex items-center"> 
                      <img src={PinIcon} className="h-3 w-3 mr-1" />
                      {direccion}
                      </p>
                    </div>
                  </div>
                </div>
                );
              })}
            </div>
            <div className="column">
            {filteredEventos.slice(Math.ceil(filteredEventos.length / 2)).map((evento) => {
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
                  <div
                    key={evento.Id}
                    className="card mb-4 bg-white text-black"
                    onClick={() => handleClick(evento)}
                  >
                  <div className="">
                    <figure>
                      <img
                        src={evento.ImagenEvento}
                        alt="..."
                        className="h-20 w-full  "
                      />
                    </figure>
                    <div className="card-text px-2 m-2 font-semibold ">
                      <h4 className="  font-black mb-1">{evento.Nombre}</h4>

                      <p className="card-text card-text-line flex items-center overflow-hidden">
                        <img src={CalendarioIcon} className="h-3 w-3 mr-1" />
                        {format(new Date(evento.Fecha), "dd'/'MM'/'yyyy")}
                      </p>

                      <p className="card-text card-text-line flex items-center">
                      <img src={EntradaIcon} className="h-3 w-3 mr-1" />
                        {privacidad}
                        </p>
                      <p className="card-text card-text-line flex items-center"> 
                      <img src={PinIcon} className="h-3 w-3 mr-1" />
                      {direccion}
                      </p>
                    </div>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {mostrarEvento && (
        <div className="container">
          <button onClick={handleClick2} className="btn-transparent">
            &lt;
          </button>
          <MostrarEvento
            evento={eventoMostrar}
            participantesEvento={participantes[eventoMostrar.Id]}
          />
        </div>
      )}
    </div>
  );
}

export default Eventos;