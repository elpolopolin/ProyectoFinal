import React, { useEffect, useState, useContext  } from "react";
import axios from "axios";
import { HostContext } from "../App";

function Registrarse() {

    const [usuario, setUsuario] = useState({
        NombreUsuario: "",
        Contrasena: "",
        Nombre: "",
        Apellido: "",
        FechaNacimiento: "",
        Genero: "",
        FechaCreacion: new Date(),
        Descripcion: "",
        Direccion: "",
        FotoPerfil: null,
        Email: "",
        Verificado: false,
        CodigoVerificacion: null,
      
      });
      const host = useContext(HostContext); //en ort poner localhost o la ip de la pc

      const Registrarse = () => {
        axios
        .post(host + "/usuarios/insert", usuario, {
          headers: {
            'accept': 'application/json',
            'Accept-Language': 'en-US,en;q=0.8',
            'Content-Type': `multipart/form-data; boundary=${usuario._boundary}`,
          }})
        .then((response) => {
          console.log("Usuario creado exitosamente:", response.data);  
    
        })
        .catch((error) => {
            console.error("Error al crear el usuario:", error);
            if (error.response) {
                console.log("Response data:", error.response.data); // Agregar esta línea
                console.log("Response status:", error.response.status); // Agregar esta línea
            } else {
                console.log("Error sin respuesta del servidor");
            }
        });
          
        
      }

    const handleSubmit = (user) => {
        user.preventDefault();
       
        Registrarse();
        console.log(user);
    
      };
      
      const handleImageChange = (user) => {
        const imageFile = user.target.files[0];
      
        if (imageFile) {
          const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
          const fileExtension = imageFile.name.split('.').pop().toLowerCase();
      
          // Verificar si la extensión está en la lista de extensiones permitidas
          if (allowedExtensions.includes(`.${fileExtension}`)) {
            setUsuario((prevUsuario) => ({
              ...prevUsuario,
              FotoPerfil: imageFile,
            }));
          } else {
            alert('Por favor, selecciona un archivo de imagen válido (ej. JPG, JPEG, PNG, GIF).');
            user.target.value = '';
          }
        }
      };

      const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        // Convertir el valor en booleano si es un campo de privacidad
        const newValue = type === "checkbox" ? checked : value;
      
        setUsuario((prevUsuario) => ({
          ...prevUsuario,
          [name]: newValue,
        }));
      };
    
    
    return (
        <>
           <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-slate-700 w-4/6 p-6 rounded-lg shadow-lg border ">
            <div className="text-center">
              <p className="text-xl text-white font-semibold mb-4">Registrarse</p>
            </div>

                    <form className="border bordr-white p-2 rounded-md" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">    
                <div>
                <label className="text-white dark:text-gray-200" for="nombre">
                    Nombre De Usuario
                </label>
                <input
                    id="NombreUsuario"
                    type="text"
                    name="NombreUsuario"
                    value={usuario.NombreUsuario}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    required
                />
                </div>

                <div>
                <label className="text-white dark:text-gray-200" for="nombre">
                    Contraseña
                </label>
                <input
                    id="Contrasena"
                    type="password"
                    name="Contrasena"
                   value={usuario.Contrasena}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    required
                />
                </div>

                <div>
                <label className="text-white dark:text-gray-200" for="nombre">
                Email
                </label>
                <input
                    id="Email"
                    type="email"
                    name="Email"
                   value={usuario.Email}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    required
                />
                </div>

                <div>
                <label className="text-white dark:text-gray-200" for="nombre">
                    Nombre
                </label>
                <input
                    id="Nombre"
                    type="text"
                    name="Nombre"
                   value={usuario.Nombre}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    required
                />
                </div>

                <div>
                <label className="text-white dark:text-gray-200" for="nombre">
                    Apellido
                </label>
                <input
                    id="Apellido"
                    type="text"
                    name="Apellido"
                   value={usuario.Apellido}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    required
                />
                </div>

                <div>
                <label class="text-white dark:text-gray-200" for="fecha">
                    Fecha Nacimiento
                </label>
                <input
                    id="Fecha"
                    type="date"
                    name="FechaNacimiento"
                    value={usuario.FechaNacimiento}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    required
                />
                 </div>

                 <div>
                <label class="text-white dark:text-gray-200" for="fecha">
                    Genero
                </label>
                <select
                    id="Genero"
                    name="Genero"
                    value={usuario.Genero} // Corregir aquí
                    onChange={handleInputChange}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    required
                >
                    <option value="No Especifica">Seleccionar Genero</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                </select>
                 </div>

                 <div>
                <label className="text-white dark:text-gray-200" for="nombre">
                Direccion
                </label>
                <input
                    id="Direccion"
                    type="text"
                    name="Direccion"
                   value={usuario.Direccion}
                    onChange={handleInputChange}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    required
                />
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

                
            </div>

            <div className="flex justify-center ">
                <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-green-700 focus:outline-none focus:bg-gray-600" >
                <span className="">
                
                </span>
                  Crear Usuario
                </button>
            </div>
            </form>

           
          </div>
        </div>
        </>
    );

}
export default Registrarse;