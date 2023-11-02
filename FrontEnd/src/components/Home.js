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
  

      </div>
  );
}

export default Home;