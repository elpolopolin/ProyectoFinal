import React, { useState } from "react";
import { CheckCircle } from "feather-icons-react";

function CrearEvento() {
  const [evento, setEvento] = useState({
    nombre: "",
    fecha: "",
    precio: "",
    participantes: "",
    descripcion: "",
    direccion: "",
    privacidad: false,
    edadMinima: 0,
    imagenEvento: null,
    categoria: "",
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

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setEvento((prevEvento) => ({
      ...prevEvento,
      imagenEvento: imageFile,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos del evento a tu API o realizar cualquier otra acción necesaria
    console.log(evento);
  };

  return (
    <div className="p-10 min-h-screen tracking-wide">
        <div className="nana-container overflow-y-auto">
            <label className="block text-white font-bold mb-2 bg-pink-500 rounded-md">
      <h1 className="text-white  text-4xl font-bold text-center mb-8">Crear Evento</h1>
            </label>

        <form onSubmit={handleSubmit} className="max-w-lg ">
            <div className="mb-4 bg-pink-300 rounded-md">
            <label className="block text-white font-semibold mb-2 ml-1" htmlFor="nombre">
                Nombre
            </label>
            <input
                type="text"
                name="nombre"
                value={evento.nombre}
                onChange={handleInputChange}
                className="w-full bg-white text-black rounded-md py-2 px-3"
            />
            </div>
            <div className="mb-4 bg-pink-300 rounded-md" >
            <label className="block text-white font-semibold mb-2 ml-1" htmlFor="fecha">
                Fecha
            </label>
            <input
                type="date"
                name="fecha"
                value={evento.fecha}
                onChange={handleInputChange}
                className="w-full bg-white text-black rounded-md py-2 px-3"
            />
            </div>
            <div className="mb-4 bg-pink-300 rounded-md">
            <label className="block text-white font-semibold mb-2 ml-1" htmlFor="precio">
                Precio
            </label>
            <input
                type="number"
                name="precio"
                value={evento.precio}
                onChange={handleInputChange}
                className="w-full bg-white text-black rounded-md py-2 px-3"
            />
            </div>
            <div className="mb-4 bg-pink-300 rounded-md">
            <label className="block text-white font-semibold mb-2 ml-1" htmlFor="participantes">
                Participantes
            </label>
            <input
                type="number"
                name="participantes"
                value={evento.participantes}
                onChange={handleInputChange}
                className="w-full bg-white text-black rounded-md py-2 px-3"
            />
            </div>
            <div className="mb-4 bg-pink-300 rounded-md">
            <label className="block text-white font-semibold mb-2 ml-1" htmlFor="descripcion">
                Descripcion
            </label>
            <input
                type="text"
                name="descripcion"
                value={evento.descripcion}
                onChange={handleInputChange}
                className="w-full  bg-white text-black rounded-md py-2 px-3 text-top h-40"
            />
            </div>
            <div className="mb-4 bg-pink-300 rounded-md">
            <label className="block text-white font-semibold mb-2 ml-1" htmlFor="direccion">
                Direccion
            </label>
            <input
                type="text"
                name="direccion"
                value={evento.direccion}
                onChange={handleInputChange}
                className="w-full bg-white text-black rounded-md py-2 px-3"
            />
            </div>

           
          
            <div className="mb-4 flex bg-pink-300 rounded-md">
            <div className="w-1/2 mr-2 ml-1">
              <label className="block text-white font-semibold mb-2 ml-1" htmlFor="imagenEvento">
                Imagen del Evento
              </label>
              <input
                type="file"
                name="imagenEvento"
                onChange={handleImageChange}
                className="w-full ml-1"
              />
            </div>
            <div className="w-1/2 ml-2">
              <div className="mb-4 text-center">
                <label className="block text-white font-semibold mb-2 ml-1" htmlFor="privacidad">
                  Privacidad
                </label>
                <div className="flex items-center justify-center ml-1">
                  <input
                    type="checkbox"
                    name="privacidad"
                    checked={evento.privacidad}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <span className="text-white">Privado</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-white font-semibold mb-2" htmlFor="categoria">
              Categoría
            </label>
            <select
              name="categoria"
              value={evento.categoria}
              onChange={handleInputChange}
              className="w-full bg-white text-black rounded-md py-2 px-3"
            >
              <option value="">Seleccionar Categoría</option>
              <option value="musica">Música</option>
              <option value="deportes">Deportes</option>
              {/* ...agregar más opciones de categoría */}
            </select>
          </div>
          
          <div className="flex justify-center mb-8 mt-10">
            <button
              type="submit"
              className="bg-pink-500 w-full hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md flex items-center"
            >
              <span className="mr-2">
                <CheckCircle size={16} /> {/* Icono de tick verde */}
              </span>
              Crear Evento
            </button>
          </div>
          
        </form>
        </div>
    </div>
  );
}

export default CrearEvento;