import React, { useState } from "react";
import Logo from "../icons/Logo.png";
import axios from "axios";

function LogIn({ username, password, setUsername, setPassword, onLogin, incorrecto }) {
  const [showRegisterPage, setShowRegisterPage] = useState(false);
  const [usernameError, setUsernameError] = useState(false);

  const [usuarioRegistrar, setUsuarioRegistrar] = useState({
    nombreUsuario: "",  contrasena: "", nombre: "", apellido: "", nacimiento: "", genero: "", fechaCreacion: new Date(),  direccion: "",  fotoPerfil: ""
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
    setUsuarioRegistrar((prevState) => ({
      ...prevState,
      usernameRegistro: value
    }));
    setUsername(value);
    setUsernameError(value.includes(" "));
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const openRegisterPage = () => {
    setShowRegisterPage(true);
  };

  const closeRegisterPage = () => {
    setShowRegisterPage(false);
  };

  const handleRegister = () => {
    const usuarioo = document.getElementById("nombreUsuario").value;
    const contrasenaa = document.getElementById("contraseña").value;
    const nombree = document.getElementById("Nombre").value;
    const apellidoo = document.getElementById("apellido").value;
    const nacimientoo = document.getElementById("Nacimiento").value;
    const direccionn = document.getElementById("Direccion").value;
    setShowRegisterPage(false);

    const nuevoUsuario = {
      NombreUsuario: usuarioo,
      Contrasena: contrasenaa,
      Nombre: nombree,
      Apellido: apellidoo,
      FechaNacimiento: nacimientoo,
      genero: "",
      FechaCreacion: new Date(),
      Descripcion: "",
      Direccion: direccionn,
      FotoPerfil: ""
      //falta ingresar foto de perfil del usuario
    };

    axios
      .post("http://localhost:3000/usuarios/insert/", nuevoUsuario)
      .then((response) => {
        console.log(response.data); // Puedes acceder a la respuesta del servidor aquí
        setUsuarioRegistrar(nuevoUsuario);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const RegisterPage = () => (

    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img className="mx-auto h-10 w-auto" src="" />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
        Registrarse
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
        <div className="flex flex-col">
          <label htmlFor="NombreUsuario" className="text-sm font-large leading-6 ">
            Nombre Usuario
          </label>
          <div className="mt-2">
            <input
              id="usernameRegistro"
              name="username"
              type="text"
              required
              onChange={handleUsernameChange2}
              value={usuarioRegistrar.usernameRegistro}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm font-large leading-6 text-white">
            Password
          </label>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
);

  return (
    <div className="container">
        <center>
    {!showRegisterPage &&
      <div>
        <div className="my-20">
          <img src={Logo} className="Logo" alt="Logo" />
          <div className="my-4">
          <input
            id="nombreUsuario"
            type="text"
            value={username}
            className="input input-bordered w-full max-w mb-6"
            onChange={handleUsernameChange}
            placeholder="Nombre de usuario"
          />

          <br />
          <input
            type="password"
            value={password}
            className="input input-bordered w-full max-w "
            onChange={handlePasswordChange}
            placeholder="Contraseña"
          />
          </div>
        </div>
        <br />
        <button className="btn btn-outline btn-wide" onClick={handleLogin}>
          Iniciar sesión
        </button>

        <p className="text-danger" style={{ marginTop: "10px" }}>
          {incorrecto}
        </p>
        <br />
        <p className="text-white">
          ¿Olvidaste tu contraseña?{" "}
          <a className="underline cursor-pointer" onClick={openRegisterPage}>
            Restablecer
          </a>
        </p>

        
        <br />
        <p className="text-black">
          ¿Aún no tienes una cuenta?{" "}
          <a className="underline cursor-pointer" onClick={openRegisterPage}>
            Registrarte
          </a>
        </p>

        </div>
    }

        {showRegisterPage && <RegisterPage />}
      </center>
    </div>
  );
}

export default LogIn;