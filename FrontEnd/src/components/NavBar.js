import React from "react";
import HomeIcon from "../icons/Home.png";
import AmigosIcon from "../icons/Amigos.png";
import EntradaIcon from "../icons/Entrada.png";
import CalendarioIcon from "../icons/Calendario.png";

function NavBar({usuario}) {
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-white">
        <div className="">
          <ul className="navbar-nav flex-row ">
            <li className="nav-item col-3">
              <a href="/" className="nav-link">
                <i className="fas fa-home"></i> <img src={HomeIcon} className="fotoHome"></img>
              </a>
            </li>
            <li className="nav-item ">
              <a href="/friends" className="nav-link">
                <i className="fas fa-users"></i> <img src={AmigosIcon} className="fotoAmigos"></img>
              </a>
            </li>
            <li className="nav-item ">
              <a href="/profile" className="nav-link">
                <i className="fas fa-user"></i> <img src={usuario.FotoPerfil} className="fotoPerfil"></img>
              </a>
            </li>
            <li className="nav-item ">
              <a href="/posts" className="nav-link">
                <i className="fas fa-file-alt"></i> <img src={EntradaIcon} className="fotoEntrada"></img>
              </a>
            </li>
            <li className="nav-item ">
              <a href="/calendar" className="nav-link">
                <i className="fas fa-calendar-alt"></i> <img src={CalendarioIcon} className="fotoCalendario"></img>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;