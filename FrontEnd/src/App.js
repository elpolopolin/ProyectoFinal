import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import Eventos from "./components/Eventos.js";
import NavBar from "./components/NavBar";
import Logo from "./icons/Logo.png";
import Registrarse from "./components/Registrarse.js";
import { Link, BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Friends from "./components/Friends";
import Profile from "./components/Profile";
import Calendar from "./components/EventosUsuario.js";
import Entradas from "./components/MisEventos";
import MostrarEvento from "./components/MostrarEvento";
import CrearEvento from "./components/CrearEvento.js"
import Comprar from "./components/comprar";
import CategoriasProvider from './context/CategoriasContext';
import Comentarios from "./components/comentarios.js";
import QrScanner from "./components/QrScanner.jsx";
import Home from "./components/Home.js";
import Categorias from "./components/Categorias.js";
import EventosDeUsuario from "./components/EventosUsuario.js";
import VerXcategoria from "./components/verXcategoria.js";

import Index from "./components/Index.js";

export const UsuarioContext = createContext();
export const HostContext = createContext(); 

const host = "http://34.42.27.222:30001"; //en ort cambiar ip por localhost..

function App() {
  const [eventos, setEventos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [body, setBody] = useState(() => {
    const storedBody = localStorage.getItem('body');
    return storedBody ? JSON.parse(storedBody) : { username: '', password: '' };
  });
  const [incorrecto, setIncorrecto] = useState("");
  const [userLogged, setUserLogged] = useState({});
  const [participantes, setParticipantes] = useState({});
  const isMobile = window.innerWidth <= 768;


  useEffect(() => {
    cargarEventos();

      const token = localStorage.getItem('auth');
      const userJson = localStorage.getItem('userLogged');
     
        if (token && userJson != null) {
          const user = JSON.parse(userJson);
          setIsLoggedIn(true);
          cargarUsuarioId(user);
   
        } else {
          setIsLoggedIn(false);
          setUserLogged({});
        }
      
        checkPasswordChange();
       //localStorage.clear();
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



  function cargarUsuario() {
    const token = localStorage.getItem('auth');
    const userJson = localStorage.getItem('userLogged');
  
    if (token && userJson != null) {
      const user = JSON.parse(userJson);
      return user;
    } else {
      return null;
    }
  }
  

  const cargarUsuarioId = async (user) => {
    const link = host + "/usuarios/getbyid/" + user.Id;
    console.log(link);
    axios
      .get(link)
      .then((result) => {
        setUserLogged(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };



  const inputChange = ({ target }) => {
    const { name, value } = target;
    setBody({
      ...body,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    axios.post(host + '/usuarios/login', body)
      .then((result) => {
        const user = result.data;
        setIsLoggedIn(true);
        setUserLogged(user);
        localStorage.setItem('auth', 'yes');
        localStorage.setItem('userLogged', JSON.stringify(user));
        localStorage.setItem('body', JSON.stringify(body));
      })
      .catch(({ response }) => {
        setIncorrecto("Usuario o contraseña incorrecto");
      });
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserLogged({});
    localStorage.removeItem('auth');
    localStorage.removeItem('userLogged');
    localStorage.removeItem('body');
  };

  const checkPasswordChange = () => {
    const storedBody = localStorage.getItem('body');
    if (storedBody) {
        const storedCredentials = JSON.parse(storedBody);
        axios.post(host + '/usuarios/login', body)
        .then((result) => {

        
      })
      .catch(({ response }) => {
        logout();
        window.location.reload(false)
      });

      }

    }
  



  return (
    <HostContext.Provider value={host}> 
    <BrowserRouter>
      <Routes>
        <Route path="/Registrarse" element={<Registrarse />} />
      </Routes>
    
      <div className="bg-[#252525] w-full min-h-screen font-sans justify-items-center">
        {!isLoggedIn && (
          <div className="logIn p-10">
            <center>
              <form onSubmit={onSubmit}>
                <div className="">
                  <br></br>
                  <img src={Logo} className="Logo mt-3" alt="Logo" />
                  <div className="my-4">
                    <input
                      id="nombreUsuario"
                      name="username"
                      type="text"
                      value={body.username}
                      className="input input-bordered w-full max-w mb-4 h-9 bg-pink-300 text-white"
                      onChange={inputChange}
                      placeholder="Nombre de usuario"
                    />
                    <br />
                    <input
                      type="password"
                      name="password"
                      value={body.password}
                      className="input input-bordered w-full max-w bg-pink-300 text-white h-9"
                      onChange={inputChange}
                      placeholder="Contraseña"
                    />
                  </div>
                  <button className="btn btn-outline  btn-wide text-pink-200" type="submit">
                    Iniciar sesión
                  </button>
                </div>
              </form>
              <p className="text-pink-500 mt-10">
                {incorrecto}
              </p>
              <p className="absolute bottom-0 left-0 right-0 text-pink-200 text-center mb-10">
                ¿Aún no tienes una cuenta?{" "}
                <Link to="/Registrarse" className="underline cursor-pointer">
                  Registrarte
                </Link>
              </p>
            </center>
          </div>
        )}

        {isLoggedIn && (
          <UsuarioContext.Provider value={userLogged}> 
          <CategoriasProvider>
          <div className="Home">
          {isMobile ? (
            <div className="bottom-navbar">
            <NavBar cargarEventos={cargarEventos} />
            </div>
            ) : ( //pc
            <div className="">
              <NavBar cargarEventos={cargarEventos} />
            </div>
            )}
            <Routes>
            <Route path="/"  element={<Index />}/>
              <Route path="/eventos" element={<Eventos eventos={eventos} />} />
              <Route path="/Categoria/:id" element={<VerXcategoria cargarUsuario={cargarUsuario}/>} />
              <Route path="/index" element={<Index />} />
              <Route path="/categorias" element={<Categorias cargarUsuario={cargarUsuario}/>} />
              <Route path="/eventos/VerEvento/:id" element={<MostrarEventoWrapper eventos={eventos} participantes={participantes} />} />
              <Route path="/CrearEvento" element={<CrearEvento cargarUsuario={cargarUsuario}/>} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/profile" element={<Profile logout={logout} cargarUsuario={cargarUsuario} />} />
              <Route path="/entradas" element={<Entradas />} />
              <Route path="/EventosUsuario" element={<EventosDeUsuario cargarUsuario={cargarUsuario}/>} />
              <Route path="/comprar/evento/:id" element={<Comprar />} />
              <Route path="/comentarios/:id" element={<Comentarios />}  />
              <Route path="/QrScanner" element={<QrScanner />}  />
              <Route path="*" element={<h1 className="text-white">Error</h1>}  />
            </Routes>

           

          </div>
          </CategoriasProvider>
        </UsuarioContext.Provider>
        )}
      </div>
    
  </BrowserRouter>
  </HostContext.Provider>
  );
}

//link para ver eventos LOGICA

const cargarEventoMostrar = async (idEvento) => {
  let link = host + "/getbyidEvento/"; 
  link += idEvento;
  
  try {
    const result = await axios.get(link);
    const evento = result.data;
    return evento;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const cargarParticipantes = async (idEvento) => {
  let link = host + "/getById/"; 
  link += idEvento;
  
  try {
    const result = await axios.get(link);
    const participantesEvento = result.data;
    return participantesEvento;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

function MostrarEventoWrapper() {
  const { id } = useParams();
  const idd = parseInt(id); // Cambié let a const
  
  const [eventoMostrar, setEventoMostrar] = useState({}); // Definimos eventoMostrar
  const [participantesEvento, setParticipantesEvento] = useState({});
  
  useEffect(() => {
    const cargarDatos = async () => {
      const evento = await cargarEventoMostrar(idd);
      const participantesCargados = await cargarParticipantes(evento.Id);
      setEventoMostrar(evento); // Actualizamos eventoMostrar
      setParticipantesEvento(participantesCargados);
    };

    cargarDatos();
  }, [idd]);

  

  return (
    <MostrarEvento evento={eventoMostrar} participantesEvento={participantesEvento} />
  );
}


//

export default App;