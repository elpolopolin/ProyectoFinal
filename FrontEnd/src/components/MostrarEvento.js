import React, { useState, useEffect } from "react";
import { format } from 'date-fns';
import Calendario2 from '../icons/Calendario2.png'
import "../App.css";
import { Button, Modal } from "react-bootstrap";

function MostrarEvento({ evento, participantesEvento }) {
   
    const [MostrarParticipantes, setMostrarParticipantes] = useState(false);

    return (
      <div>
      {!MostrarParticipantes &&
    <div key={evento.Id}>
        <center>
        <h1 className="title">{evento.Nombre}</h1>
        <img src={evento.ImagenEvento} className="imagenEvento"></img>
        <p className="text-white">{evento.Descripcion}</p>
        <hr className="hr1"></hr>
        </center>
        <div className="div-center2">
        <div className="Dat-izq">
          <p className="Datos">Organizador: {evento.organizador}</p>
          <p className="Datos"><a className="link" onClick={()=> setMostrarParticipantes(true)}>Personas que asisten </a></p>
          <p className="Datos">Destacados:</p>
          {/* fotos de destacados */}
          <p className="Datos">Amigos:</p>
          {/* fotos de destacados */}
        </div>

        

        <div className="Dat-der">
          <p className="Datos">Precio: ${evento.Precio}</p>
          <p className="Datos">Categoria: {evento.idcategoria}</p>
          <p className="Datos">Locacion: {evento.Direccion}</p>
          <p className="Datos">Rangos de edad: {evento.EdadMinima} - {evento.EdadMaxima}</p>
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
                              <div class="card mb-3" className="card mb-3">
                                <div class="row g-0">
                                  <div class="col-md-4">
                                  <img src={participante.FotoPerfil} alt="Participante" className="foto-perfil-participantes"/>
                                  <h5 class="card-title1">{participante.NombreUsuario}</h5>
                                  </div>
                                  <div class="col-md-8">
                                    <div class="card-body1">
                                      <p class="card-text1">{participante.Descripcion[1]}</p></div>
                                  </div>
                                </div>
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