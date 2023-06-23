import React, { useState, useEffect } from "react";
import { format } from 'date-fns';
import Calendario2 from '../icons/Calendario2.png'


function MostrarEvento({ evento }) {
    console.log(evento);
    
  return (
    <div key={evento.Id} >
        <center>
        <h1 className="title">{evento.Nombre}</h1>
        <img src={evento.ImagenEvento} className="imagenEvento"></img>
        <p className="text-white">{evento.Descripcion}</p>
        <hr className="hr1"></hr>
        </center>
        <center className="center2">
        <div className="Dat-izq">
          <p className="Datos">Organizador: {evento.organizador}</p>
          <p className="Datos">Personas que asisten:</p>
          
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
                          "dd 'of' MMMM 'of' yyyy ' ' HH'hs'"
                        )}
          </p>
          </div>
        </div>
        </center>
        <center>
        <hr className="hr2"></hr>
        </center>
        
        
        

        

        
    </div>
  );
}

export default MostrarEvento;