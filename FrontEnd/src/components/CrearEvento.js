import React, { useState, useContext, useEffect } from "react";
import { CheckCircle } from "feather-icons-react";
import axios from "axios";
import { HostContext } from "../App";
import './styles/CrearEvento.css';

function CrearEvento() {
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
        }
      })
      .then((response) => {
        console.log("Evento creado exitosamente:", response.data);
        if (Array.isArray(response.data) && response.data.length > 0) {
          setShowModal(true);
        } else {
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
  }, []);

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
    <div className="flex items-center justify-center h-screen">
      <div className="p-10 min-h-screen tracking-wide">
        <div className="nana-container overflow-y-auto">
          <label className="block text-white font-bold mb-2 bg-pink-500 rounded-md">

          </label>

          <form onSubmit={handleSubmit} className="max-w-lg" enctype="multipart/form-data">
            <div className="mb-4 flex bg-pink-500 rounded-md align-middle">
              <div className="ImagenEvento mr-2 ml-1 align-middle">
                <input
                  type="file"
                  name="ImagenEvento"
                  onChange={handleImageChange}
                  className="SeleccionarArchivos"
                  required
                />
                <label for="file" className="text-center align-middle" style={{fontSize: '150px', margin: "auto"}}> + </label>
              </div>


            </div>

            <div className="w-1/2 ml-2">
              <div className="mb-4 text-center">
                <label className="block text-white font-semibold mb-2 ml-1" htmlFor="privacidad">
                  Privacidad
                </label>
                <div className="flex items-center justify-center ml-1">
                  <input
                    type="checkbox"
                    name="Privacidad"
                    checked={evento.Privacidad}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <span className="text-white">Privado</span>
                </div>
              </div>
            </div>


            <div className="mb-4 bg-pink-500 rounded-md">
              <label className="block text-white font-semibold mb-2 ml-1" htmlFor="nombre">
                Nombre
              </label>
              <input
                type="text"
                name="Nombre"
                value={evento.Nombre}
                onChange={handleInputChange}
                className="w-full bg-white text-black rounded-md py-2 px-3"

                required />
            </div>
            <div className="mb-4 bg-pink-500 rounded-md" >
              <label className="block text-white font-semibold mb-2 ml-1" htmlFor="fecha">
                Fecha
              </label>
              <input
                type="date"
                name="Fecha"
                value={evento.Fecha}
                onChange={handleInputChange}
                className="w-full bg-white text-black rounded-md py-2 px-3"
              />
            </div>
            <div className="mb-4 bg-pink-500 rounded-md">
              <label className="block text-white font-semibold mb-2 ml-1" htmlFor="precio">
                Precio
              </label>
              <input
                type="number"
                name="Precio"
                value={evento.Precio}
                onChange={handleInputChange}
                className="w-full bg-white text-black rounded-md py-2 px-3"
              />
            </div>
            <div className="mb-4 bg-pink-500 rounded-md">
              <label className="block text-white font-semibold mb-2 ml-1" htmlFor="participantes">
                Participantes
              </label>
              <input
                type="number"
                name="Participantes"
                value={evento.Participantes}
                onChange={handleInputChange}
                className="w-full bg-white text-black rounded-md py-2 px-3"
              />
            </div>
            <div className="mb-4 bg-pink-500 rounded-md">
              <label className="block text-white font-semibold mb-2 ml-1" htmlFor="descripcion">
                Descripcion
              </label>
              <input
                type="text"
                name="Descripcion"
                value={evento.Descripcion}
                onChange={handleInputChange}
                className="w-full  bg-white text-black rounded-md py-2 px-3 text-top h-40"
                required />
            </div>
            <div className="mb-4 bg-pink-500 rounded-md">
              <label className="block text-white font-semibold mb-2 ml-1" htmlFor="direccion">
                Direccion
              </label>
              <input
                type="text"
                name="Direccion"
                value={evento.Direccion}
                onChange={handleInputChange}
                className="w-full bg-white text-black rounded-md py-2 px-3"
                required />
            </div>





            <div className="mb-4">
              <label className="block text-white font-semibold mb-2" htmlFor="categoria">
                Categoría
              </label>
              <select
                name="Categoria"
                value={evento.Categoria}
                onChange={handleInputChange}
                className="w-full bg-white text-black rounded-md py-2 px-3"
              >
                <option value="">Seleccionar Categoría</option>
                {categorias.map((categoria) =>
                  <option value={categoria.IdCategoria}>{categoria.NombreCategoria}</option>
                )}
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
                  className="bg-green-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-400"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default CrearEvento;