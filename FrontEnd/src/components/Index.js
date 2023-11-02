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

function Index() {
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
  const [Categorias, setCategorias] = useState([]); // Definición de Categorias

  const [categoriaUser, setCategoriaUser] = useState([]);

  useEffect(() => {
    cargarEventos();
    cargarCategorias(); // Agrega la función para cargar categorías

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


  const handleVerEventos = () => {

  }

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

  return (
    <div>
      {/* El código previo fue eliminado para mantener la claridad */}
      <div className="">
        <div className="nana-container overflow-y-scroll text-white">
          <h2 className="font-bold text-2xl text-center py-6"></h2>
          <div className="">
            <div
              className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8 "
              style={{ marginTop: "-30px" }}
            >




<div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 xsm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
  {Categorias.map((categoria) => (
    <div
      key={categoria.IdCategoria}
      className="group relative overflow-hidden rounded-lg bg-gray-200"
      style={{ aspectRatio: "1 / 1" }}
    >
      <img
        src={categoria.Imagen}
        className="h-full w-full object-cover object-center group-hover:opacity-75 transition duration-300"
        alt={categoria.NombreCategoria}
      />
      <div className="categoria-overlay flex items-center justify-center absolute inset-0 bg-black bg-opacity-50 opacity-0 transition duration-300">
        <Link key={categoria.IdCategoria}  to={`categoria/${categoria.IdCategoria}`}className="cursor-pointer" > <button className="text-white text-center opacity-0 group-hover:opacity-100 transition duration-300 bg-pink-500 hover:bg-pink-600 py-2 px-3 rounded" onClick={() => handleVerEventos(categoria.IdCategoria)}> 
          Ver Eventos
        </button> </Link>
      </div>
      <h3 className="mt-2 text-sm font-bold text-center absolute bottom-0 w-full bg-black bg-opacity-50 text-white py-2">
        {categoria.NombreCategoria}
      </h3>
    </div>
  ))}
</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;