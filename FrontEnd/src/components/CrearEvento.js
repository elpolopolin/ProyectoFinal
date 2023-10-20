import React, { useState, useContext, useEffect } from "react";
import { CheckCircle } from "feather-icons-react";
import axios from "axios";
import { HostContext } from "../App";
import './styles/CrearEvento.css';
import { UsuarioContext } from "../App";

function CrearEvento({cargarUsuario}) {
  const usuario = cargarUsuario();
  const [categorias, setCategorias] = useState([]);
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
  const [showModal, setShowModal] = useState(false);


  const host = useContext(HostContext); //en ort poner localhost o la ip de la pc


  const cargarCategorias = () => {
    axios
      .get(host + "/Categorias")
      .then((result) => {
        const cat = result.data;
        setCategorias(cat);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const subirEvento = () => {
    axios
    .post(host + "/insert", evento, {
      headers: {
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data; boundary=${evento._boundary}`,
      }})
    .then((response) => {
      console.log("Evento creado exitosamente:", response.data);
      if (Array.isArray(response.data) && response.data.length > 0) {
        setShowModal(true);
      }else {
        alert("!Alguno de los campos es INVALIDO!")
      }
      
      
    })
    .catch((error) => {
      console.error("Error al crear el evento:", error);
      // Maneja errores aquí.
    });
  }

  useEffect(() => { 
    cargarCategorias();
  },[] );

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
  
    if (imageFile) {
      const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
      const fileExtension = imageFile.name.split('.').pop().toLowerCase();
  
      // Verificar si la extensión está en la lista de extensiones permitidas
      if (allowedExtensions.includes(`.${fileExtension}`)) {
        setEvento((prevEvento) => ({
          ...prevEvento,
          ImagenEvento: imageFile,
        }));
      } else {
        alert('Por favor, selecciona un archivo de imagen válido (ej. JPG, JPEG, PNG, GIF).');
        event.target.value = '';
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos del evento a tu API o realizar cualquier otra acción necesaria
    subirEvento();
    console.log(evento);

  };

  


  return (
    <section className="max-w-4xl p-6 mx-auto rounded-md shadow-md profile-container overflow-y-auto">
    <h1 className="text-xl font-bold text-white capitalize dark:text-white mb-4">Crear Evento</h1>
    <form>
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div>
          <label className="text-white dark:text-gray-200" for="nombre">
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            name="Nombre"
            value={evento.Nombre}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            required
          />
        </div>

        <div>
          <label class="text-white dark:text-gray-200" for="fecha">
            Fecha
          </label>
          <input
            id="fecha"
            type="date"
            name="Fecha"
            value={evento.Fecha}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label className="text-white dark:text-gray-200" for="precio">
            Precio
          </label>
          <input
            id="precio"
            type="number"
            name="Precio"
            value={evento.Precio}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label className="text-white dark:text-gray-200" for="participantes">
            Participantes
          </label>
          <input
            id="participantes"
            type="number"
            name="Participantes"
            value={evento.Participantes}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label className="text-white dark:text-gray-200" for="descripcion">
            Descripción
          </label>
          <textarea
            id="descripcion"
            type="textarea"
            name="Descripcion"
            value={evento.Descripcion}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            rows="4"
            required
          ></textarea>
        </div>

        <div>
          <label className="text-white dark:text-gray-200" for="direccion">
            Dirección
          </label>
          <input
            id="direccion"
            type="text"
            name="Direccion"
            value={evento.Direccion}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            required
          />
        </div>

        <div>
          <label className="text-white dark:text-gray-200" for="categoria">
            Categoría
          </label>
          <select
            id="categoria"
            name="Categoria"
            value={evento.Categoria}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            required
          >
            <option value="1">Seleccionar Categoría</option>
            {categorias.map((categoria) =>
            <option value={categoria.IdCategoria}>{categoria.NombreCategoria}</option>
            )}
          </select>
        </div>

        <div>
          <label className="text-white dark:text-gray-200" for="imagenEvento">
            Imagen del Evento
          </label>
          <input
            id="imagenEvento"
            type="file"
            name="ImagenEvento"
            onChange={handleImageChange}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            required
          />
        </div>

        <div>
          <label className="text-white dark:text-gray-200" for="privacidad">
            Privacidad
          </label>
          <div className="relative flex items-center">
            <input
              id="privacidad"
              type="checkbox"
              name="Privacidad"
              checked={evento.Privacidad}
              onChange={handleInputChange}
              className="mr-2 appearance-none checked:bg-pink-500 checked:border-transparent"
            />
            <span className="text-white dark:text-gray-200">Privado</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center ">
        <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-green-700 focus:outline-none focus:bg-gray-600" onClick={handleSubmit}>
          <span className="">
            <CheckCircle size={16} />
          </span>
          Crear Evento
        </button>
      </div>
    </form>
    {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-4/6 p-6 rounded-lg shadow-lg border border-green-500">
            <div className="text-center">
              <CheckCircle className="text-green-500 mx-auto" size={64} />
              <p className="text-xl font-semibold mt-4">Evento creado exitosamente.</p>
            </div>
            <div className="text-center mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="bg-green-500 text-white font-semibold px-4 py-2 rounded-md hover-bg-green-600 focus-outline-none focus-ring focus-ring-green-400"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
  </section>
  );
}

export default CrearEvento;