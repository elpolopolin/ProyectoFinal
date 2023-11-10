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
       
        <div className="mx-2 overflow-y-auto">
        <div className="nana-container overflow-y-auto">
          <div className="flex justify-center mt-5">
            <input
              id="nombre"
              type="text"
              name="Nombre"
              value={evento.Nombre}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-2 text-gray-100 text-center bg-transparent focus:bg-transparent border-b border-gray-400"
              required
            />
          </div>
          <div className="mb-5">
            <img src={evento.ImagenEvento} className="w-full" style={{ maxHeight: "50%" }} alt="Evento" />
          </div>
          <div className="mb-5 overflow-y-auto">
            <p className="text-white flex justify-center text-center">
              <input
                id="Descripcion"
                type="text"
                name="Descripcion"
                value={evento.Descripcion}
                onChange={handleInputChange}
                className="w-full px-4 py-2 mt-2 text-gray-100 rounded-md bg-transparent focus:bg-transparent  "
              />
            </p>
            <div className="mb-5">
              <hr className="hr1 mt-5" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <label className="text-white">Precio
              
                  <input
                    id="precio"
                    type="number"
                    name="Precio"
                    value={evento.Precio}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 mt-2 text-gray-100 rounded-md bg-transparent focus:bg-transparent border-b border-gray-400"
                  />
               
              </label>
              <label className="text-white">Fecha
                <input
                  id="fecha"
                  type="date"
                  name="Fecha"
                  value={evento.Fecha}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 text-gray-100 rounded-md bg-transparent focus:bg-transparent border-b border-gray-400"
                  required
                />
              </label>
              <label className="text-white">Participantes
                <input
                  id="Participantes"
                  type="number"
                  name="Participantes"
                  value={evento.Participantes}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 text-gray-100 rounded-md bg-transparent focus:bg-transparent border-b border-gray-400"
                />
              </label>
              <label className="text-white">Direccion
                <input
                  id="Direccion"
                  type="text"
                  name="Direccion"
                  value={evento.Direccion}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 text-gray-100 rounded-md bg-transparent focus:bg-transparent border-b border-gray-400"
                />
              </label>
              <label className="text-white text-center items-center justify-items-center">Privacidad
                <input
                  id="privacidad"
                  type="checkbox"
                  name="Privacidad"
                  checked={evento.Publico}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 text-gray-100 rounded-xl"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    )
}

export default EditarEvento;