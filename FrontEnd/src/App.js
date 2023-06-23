import React, { createContext, useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import Eventos from "./components/Eventos.js";
import NavBar from "./components/NavBar";
import LogIn from "./components/LogIn";

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
    <AuthContext.Provider value={{ isLoggedIn, userLogged }}>
      <div className="App container">
        <br />
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
            <Eventos eventos={eventos} />
            <div className="bottom-navbar">
              <NavBar usuario={userLogged}></NavBar>
            </div>
          </div>
        )}
      </div>
    </AuthContext.Provider>
  );
}

export default App;