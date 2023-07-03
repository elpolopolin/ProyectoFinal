import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import Eventos from "./components/Eventos.js";
import NavBar from "./components/NavBar";
import LogIn from "./components/LogIn";
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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [incorrecto, setIncorrecto] = useState("");
  const [userLogged, setUserLogged] = useState({});

  useEffect(() => {
    cargarEventos();
    cargarUsuarios();
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

  const handleLogin = () => {
    const foundUser = usuarios.find(
      (user) => user.NombreUsuario === username && user.Contrasena === password
    );
    if (foundUser) {
      setIsLoggedIn(true);
      setUserLogged(foundUser);
    } else {
      setIncorrecto("Usuario o Contraseña Incorrecta");
    }
  };

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ isLoggedIn, userLogged }}>
        <div className="font-sans px-8 flex justify-center items-center">
         
          {!isLoggedIn && (
            <div className="logIn">
              <LogIn
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
                onLogin={handleLogin}
                incorrecto={incorrecto}
              />
            </div>
          )}
          {isLoggedIn && (
            <div className="Home">
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