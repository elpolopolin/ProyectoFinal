import React, { useState } from "react";
import Logo from "../icons/Logo.png";
import { Button, Modal } from "react-bootstrap";

function LogIn({ username, password, setUsername, setPassword, onLogin, incorrecto }) {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [usernameError, setUsernameError] = useState(false);

  const handleLogin = () => {
    onLogin();
  };
  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
    
  };
  const handleUsernameChange2 = (event) => {
    const value = event.target.value;
    setUsername(value);
    setUsernameError(value.includes(" "));
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleRegisterClick = () => {
    setShowRegisterModal(true);
  };
  const closeRegisterModal = () => {
    setShowRegisterModal(false);
  };

  return (
    <div className="container">
      <center>
        <div className="lej">
          <img src={Logo} className="Logo" alt="Logo" />

          <input
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
          <a className="underline" onClick={handleRegisterClick}>
            Registrarte
          </a>
        </p>

        <Modal show={showRegisterModal} onHide={closeRegisterModal}>
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
                  value={username}
                />
                {usernameError && <span className="error-message">El nombre de usuario no puede contener espacios.</span>}
              </p>
              <p className="form-group text-form-group">
                Nombre: <input className="form-control" />
              </p>
              <p className="form-group text-form-group">
                Apellido: <input className="form-control" />
              </p>
              <p className="form-group text-form-group">
                Nacimiento: <input type="date" className="form-control" />
              </p>
              <p className="form-group text-form-group">
                Dirección: <input className="form-control" />
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary">Registrar</Button>
          </Modal.Footer>
        </Modal>
      </center>
    </div>
  );
}

export default LogIn;