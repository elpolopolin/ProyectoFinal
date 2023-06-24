import React, { useState } from "react";
import Logo from "../icons/Logo.png";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";

function LogIn({ username, password, setUsername, setPassword, onLogin, incorrecto }) {

  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [usernameError, setUsernameError] = useState(false);

  const [usuarioRegistrar, setUsuarioRegistrar] = useState({
    nombreUsuario: "",
    contrasena: "",
    nombre: "",
    apellido: "",
    nacimiento: "",
    genero: "",
    fechaCreacion: new Date(),
    direccion: "",
    fotoPerfil: ""
  });

  const handleLogin = () => {
    onLogin();
  };

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handleUsernameChange2 = (event) => {
    const value = event.target.value;
    setUsuarioRegistrar(prevState => ({
      ...prevState,
      usernameRegistro: value
    }));
    setUsername(value);
    setUsernameError(value.includes(" "));
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const openRegisterModal = () => {
    setShowRegisterModal(true);
  };

  const closeRegisterModal = () => {
    setShowRegisterModal(false);
   
  };

  const handleRegister = () => {
    const usuarioo = document.getElementById("nombreUsuario").value;
    const contrasenaa = document.getElementById("contraseña").value;
    const nombree = document.getElementById("Nombre").value;
    const apellidoo = document.getElementById("apellido").value;
    const nacimientoo = document.getElementById("Nacimiento").value;
    const direccionn = document.getElementById("Direccion").value;
    setShowRegisterModal(false);
   
    setUsuarioRegistrar({
      NombreUsuario: usuarioo,
      Contraseña: contrasenaa,
      Nombre: nombree,
      Apellido: apellidoo,
      FechaNacimiento: nacimientoo,
      genero: "",
      FechaCreacion: new Date(),
      Descripcion: "",
      Direccion: direccionn,
      FotoPerfil: ""
    });
   
    axios 
      .post("http://localhost:3000/usuarios/insert/", usuarioRegistrar)
      .then ((result) => {
        console.log(usuarioRegistrar)   
    })
    .catch((error) => {
        console.log(error);
    })

  };

  return (
    <div className="container">
      <center>
        <div className="lej">
          <img src={Logo} className="Logo" alt="Logo" />

          <input id="nombreUsuario"
            type="text"
            value={username}
            className="inputt"
            onChange={handleUsernameChange}
            placeholder="Nombre de usuario"
          />
          
          <br />
          <input
            type="password"
            value={password}
            className="inputt"
            onChange={handlePasswordChange}
            placeholder="Contraseña"
          />
        </div>
        <br />
        <button onClick={handleLogin}>Iniciar sesión</button>
      
        <p className="text-danger" style={{marginTop: "10px"}}>{incorrecto}</p>
        <br />
        <p className="text-white">
          ¿Aún no tienes una cuenta?{" "}
          <a className="underline" onClick={openRegisterModal}>
            Registrarte
          </a>
        </p>

        <Modal show={showRegisterModal} onHide={closeRegisterModal} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Registrarse</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <p className="form-group text-form-group">
                Nombre De Usuario:{" "}
                <input
                  className="form-control"
                  onChange={handleUsernameChange2}
                  value={usuarioRegistrar.usernameRegistro}
                />
                {usernameError && <span className="error-message">El nombre de usuario no puede contener espacios.</span>}
              </p>
              
              <p className="form-group text-form-group">
                Contraseña: <input className="form-control" type="password" id="contraseña"/>
              </p>
              <p className="form-group text-form-group">
                Nombre: <input className="form-control" id="Nombre"/>
              </p>
              <p className="form-group text-form-group">
                Apellido: <input className="form-control" id="apellido" />
              </p>
              <p className="form-group text-form-group">
                Nacimiento: <input type="date" className="form-control" id="Nacimiento"/>
              </p>
              <p className="form-group text-form-group">
                Dirección: <input className="form-control" id="Direccion"/>
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleRegister}>Registrar</Button>
          </Modal.Footer>
        </Modal>
      </center>
    </div>
  );
}

export default LogIn;