import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import Eventos from "./components/Eventos.js";
import NavBar from "./components/NavBar";
import Logo from "./icons/Logo.png";
import Registrarse from "./components/Registrarse.js";
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import Friends from "./components/Friends";
import Profile from "./components/Profile";
import Calendar from "./components/Calendar";
import Entradas from "./components/Entradas";

export const AuthContext = createContext();

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

  const cargarUsuarioId = async (user) => {
    const link = "http://localhost:3000/usuarios/getbyid/" + user.Id;
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
    axios.post('http://localhost:3000/usuarios/login', body)
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
        axios.post('http://localhost:3000/usuarios/login', body)
        .then((result) => {

        
      })
      .catch(({ response }) => {
        logout();
        window.location.reload(false)
      });

      }

    }
  



  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Registrarse" element={<Registrarse />} />
    </Routes>
    <AuthContext.Provider value={{ isLoggedIn, userLogged }}>
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
          <div className="Home">
            <Routes>
              <Route path="/" element={<Eventos eventos={eventos} />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/profile" element={<Profile usuario={userLogged} logout={logout}/>} />
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