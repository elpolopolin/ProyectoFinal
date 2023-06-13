import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Eventos from "./components/Eventos.js";
import NavBar from "./components/NavBar";
import LogIn from "./components/LogIn";

function App() {
  const [eventos, setEventos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar si el usuario ha iniciado sesión
  const [username, setUsername] = useState(""); // Estado para almacenar el nombre de usuario
  const [password, setPassword] = useState(""); // Estado para almacenar la contraseña
  const [incorrecto, setIncorrecto] = useState("");
  const [UserLogged, setUserLogged] = useState({});

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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEventos = eventos.filter((evento) => {
    return evento.Nombre.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleLogin = () => {
    
    const foundUser = usuarios.find(
      (user) => user.NombreUsuario === username && user.Contrasena === password
    );
    if (foundUser) {
      setIsLoggedIn(true);
     setUserLogged(foundUser);
     
    }
    else{
      setIncorrecto("Usuario o Contraseña Incorrecta");
    }
    
  };

  return (
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
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Buscar eventos por nombre"
              />

              <div className="eventos-container">
                <Eventos eventos={filteredEventos} />
              </div>

              <div className="bottom-navbar">
                <NavBar usuario={UserLogged}></NavBar>
              </div>
          </div>
      
      )}

  </div>
  );
}

export default App;