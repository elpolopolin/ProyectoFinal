import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Importa Link para crear enlaces internos
import { HostContext } from "../App";
import axios from "axios";
import CalendarioIcon from "../icons/Calendario.png";
import EntradaIcon from "../icons/Entrada.png";
import PinIcon from "../icons/pin.png";
import { format } from "date-fns";
import './styles/home.css';
import Section1pc from "./section1pc";
import { UsuarioContext } from "../App";

function Home() {
  const fechaActual = new Date().toLocaleDateString(); // Obtiene la fecha actual en formato de cadena
  const host = useContext(HostContext);
  const imagenEventop = host + "/imagenesEventos/Eventop.png";
  const imagen_categorias = host + "/imagenesEventop/categorias.jpg"
  const eventosImagen = host + "/imagenesEventop/eventos.png"
  const amigos = host + "/imagenesEventop/amigos.jpg"
  const imagencaru1 = host + "/imagenesEventop/primerosInversores.jpg"
  const imagencaru2 = host + "/imagenesEventop/baño.jpg"
  const imagencaru3 = host + "/imagenesEventop/pindi.jpg"
  const usuariosss = host + "/imagenesEventop/usuarios.png"
  const Tickets = host + "/imagenesEventop/ticket.png"
  const crear = host + "/imagenesEventop/crear.png"
  const novedades = host + "/imagenesEventop/novedades.png"
  const [Eventos, setEventos] = useState([]);
  const usuario = useContext(UsuarioContext);
  const isMobile = window.innerWidth <= 768; // Define el ancho máximo para considerar como dispositivo móvil

  useEffect(() => {
    cargarEventos();
  }, []);

  const cargarEventos = () => {
    axios
      .get(host + "/getAll")
      .then((result) => {
        const events = result.data;
        setEventos(events);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
    {isMobile ? (
    <div className=" min-h-screen p-8 text-neutral-300 ">

         <div className="nana-container overflow-y-auto " style={{marginTop: "-10px"}}>

      <div className="container mx-auto">
  
        {/* Sección de Categorías */}
        <section>
        
          <Link to="/Categorias" className="block mb-6 ">
            <img
              src={imagen_categorias}
              alt="Categorías"
              className="rounded-lg w-full "
              style={{maxHeight: "20%"}}
            />
            
          </Link>
        </section>

        {/* Sección de eventos */}
        <section className="mb-6">
        <Link to="/eventos" className="block position center ">
            <img
              src={eventosImagen}
              alt="Eventos"
              className="rounded-lg  w-full "
              style={{maxHeight: "20%"}}
            />
          </Link>
        </section>

          {/* Sección de buscar amigos */}
          <section className="mb-6">
        <Link to="/eventos" className="block position center ">
            <img
              src={usuariosss}
              alt="Eventos"
              className="rounded-lg  w-full "
              style={{maxHeight: "20%"}}
            />
          </Link>
        </section>

    </div>
    </div>
    </div>

    ) : ( //pc
    <div className="nana-container overflow-y-auto grid place-items-center h-screen">
      <div className="flex flex-col items-center justify-center" style={{marginTop: "-300px"}}>
        <div className="avatar online mt-10" >
        <div className="w-24 rounded-full">
        <Link to="/profile">  <img  src={usuario.FotoPerfil} alt="Avatar" /></Link>
        </div>
       
        </div>
        <h2 className="mt-2 text-white" style={{marginBottom: "-200px"}}>@{usuario.NombreUsuario} </h2>
        </div>
    <div style={{ marginTop: "-300px" }}>

    <div className="grid gap-x-4 gap-y-4 max-w-8xl grid-cols-3 ">
        <section className=" bg-gray-900 p-2 rounded-lg">
          <Link to="/categorias">
            <img
              src={imagen_categorias}
              alt="Categorías"
              className="rounded-lg w-full"
            />
          </Link>
        </section>
        <section className=" bg-gray-900 p-2 rounded-lg">
          <Link to="/eventos">
            <img
              src={eventosImagen}
              alt="Eventos"
              className="rounded-lg w-full"
            />
          </Link>
        </section>
        <section className=" bg-gray-900 p-2 rounded-lg">
          <Link to="/">
            <img
              src={usuariosss}
              alt="Eventos"
              className="rounded-lg w-full"
            />
          </Link>
        </section>

        <section className="  bg-gray-900 p-2 rounded-lg">
          <Link to="/entradas">
            <img
              src={Tickets}
              alt="Eventos"
              className="rounded-lg w-full"
            />
          </Link>
        </section>

        <section className="border  hover:bg-orange-800 p-2 rounded-lg">
          <Link to="/CrearEvento">
            <img
              src={crear}
              alt="Eventos"
              className="rounded-lg w-full"
            />
          </Link>
        </section>

        <section className="  bg-black p-2 rounded-lg">
          <Link to="/">
            <img
              src={novedades}
              alt="Eventos"
              className="rounded-lg w-full"
            />
          </Link>
        </section>

      </div>
      
    </div>
  </div>
      )}

      </div>
  );
}

export default Home;