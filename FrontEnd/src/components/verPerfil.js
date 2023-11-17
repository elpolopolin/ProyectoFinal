import React, { useContext ,useEffect, useState } from "react";
import { format } from "date-fns";
import './styles/Profile.css';
import { UsuarioContext } from "../App";
import axios from "axios";
import { HostContext } from "../App";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


function VerPerfil() { 
  const host = useContext(HostContext);
  const { id } = useParams();
  const [usuario, setUsuario] = useState(null);



  useEffect(() => {
    const obtenerDatosUsuario = async () => {
        try {
          const response = await axios.get(`${host}/usuarios/getbyid/${id}`);
          setUsuario(response.data);
        } catch (error) {
          console.error("Error al obtener datos del usuario:", error);  
        }
      };

       obtenerDatosUsuario();
  },[id, host]);

  const formatDateDDMMYY = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
 



 return (
    <div className="profile-container overflow-y-auto">
  
  {usuario && (
    <div className="  transition-all text-white rounded-lg ">
    <div className="  ">
            <img src={usuario.FotoPerfil} style={{width: "100%", height:"300px"}}/>
        </div>
        <div className="md:mt-12 mt-12  ">
                
                <div className="flex gap-1">
                    <p className="text-lg font-bold">@{usuario.NombreUsuario}</p>
                </div>
          
            <div className="flex gap-20 mt-5 text-m">
            <div className="flex flex-col gap-1">
                <div className="flex gap-3 items-center text-gray-200">
                    <i className="text-gray-100 fa fa-id-card-o"></i>
                    <p className=" font-semibold" >{usuario.Nombre} {usuario.Apellido} </p>
                </div>
                
                <div className="flex gap-3 items-center">
                    <i className="text-gray-100 fa fa-address-card"></i>
                    <p className="font-semibold ">{usuario.Genero}</p>
                </div>
               
            </div>

            <div className="flex flex-col gap-1">
                <div className="flex gap-3 items-center text-gray-200">
                    <i className="text-gray-100 fa fa-id-card-o"></i>
                    <p className="font-semibold ">{formatDateDDMMYY(usuario.FechaNacimiento)}</p>
                </div>
                <div className="flex gap-3 items-center">
                    <i className="text-gray-100 fa fa-location-arrow"></i>
                    <p className="font-semibold ">{usuario.Direccion}</p>
                </div>
                
            </div>
            
            </div>

                    <div className="border rounded-lg p-2 mt-5 mx-auto max-w-md h-30 overflow-y-auto">
                    <p className="text-center">{usuario.Descripcion}</p>
                    </div> 
            {    /*   <button class="my-5 h-12 w-full bg-blue-500 cursor-pointer text-white transition-all hover:bg-blue-800 rounded-lg ">Añadir como amigo</button>  esto va solo en verperfil*/ }
        </div>

              <div className="text-center">
                <h1 className="text-xl font-bold my-4">Categorías:</h1>
            </div>

      <div className="flex flex-wrap gap-4">
       {/* {categoriasUser.map((category, index) => (
          <div
            key={category.IdCategoria}
            className={` text-center p-4 rounded-lg cursor-pointer`}
          >
            <h3 className="text-white">{category.NombreCategoria}</h3>
          </div>
        ))}
       */}
      </div>

      </div>
      )}
    </div>
  );
}

export default VerPerfil;



