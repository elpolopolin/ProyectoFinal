import React, { useState } from "react";
import Logo from "../icons/Logo.png";
import RegisterModal from "./RegisterModal";

function LogIn({ username, password, setUsername, setPassword, onLogin, incorrecto }) {
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleLogin = () => {
    onLogin();
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
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
        <p className="text-danger">{incorrecto}</p>
        <br />
        <p className="text-white">
          ¿Aún no tienes una cuenta?{" "}
          <a className="underline" onClick={() => handleRegisterClick()}>
            Registrarte
          </a>
        </p>
      </center>

      {showRegisterModal && 
      <RegisterModal closeModal={closeRegisterModal} />}
    </div>
  );
}

export default LogIn;