import React, {  useContext ,useState, useEffect } from "react";
import axios from "axios";
import { UsuarioContext, HostContext } from "../App";
import MostrarEvento from "./MostrarEvento";
import { Link } from "react-router-dom";


function MisEventos() {
  const [eventosIds, setEventosIds] = useState([]);
  const [eventos, setEventos] = useState([]);
  const [eventosPasados, setEventosPasados] = useState([]);
  const [cargandoEventos, setCargandoEventos] = useState(true); // Estado para controlar la carga de eventos
  const host = useContext(HostContext);
  const usuario = useContext(UsuarioContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [qrImage, setQrImage] = useState(null);
  const [mostrarEventosPasados, setMostrarEventosPasados] = useState(false);

  const abrirModal = (evento) => {
    setQrImage(evento.QrCode);
    setModalVisible(true);
    
  };
  const cerrarModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    cargarEventosIds();
  }, []);

  const cargarEventosIds = () => {
    const link = host + "/usuarios/EventosXUser/" + usuario.Id;
    axios
      .get(link)
      .then((result) => {
        const idEventos = result.data;
        
        setEventosIds(result.data);
        cargarEventos(idEventos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formatDateDDMMYY = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const cargarEventos = (eventosIds) => {

    if (eventosIds.length === 0) {
      console.log("No hay eventos para cargar.");
      setCargandoEventos(false); // Actualiza el estado cuando se completó la carga de eventos
      return;
    }

    const linkBase = host + "/getbyidEvento/";

    const obtenerDatosEventos = async () => {
      const eventosPromises = eventosIds.map(async (eventoId) => {
        const response = await axios.get(linkBase + eventoId.IdEvento);
        const eventoData = response.data;
        //console.log(response.data)
        eventoData.QrCode = eventoId.QrImage;
        return eventoData;
      });
    
      const datosEventos = await Promise.all(eventosPromises);
    

      const fechaActual = new Date();
    
          const eventosFuturos = datosEventos.filter((evento) => new Date(evento.Fecha) >= fechaActual);
    const eventosPasados = datosEventos.filter((evento) => new Date(evento.Fecha) < fechaActual);

    eventosFuturos.sort((a, b) => new Date(a.Fecha) - new Date(b.Fecha));
    eventosPasados.sort((a, b) => new Date(b.Fecha) - new Date(a.Fecha));
    

      setEventos(eventosFuturos);
      setEventosPasados(eventosPasados);
      setCargandoEventos(false);
    };
    
    obtenerDatosEventos().catch((error) => {
      console.log(error);
      setCargandoEventos(false); 
    });
  }

  // Verifica si aún se están cargando los eventos
  if (cargandoEventos) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-white font-bold text-center">Loading...</div>
      </div>
    );
  }



  // Muestra los eventos una vez que se hayan cargado
  return (
        <div className=" p-10">
          <div className="nana-container overflow-y-auto">
          <div className="flex text-white text-4xl font-bold text-center mb-8 justify-center">
          <h1
            className={`cursor-pointer ${!mostrarEventosPasados ? 'text-green-300' : ''}`}
            onClick={() => setMostrarEventosPasados(false)}
          >
            Eventos
          </h1>
          <h1>/</h1>
          <h1
            className={`cursor-pointer ${!mostrarEventosPasados ? '' : 'text-green-300'}`}
            onClick={() => setMostrarEventosPasados(true)}
          >
            Pasados
          </h1>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {eventos.length === 0 ? (
            <p className="text-white text-center">No formas parte de ningún evento...</p>
          ) : mostrarEventosPasados ? (
            eventosPasados.map((evento) => (
              <div
                key={evento.Id}
                className="rounded-lg shadow-md bg-white text-black cursor-pointer hover:shadow-lg"
              >
                {evento.ImagenEvento && (
                  <figure className="h-40">
                    <img
                      src={evento.ImagenEvento}
                      alt="..."
                      className="h-full w-full object-cover"
                    />
                  </figure>
                )}
                <div className="p-4">
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-lg mb-2">{evento.Nombre}</h4>
                    <p className="semi-bold">{formatDateDDMMYY(evento.Fecha)}</p>
                  </div>
                  <div className="flex justify-between">
                    <button
                      onClick={() => abrirModal(evento)}
                      className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg"
                    >
                      Código QR
                    </button>
                    <Link
                      key={evento.Id}
                      to={`/eventos/VerEvento/${evento.Id}`}
                      className="cursor-pointer"
                    >
                      <button className="bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-lg">
                        Ver Más
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            eventos.map((evento) => (
              <div
                key={evento.Id}
                className="rounded-lg shadow-md bg-white text-black cursor-pointer hover:shadow-lg"
              >
                {evento.ImagenEvento && (
                  <figure className="h-40">
                    <img
                      src={evento.ImagenEvento}
                      alt="..."
                      className="h-full w-full object-cover"
                    />
                  </figure>
                )}
                <div className="p-4">
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-lg mb-2">{evento.Nombre}</h4>
                    <p className="semi-bold">{formatDateDDMMYY(evento.Fecha)}</p>
                  </div>
                  <div className="flex justify-between">
                    <button
                      onClick={() => abrirModal(evento)}
                      className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg"
                    >
                      Código QR
                    </button>
                    <Link
                      key={evento.Id}
                      to={`/eventos/VerEvento/${evento.Id}`}
                      className="cursor-pointer"
                    >
                      <button className="bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-lg">
                        Ver Más
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
          </div>
        </div>
       {/* Modal */} 
       {modalVisible && (
         <div>
         <div className="overlay"></div>
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="modal-container ">
      {/* Contenido del modal */}
      <div className="bg-white p-4">
        {/* Muestra la imagen del código QR */}
        {qrImage && <img src={qrImage} className="p-5 bg-black" alt="Código QR" />}
        <button
          onClick={cerrarModal}
          className="bg-pink-500 hover:bg-red-200 text-white py-2 px-4 rounded-lg mt-4 "
        >
          Cerrar
        </button>
      </div>
    </div>
  </div>
  </div>
)}

      </div>
    );
   }

export default MisEventos;