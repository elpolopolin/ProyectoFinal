import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate  } from "react-router-dom";
import { format } from 'date-fns';
import Calendario2 from '../icons/Calendario2.png'
import "../App.css";
import './styles/MostrarEvento.css';
import { HostContext } from "../App";
import axios from "axios";
import { UsuarioContext } from "../App";


function MostrarEvento({ evento, participantesEvento }) {

  const usuario = useContext(UsuarioContext);
  const navigate = useNavigate();
  const host = useContext(HostContext);
  const [MostrarParticipantes, setMostrarParticipantes] = useState(false);
  const [organizador, setOrganizador] = useState([]);

  const handleComprar = () => {
    // Utiliza navigate para redirigir a la página deseada
    navigate(`/comprar/evento/${evento.Id}`);
  }

  const handleEntrar = () => {
    const IdUsuario = usuario.Id;
    const IdEvento = evento.Id
    const data = {
      IdUsuario: IdUsuario,
      IdEvento: IdEvento
    };
  
    axios
    .post(host + "/IngresarEnEvento", data )
    .then((response) => {
      
    })  .catch((error) => {
      console.error("Error:", error);
      
    });
  }

  useEffect(() => {
  
    Organizador()
  }, []);


  const Organizador = () => {
    if(evento.IdOrganizador != null) {
      let link = host + "/usuarios/getById/";
      link += evento.IdOrganizador;
      axios
        .get(link)
        .then((result) => {
          const org = result.data;
          setOrganizador(org);
          });
    } else (
      console.log("no hay organizador")
    )
   
      
  }


  return (
    <div>
      {!MostrarParticipantes &&
        <div key={evento.Id} className="mx-2 overflow-y-auto ">
          
          <div className="nana-container">
            <div className="flex justify-center mt-5 ">
            <p className="titulo-evento">{evento.Nombre}</p>
            </div>
              <div className="mb-5" >
                <div className="carousel w-full h-1/4">
                  <div id="slide1" class="carousel-item relative flex justify-center w-full" >
                    <img src={evento.ImagenEvento} className="w-full " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide4" class="btn btn-circle">❮</a>
                      <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                  </div>
                  <div id="slide2" class="carousel-item relative w-full">
                    <img src={evento.Imagen2Evento} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide1" className="btn btn-circle">❮</a>
                      <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                  </div>
                  <div id="slide3" className="carousel-item relative w-full">
                    <img src={evento.Imagen3Evento} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide2" className="btn btn-circle">❮</a>
                      <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                  </div>
                  <div id="slide4" class="carousel-item relative w-full">
                    <img src={evento.Imagen4Evento} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide3" className="btn btn-circle">❮</a>
                      <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                  </div>
                </div>
              </div>
            <div className="mb-5" >
            <p className="text-white flex justify-center">{evento.Descripcion}</p>
            </div>
          

            <div className="mb-5">
            <hr className="hr1"></hr>
            </div>
            
          


          
          <div className="flex w-full">
          <div className="grid h-50 flex-grow card text-white place-items-left">
            <div className="Dat-izq">
            <div className="overflox-x-auto">
            <table className="table-auto text-center">
            <tbody>
              <tr>
                <td>
                  
                  <div className="Datos"> <a className="text-blue-600 link">Organizador: {organizador.NombreUsuario} </a></div>
                </td>
                <td>
                  
                  <div className="Datos">
                    <a className="link text-blue-600" onClick={() => setMostrarParticipantes(true)}>Asistentes</a>
                  </div>
                </td>
                <td className="">
                  
                  <div className="Datos">{evento.Direccion}</div>
                </td>
              </tr>
              <tr>
                <td>
                  
                  <div className="Datos">
                  {evento.Fecha}
                    </div>
                </td>
                <td>
                  <div className="Datos">Rango de edad:</div>
                  <div className="Datos">{evento.EdadMinima} - {evento.EdadMaxima}</div>
                </td>
                <td>
                  
                  <div className="Datos">0/{evento.Participantes}</div>
                </td>
              </tr>
            </tbody>
          </table>
            </div>
          </div>
          </div>


          </div>
              <div className="Logo-Fecha text-white">    
          </div>
          <center>
            <hr className="hr2"></hr>
          </center>

            <div className="flex justify-center mt-5"> {/* mismo link pa los dos */}
        
          {evento.Precio > 0 ? (
            <button onClick={handleComprar } className="bg-pink-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
               Comprar 
            </button>
          ) : (
            <button onClick={handleEntrar}  className="bg-pink-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
              Entrar
            </button>
          )}
        </div>

         
        </div>
        </div>
        
      }

      {MostrarParticipantes &&
        <div>
          <center>
            <h1 className="title-participantes-evento">Participantes del evento</h1>
          </center>
          {
            participantesEvento.map((participante) => {
              return (

                <div key={participante.IdUsuario}>
                  <center>
                  </center>
                  <div className="alert alert-info">
                    <img src={participante.FotoPerfil} fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"></img>
                    <span>{participante.Descripcion}</span>
                  </div>


                </div>
              );
            })}
          <button
            onClick={() => setMostrarParticipantes(false)}
            className="btn btn-primary "
          >
            Salir
          </button>
          
        </div>
      }

    </div>
  );
}

export default MostrarEvento;