import React from "react";
import { Link } from 'react-router-dom';
import HomeIcon from "../icons/Home.png";
import AmigosIcon from "../icons/Amigos.png";
import EntradaIcon from "../icons/Entrada.png";
import CalendarioIcon from "../icons/Calendario.png";

function NavBar({ usuario }) {
  return (
    <div class="btm-nav">
  <button>
  <Link to="/" className="nav-link">
  <img src = {HomeIcon} class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"></img>
    </Link>
  </button>

  <button class="active">
  <Link to="/friends" className="nav-link">
    <img src = {AmigosIcon} class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"></img>
  </Link>
  </button>

  <button class="active">
  <Link to="/profile" className="nav-link">
    <img src = {usuario.FotoPerfil} class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"></img>
  </Link>
  </button>

  <button class="active">
  <Link to="/entradas" className="nav-link">
    <img src = {EntradaIcon} class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"></img>
  </Link>
  </button>

  <button>
  <Link to="/calendar" className="nav-link">
  <img src = {CalendarioIcon} class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"></img>
  </Link>
  </button>
</div>
  );
}

export default NavBar;