import React, { useState, useEffect } from "react";
import { format } from 'date-fns';
import Calendario2 from '../icons/Calendario2.png'
import "../App.css";
import './styles/MostrarEvento.css';

function MostrarEvento({ evento, participantesEvento }) {

  const [MostrarParticipantes, setMostrarParticipantes] = useState(false);

  const comprarButton = (
    <div className="flex justify-center mt-5 ">
      {evento.Precio > 0 ? (
        <div>
        <button  className="bg-pink-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"> Comprar </button>
        </div>
      ) : (
        <div>
          <button  className="bg-pink-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"> Entrar </button>
        </div>
      )}
    </div>
  );


  return (
    <div>
      {!MostrarParticipantes &&
        <div key={evento.Id} className="mx-2 overflow-y-auto ">
          
          <div className="flex justify-center mt-5">
            <p className="titulo-evento">{evento.Nombre}</p>
            </div>
              <div className="mb-5" >
                <div className="carousel w-full">
                  <div id="slide1" class="carousel-item relative w-full">
                    <img src={evento.ImagenEvento} class="w-full " />
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
            <p className="text-white flex justify-center">{evento.Descripcion}</p>
            </div>
          

            <div className="mb-5">
            <hr className="hr1"></hr>
            </div>
            
          


          
          <div className="flex w-full">
          <div className="grid h-50 flex-grow card text-white place-items-left">
            <div className="Dat-izq">
            <div className="overflox-x-auto">
            <table className="table-auto">
            <tbody>
              <tr>
                <td>
                  <div className="Datos">Organizador</div>
                  <div className="Datos"> {evento.IdOrganizador}</div>
                </td>
                <td>
                  <div className="Datos">Conocidos</div>
                  <div className="Datos">
                    <a className="link" onClick={() => setMostrarParticipantes(true)}>Asistentes</a>
                  </div>
                </td>
                <td>
                  <div className="Datos">Precio</div>
                  <div className="Datos">${evento.Precio}</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="Datos">Locación:</div>
                  <div className="Datos">San Isidro {evento.Locacion}</div>
                </td>
                <td>
                  <div className="Datos">Rango de edad:</div>
                  <div className="Datos">{evento.EdadMinima} - {evento.EdadMaxima}</div>
                </td>
                <td>
                  <div className="Datos">Amigos</div>
                  <div className="Datos">"colocar amigos que asisten"</div>
                </td>
              </tr>
            </tbody>
          </table>
            </div>
          </div>
          </div>



          </div>

              <div className="Logo-Fecha text-white">
                
          </div>
          <center>
            <hr className="hr2"></hr>
          </center>

          {comprarButton}

         
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