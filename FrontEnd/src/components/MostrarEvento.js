import React, { useState, useEffect } from "react";
import { format } from 'date-fns';
import Calendario2 from '../icons/Calendario2.png'
import "../App.css";

function MostrarEvento({ evento, participantesEvento }) {

  const [MostrarParticipantes, setMostrarParticipantes] = useState(false);

  return (
    <div>
      {!MostrarParticipantes &&
        <div key={evento.Id}>
          <center>
            <h1 className="title">{evento.Nombre}</h1>

            <div class="carousel w-full">
              <div id="slide1" class="carousel-item relative w-full">
                <img src={evento.ImagenEvento} class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" class="btn btn-circle">❮</a>
                  <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
              </div>
              <div id="slide2" class="carousel-item relative w-full">
                <img src={evento.Imagen2Evento} class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" class="btn btn-circle">❮</a>
                  <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
              </div>
              <div id="slide3" class="carousel-item relative w-full">
                <img src={evento.Imagen3Evento} class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" class="btn btn-circle">❮</a>
                  <a href="#slide4" class="btn btn-circle">❯</a>
                </div>
              </div>
              <div id="slide4" class="carousel-item relative w-full">
                <img src={evento.Imagen4Evento} class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" class="btn btn-circle">❮</a>
                  <a href="#slide1" class="btn btn-circle">❯</a>
                </div>
              </div>
            </div>

            <p className="text-white">{evento.Descripcion}</p>
            <hr className="hr1"></hr>
          </center>

          <div class="flex w-full">
            <div class="grid h-80 flex-grow card bg-base-300 rounded-box place-items-left">

              <div className="Dat-izq">
                <p className="Datos">Organizador: {evento.organizador}</p>
                <p className="Datos"><a className="link" onClick={() => setMostrarParticipantes(true)}>Personas que asisten </a></p>
                <p className="Datos">Destacados:</p>
                {/* fotos de destacados */}
                <p className="Datos">Amigos:</p>
                {/* fotos de destacados */}
              </div>
              
            </div>

            <div class="divider divider-horizontal"></div>

            <div class="grid h-80 flex-grow card bg-base-300 rounded-box place-items-right">
              <p className="Datos">Precio: ${evento.Precio}</p>
              <p className="Datos">Categoria: {evento.idcategoria}</p>
              <p className="Datos">Locacion: {evento.Direccion}</p>
              <p className="Datos">Rangos de edad: {evento.EdadMinima} - {evento.EdadMaxima}</p></div>
          </div>

          <div className="div-center2">




            <div className="Dat-der">

              <div className="Logo-Fecha">
                <img className="img-Calendario2" src={Calendario2}></img>
                <p className="Fecha-Evento">
                  {format(
                    new Date(evento.Fecha),
                    "dd 'of' MMMM  yyyy ' ' HH'hs'"
                  )}
                </p>
              </div>
            </div>
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
                  <div class="alert alert-info">
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