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
    <div className=" min-h-screen p-8 text-neutral-300">

         <div className="nana-container overflow-y-auto " style={{marginTop: "-10px"}}>

      <div className="container mx-auto">

        {/* Sección de Novedades */}
        <section className="mb-4">
        <h2 className="text-3xl font-semibold mb-2 text-center ">Novedades</h2>

<div className="carousel w-full h-56">

  <div id="slide1" className="carousel-item relative w-full m-2 rounded-lg">
    <div className="bg-indigo-200 rounded-lg w-full h-full">
      
        <img src={imagenEventop} alt="Imagen de la novedad" className="w-full mb-5"  style={{height: "65%"}}/>
      
      <h3 className="text-xl font-semibold text-white  text-center bg-pink-500 mx-2 rounded-lg">Eventop Sneak Peak</h3>
    </div>
  </div>

  <div id="slide2" className="carousel-item relative w-full m-2 rounded-lg">
    <div className="bg-yellow-500 rounded-lg w-full h-full">
      <img src="https://misanimales.com/wp-content/uploads/2018/10/perros-parque.jpg" alt="Imagen de la novedad" className="w-full  object-cover" style={{height: "65%"}}/>
      <h3 className="text-xl font-semibold text-white  text-center bg-black mx-2 mt-5 rounded-lg">Juntada Canina</h3>
    </div>
  </div>

  <div id="slide3" className="carousel-item relative w-full m-2 rounded-lg">
    <div className="bg-stone-900 rounded-lg w-full h-full">
      <img src="https://cpad.ask.fm/379/040/503/-389996995-1ss3e9t-jmbfo9dgb80758a/original/noche.jpg" alt="Imagen de la novedad" className="w-full  object-cover" style={{height: "65%"}}/>
      <h3 className="text-xl font-semibold text-black  text-center bg-white mx-2 mt-5 rounded-lg">Fiesta Milagrosa</h3>
    </div>
  </div>

 
</div>
</section>
 
  
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
      
    
        

        {/* Sección de Calendario */}
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


      <section className="border border-purple p-2 rounded">
        <p className="text-center font-bold text-purple-400">Imagenes Inneditas</p>
      <div className="carousel w-full rounded-box h-40">
  <div id="item1" className="carousel-item w-full">
    <img src={imagencaru1} className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src={imagencaru2} className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src={imagencaru3} className="w-full" />
  </div> 
</div> 


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