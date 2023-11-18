import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate  } from "react-router-dom";
import { format } from 'date-fns';
import Calendario2 from '../icons/Calendario2.png'
import "../App.css";
import './styles/MostrarEvento.css';
import { HostContext } from "../App";
import axios from "axios";
import { UsuarioContext } from "../App";
import { CheckCircle } from "feather-icons-react";
import { AlertCircle } from "feather-icons-react";

function MostrarEvento({ evento, participantesEvento }) {

  const usuario = useContext(UsuarioContext);
  const navigate = useNavigate();
  const host = useContext(HostContext);
  const [MostrarParticipantes, setMostrarParticipantes] = useState(false);
  const [organizador, setOrganizador] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleComprar = () => {
    // Utiliza navigate para redirigir a la página deseada
    navigate(`/comprar/evento/${evento.Id}`);
  }

  const isMobile = window.innerWidth <= 768;

  const handleEntrar = () => {
    const IdUsuario = usuario.Id;
    const IdEvento = evento.Id;
    const data = {
      IdUsuario: IdUsuario,
      IdEvento: IdEvento
    };

    axios
      .post(host + '/IngresarEnEvento', data)
      .then((response) => {
        // Mostrar modal de "Entrada adquirida"
        setModalMessage('Entrada adquirida');
        setModalVisible(true);
      })
      .catch((error) => {
        console.error('Error:', error);
        if (error.response) {
          // Error específico del servidor
          setModalMessage(error.response.data.error);
        } else {
          // Error genérico de red
          setModalMessage('Ups... Algo salió mal');
        }
        setModalVisible2(true);
      });
  };

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  }
  

  // useEffect(() => {
  
  //   Organizador()
  // }, []);


  const calcularEdad = (fechaNacimiento) => {
    const fechaNacimientoObj = new Date(fechaNacimiento);
    const fechaActual = new Date();
  
    let edad = fechaActual.getFullYear() - fechaNacimientoObj.getFullYear();
  
    // Verificar si ya ha pasado el cumpleaños de este año
    if (
      fechaNacimientoObj.getMonth() > fechaActual.getMonth() ||
      (fechaNacimientoObj.getMonth() === fechaActual.getMonth() &&
        fechaNacimientoObj.getDate() > fechaActual.getDate())
    ) {
      edad--;
    }
  
    return edad;
  }


  return (
    <div>
    
      {!MostrarParticipantes &&
      <div>
        <div key={evento.Id} className=" ">
          
          <div className="">
            <p className="text-white font-bold text-2xl text-center py-6 bg-[#252525] decoration-pink-500">{evento.Nombre}</p>
              <div className="mb-5" >

              

              <div className="md:mx-40 sm:mx-15">
              {isMobile ? (
                 <img src={evento.ImagenEvento} className="mx-auto my-auto mt-2 " alt="Evento" style={{width:"400px", height:"300px"}} />
                ) : (
                  <img src={evento.ImagenEvento} className="mx-auto my-auto mt-2 " alt="Evento" style={{width:"900px", height:"500px"}} />
                )}
              
              </div>
                 
            <div className="mb-5" >
            

            
          <p className="text-white text-center mt-4">{evento.Descripcion}</p>
          <hr className="hr1 mt-1" />

          <div className="eventodesc-container lg:max-h-60 overflow-y-auto">
            <div className="">
            {isMobile ? (
              <div className="flex items-center justify-center py-10 md:mx-20 sm:mx-5">
                <ul className="w-full text-sm font-medium  border border-gray-200 rounded-lg bg-gray-700 border-gray-600 text-white">
                  <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg border-gray-600 hover:bg-gray-500">
                    Precio: {evento.Precio ? evento.Precio : <span className="text-green-400">Gratis</span>}
                  </li>
                  <li className="w-full px-4 py-2 border-b border-gray-200 border-gray-600 hover:bg-gray-500">
                    Fecha: {formatDate(evento.Fecha)}
                  </li>
                  <li className="w-full px-4 py-2 border-b border-gray-200 border-gray-600 hover:bg-gray-500">
                    Dirección: {evento.Direccion}
                  </li>
                  <li className="w-full px-4 py-2 rounded-b-lg hover:bg-gray-500" onClick={() => setMostrarParticipantes(true)}>
                    Participantes: {evento.Participando}/{evento.Participantes}
                  </li>
                  <li className="w-full px-4 py-2 rounded-b-lg hover:bg-gray-500" >
                    Organizador: {evento.OrganizadorNombre}
                  </li>
                </ul>
              </div>
            ) : (
              <table className="flex items-center justify-center mt-5 mb-5">
                <tbody className={`font-semibold ${isMobile ? 'text-center' : ''}`}>
                  <tr>
                    <td>Precio:</td>
                    <td>{evento.Precio ? evento.Precio : <span className="text-green-400">Gratis</span>}</td>
                  </tr>
                  <tr>
                    <td>Fecha:</td>
                    <td>{formatDate(evento.Fecha)}</td>
                  </tr>
                  <tr>
                    <td>Dirección:</td>
                    <td>{evento.Direccion}</td>
                  </tr>
                  <tr>
                    <td>Participantes:</td>
                    <td>{evento.Participando}/{evento.Participantes}</td>
                  </tr>
                </tbody>
              </table>
            )}
            </div>
          </div>
              
            <div className="flex justify-center">
            {evento.Precio > 0 ? (
              <button onClick={handleComprar } className="bg-pink-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded ">
                Comprar 
              </button>
            ) : (
              <button onClick={handleEntrar}  className="bg-pink-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded ">
                Entrar
              </button>
            )}
            </div>
            
          </div>
              </div>

        </div>
        </div>
        </div>
   
      }

      {MostrarParticipantes &&
      <div className="text-white">
        <div className="mx-2">
          
          <div className="relative">
            <h1 className="text-white font-bold text-2xl text-center ">Participantes del evento</h1>
            <h1 onClick={() => setMostrarParticipantes(false)} className="text-white absolute top-0 right-0 cursor-pointer">X</h1>
          
        </div>
          {
            
            participantesEvento.map((participante) => {
              return (

                
                <div key={participante.IdUsuario}>
                   
      <div className="bg-slate-700 rounded-lg shadow-xl border w-3xl mb-2 m-2 mt-4 hover:-translate-y-1 hover:shadow-pink-500/50">
        <div className="mb-4 ">
        </div>

        <div className="flex justify-center items-center mb-8 m-4 ">
          <div className="w-1/5">
            <img
              className="w-12 h-12 rounded-full border border-gray-100 shadow-sm"
              src={participante.FotoPerfil}
              alt="user image"
            />
          </div>

          <div className="w-4/5">
            <div>
              <span className="font-semibold ml-2 text-white">{participante.NombreUsuario}</span>
              
            </div>
            <span className="text-gray-400 ml-2"> {calcularEdad(participante.FechaNacimiento)} Years</span>
            
          </div>
          
          <button className="bg-pink-500 rounded-md p-2 w-1/3 hover:bg-pink-400 hover:p-2 "><Link to={`/verPerfil/${participante.IdUsuario}`}>Ver perfil </Link></button>
          
        </div>

      </div>
    </div> 

              );
            })}
         
          
        </div>
        </div>
      }

       {/* Modal */}
       {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white w-4/6 p-6 rounded-lg shadow-lg border border-green-500">
          <div className="text-center">
            <CheckCircle className="text-green-500 mx-auto" size={64} />
            <p className="text-xl font-semibold mt-4">{modalMessage}</p>
          </div>
          <div className="text-center mt-6">
            <button
              onClick={() => setModalVisible(false)}
              className="bg-green-500 text-white font-semibold px-4 py-2 rounded-md hover-bg-green-600 focus-outline-none focus-ring focus-ring-green-400"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
        
      )}
       {modalVisible2 && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white w-4/6 p-6 rounded-lg shadow-lg border border-red-500">
          <div className="text-center">
            <AlertCircle className="text-red-500 mx-auto" size={64} />
            <p className="text-xl font-semibold mt-4">{modalMessage}</p>
          </div>
          <div className="text-center mt-6">
            <button
              onClick={() => setModalVisible2(false)}
              className="bg-red-500 text-white font-semibold px-4 py-2 rounded-md hover-bg-red-600 focus-outline-none focus-ring focus-ring-red-400"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
        
      )}

    </div>
   
  );
}

export default MostrarEvento;
