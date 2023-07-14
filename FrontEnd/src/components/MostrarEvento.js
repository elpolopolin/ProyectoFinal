import React, { useState, useEffect } from "react";
import { format } from 'date-fns';
import Calendario2 from '../icons/Calendario2.png'
import "../App.css";

function MostrarEvento({ evento, participantesEvento }) {

  const [MostrarParticipantes, setMostrarParticipantes] = useState(false);

  return (
    <div>
      {!MostrarParticipantes &&
        <div key={evento.Id} className="card-container overflow-y-auto ">
          <center>
            <p className="titulo-evento">{evento.Nombre}</p>
              <div className="mb-5" >
                <div className="carousel w-full">
                  <div id="slide1" class="carousel-item relative w-full">
                    <img src={evento.ImagenEvento} class="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide4" class="btn btn-circle">❮</a>
                      <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                  </div>
                  <div id="slide2" class="carousel-item relative w-full">
                    <img src={evento.Imagen2Evento} class="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide1" class="btn btn-circle">❮</a>
                      <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                  </div>
                  <div id="slide3" class="carousel-item relative w-full">
                    <img src={evento.Imagen3Evento} class="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide2" class="btn btn-circle">❮</a>
                      <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                  </div>
                  <div id="slide4" class="carousel-item relative w-full">
                    <img src={evento.Imagen4Evento} class="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide3" class="btn btn-circle">❮</a>
                      <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                  </div>
                </div>
              </div>
            <div className="mb-5" >
            <p className="text-white">{evento.Descripcion}</p>
            </div>
            

            <div className="mb-5">
            <hr className="hr1"></hr>
            </div>
            
          </center>



          <div className="flex w-full">
            <div className="grid h-50 flex-grow card text-white place-items-left">
             
              <div className="Dat-izq">
                <p className="Datos">Organizador: Charly Garcia{evento.organizador}</p>
                <p className="Datos"><a className="link" onClick={() => setMostrarParticipantes(true)}>Personas que asisten </a></p>
                <p className="Datos">Amigos: </p>
                {/* fotos de destacados */}
              </div>
            </div>

            <div className="divider divider-horizontal"></div>

            <div className="grid h-50 flex-grow  text-white  place-items-right">
              <p className="Datos">Precio: ${evento.Precio}</p>
              <p className="Datos">Categoria: {evento.idCategoria}</p>
              <p className="Datos">Locacion: {evento.Direccion}</p>
              <p className="Datos">Rangos de edad: {evento.EdadMinima} - {evento.EdadMaxima}</p>
              <p className="Fecha-Evento w-40 justify-end">
                  {format(
                    new Date(evento.Fecha),
                    "MMMM dd  yyyy ' ' HH'hs'"
                  )}
                </p>
              </div>
          </div>

              <div className="Logo-Fecha text-white">
                
          </div>
          <center>
            <hr className="hr2"></hr>
          </center>

        </div>
        
      }

      {MostrarParticipantes &&
        <div>
          <center>
            <h1 className="title-participantes-evento">Participantes del evento</h1>
          </center>
          {
            participantesEvento.map((participante) => {
              return (

                <div key={participante.IdUsuario}>
                  <center>
                  </center>
                  <div className="alert alert-info">
                    <img src={participante.FotoPerfil} fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"></img>
                    <span>{participante.Descripcion[1]}</span>
                  </div>


                </div>
              );
            })}
          <button
            onClick={() => setMostrarParticipantes(false)}
            className="btn btn-primary "
          >
            Salir
          </button>
          
        </div>
      }

    </div>
  );
}

export default MostrarEvento;