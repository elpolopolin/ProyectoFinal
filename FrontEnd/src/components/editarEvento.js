import React, { useState, useContext, useEffect } from "react";
import { Link, BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import axios from "axios";
import { HostContext } from "../App";

function EditarEvento({cargarUsuario}) { 
    const usuario = cargarUsuario();
    const { id } = useParams();
    const idd = parseInt(id);
    const host = useContext(HostContext); 

    const [evento, setEvento] = useState({
        Nombre: "",
        Fecha: "",
        Precio: null,
        Participantes: null,
        Descripcion: "",
        Direccion: "",
        Privacidad: false,
        EdadMinima: 0,
        ImagenEvento: null,
        Categoria: 0,
        Organizador: usuario.Id,
      });
      const handleInputChange = (event) => {
        const { name, value, type } = event.target;
    
        // Convertir el valor en booleano si es un campo de privacidad
        const newValue = type === "checkbox" ? event.target.checked : value;
    
        setEvento((prevEvento) => ({
          ...prevEvento,
          [name]: newValue,
        }));
      };

      useEffect(() => {
        cargarEvento()
      }, []);

      useEffect(() => {
        console.log(evento)
      }, [evento]);

      const cargarEvento = () => {
        let link = host + "/getbyidEvento/"; 
        link += id;
        axios
        .get(link)
        .then((result) => {
            const event = result.data;
            console.log(result.data)
            setEvento(event);
          })
          .catch((error) => {
            console.log(error);
          });
      }

    return (
        <div className="p-4">
        <div className="  justify-items-center">
            <img src={evento.ImagenEvento}  className=""/>
            <div class=" grid grid-cols-2 gap-4">
                <input
                    id="nombre"
                    type="text"
                    name="Nombre"
                    value={evento.Nombre}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 mt-2 text-gray-700  "
                    required
                />
                    <input
                    id="precio"
                    type="number"
                    name="Precio"
                    value={evento.Precio}
                    onChange={handleInputChange}
                    className=" w-full px-4 py-2 mt-2 text-gray-700 rounded-md "
                />
                
                <input
                    id="fecha"
                    type="date"
                    name="Fecha"
                    value={evento.Fecha}
                    onChange={handleInputChange}
                    className=" w-full px-4 py-2 mt-2 text-gray-700  rounded-md"
                    required
                 />  
                 </div>
          </div>
        </div>
    )
}

export default EditarEvento;