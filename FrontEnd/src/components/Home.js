import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Importa Link para crear enlaces internos
import { HostContext } from "../App";
import axios from "axios";
import CalendarioIcon from "../icons/Calendario.png";
import EntradaIcon from "../icons/Entrada.png";
import PinIcon from "../icons/pin.png";
import { format } from "date-fns";
import './styles/home.css';

function Home() {
  const fechaActual = new Date().toLocaleDateString(); // Obtiene la fecha actual en formato de cadena
  const host = useContext(HostContext);
  const imagenEventop = host + "/imagenesEventos/Eventop.png";
  const [Eventos, setEventos] = useState([]);

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
   
    <div className=" min-h-screen p-8 text-neutral-300 ">
         <div className="card-container overflow-y-auto " style={{marginTop: "-10px"}}>
      <div className="container mx-auto">

        {/* Sección de Novedades */}
        <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-3 text-center ">Novedades</h2>

<div className="carousel w-full h-56">

  <div id="slide1" className="carousel-item relative w-full m-2 rounded-lg">
    <div className="bg-indigo-200 rounded-lg w-full h-full">
      <Link to="/novedades">
        <img src={imagenEventop} alt="Imagen de la novedad" className="w-full mb-5"  style={{height: "65%"}}/>
      </Link>
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
 
  
</div> 

</div>
    </div>
  );
}

export default Home;