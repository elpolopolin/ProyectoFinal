import React from "react";
import { Link } from 'react-router-dom';
import HomeIcon from "../icons/Home.png";
import AmigosIcon from "../icons/Amigos.png";
import EntradaIcon from "../icons/Entrada.png";
import CalendarioIcon from "../icons/Calendario.png";

function NavBar({ usuario }) {
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-white">
        <div className="">
          <ul className="navbar-nav flex-row ">
            <li className="nav-item col-3">
              <Link to="/" className="nav-link">
                <i className="fas fa-home"></i> <img src={HomeIcon} className="fotoHome"></img>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/friends" className="nav-link">
                <i className="fas fa-users"></i> <img src={AmigosIcon} className="fotoAmigos"></img>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                <i className="fas fa-user"></i> <img src={usuario.FotoPerfil} className="fotoPerfil"></img>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/entradas" className="nav-link">
                <i className="fas fa-file-alt"></i> <img src={EntradaIcon} className="fotoEntrada"></img>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/calendar" className="nav-link">
                <i className="fas fa-calendar-alt"></i> <img src={CalendarioIcon} className="fotoCalendario"></img>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;