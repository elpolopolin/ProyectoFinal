import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import Eventos from "./components/Eventos.js";
import NavBar from "./components/NavBar";
import Logo from "./icons/Logo.png";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Friends from "./components/Friends";
import Profile from "./components/Profile";
import Calendar from "./components/Calendar";
import Entradas from "./components/Entradas";

export const AuthContext = createContext();

function App() {
  const [eventos, setEventos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [body, setBody] = useState({ username: '', password: '' })
  const [incorrecto, setIncorrecto] = useState("");
  const [userLogged, setUserLogged] = useState({});

  useEffect(() => {
    cargarEventos();


    const token = localStorage.getItem('auth');// Verificar si existe un token de autenticación en el almacenamiento local
    const userJson = localStorage.getItem('userLogged');
    const user = JSON.parse(userJson);

    if (token && user != null) {
      setIsLoggedIn(true);
      setUserLogged(user);
    }

    //localStorage.clear();
    
    
  }, []);

  const cargarEventos = () => {
    axios
      .get("http://localhost:3000/getAll")
      .then((result) => {
        const events = result.data;
        setEventos(events);
      })
      .catch((error) => {
        console.log(error);
      });
     
  };

  const cargarUsuarios = () => {
    axios
      .get("http://localhost:3000/usuarios/getAll")
      .then((result) => {
        const users = result.data;
        setUsuarios(users);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const inputChange = ({ target }) => {
    const { name, value } = target
    setBody({
        ...body,
        [name]: value
    }) }

    const onSubmit = (event) => {
      event.preventDefault();
      axios.post('http://localhost:3000/usuarios/login', body)
      .then((result) => {
       
      localStorage.setItem('auth', 'yes'); // Guardar el token en el almacenamiento local
      localStorage.setItem('userLogged', JSON.stringify(result.data))
      window.location.reload(false)
      })
      .catch(({ response }) => {
      console.log(response)
      })
    }
  

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ isLoggedIn, userLogged }}>
        <div className="bg-[#252525] w-full min-h-screen font-sans px-6  justify-center items-center">
         
          {!isLoggedIn && (
            <div className="logIn">
              <div className="my-8">
              <form onSubmit={onSubmit}>
                <img src={Logo} className="Logo" alt="Logo" />
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

            </form>
            <p className=" text-pink-500 mt-2" >
              {incorrecto}
            </p>
            
            <br />
            <p className="text-pink-200 text-center" >
              ¿Aún no tienes una cuenta?{" "}
              <a className="underline cursor-pointer">
                Registrarte
              </a>
            </p>
        </div>
            </div>
          )}

          {isLoggedIn && (
            <div className="Home">
           
              <h1 className="text-white">hola {userLogged.NombreUsuario}</h1>
              <Routes>
                <Route path="/" element={<Eventos eventos={eventos} />} />
                <Route path="/friends" element={<Friends />} />
                <Route path="/profile" element={<Profile usuario={userLogged}/>} />
                <Route path="/entradas" element={<Entradas />} />
                <Route path="/calendar" element={<Calendar />} />
              </Routes>

              <div className="bottom-navbar">
                <NavBar usuario={userLogged} />
              </div>
            </div>
          )}
        </div>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;