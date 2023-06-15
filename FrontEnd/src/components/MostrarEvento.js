import React, { useState, useEffect } from "react";
import { format } from 'date-fns';


function MostrarEvento({ evento }) {
    console.log(evento);
  return (
    <div key={evento.Id} >
        <center>
        <h1 className="title">{evento.Nombre}</h1>
        <img src={evento.ImagenEvento} className="imagenEvento"></img>
        <p className="text-white">{evento.Descripcion}</p>
        </center>
    </div>
  );
}

export default MostrarEvento;