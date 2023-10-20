import React, { useContext, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { UsuarioContext } from "../App";

import HomeIcon from "../icons/Home.png";
import AmigosIcon from "../icons/Amigos.png";
import EntradaIcon from "../icons/Entrada.png";
import CalendarioIcon from "../icons/Calendario.png";



function NavBar({ cargarEventos }) {

    const usuario = useContext(UsuarioContext);
    const isMobile = window.innerWidth <= 768; // Define el ancho máximo para considerar como dispositivo móvil
    const handleHomeClick = () => {
        cargarEventos(); // Llama a la función cargarEventos pasada como prop
      };
    

  return (
    <div>

    <div className="fixed z-50 w-full h-14 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
    <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
          <button data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-l-full hover:bg-gray-100 dark:hover:bg-gray-800 group">
        <Link to="/" className="nav-link" >
          <svg className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-pink-400 dark:group-hover:text-pink-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 00 1.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
          </svg>
          <span className="sr-only">Home</span>
        </Link>
      </button>
      <div id="tooltip-home" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Home
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>

        <button data-tooltip-target="tooltip-wallet" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <Link to="/eventos" className="nav-link" onClick={handleHomeClick}>
        <svg className="w-6 h-6  text-gray-500 dark:text-gray-400 group-hover:text-pink-400 dark:group-hover:text-pink-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z"/>
           </svg>
            <span className="sr-only">Calendar</span>
            </Link>
        </button>
        <div id="tooltip-wallet" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Wallet
            <div className="tooltip-arrow " data-popper-arrow></div>
        </div>

        <div className="flex items-center justify-center">
            <button data-tooltip-target="tooltip-new" type="button" className="inline-flex items-center justify-center w-10 h-10 font-medium bg-pink-500 rounded-full hover:bg-pink-500 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
            <Link to="/CrearEvento" className="nav-link">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"></path>
                </svg>
                <span className="sr-only">New item</span>
            </Link>
            </button>
        </div>
        <div id="tooltip-new" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Create new item
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>


        <button data-tooltip-target="tooltip-entradas" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <Link to="/entradas" className="nav-link">
            <svg className="w-7 h-7 ml-1 mt-1 text-gray-500 dark:text-gray-400 group-hover:text-pink-400 dark:group-hover:text-pink-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6V4.5Zm4-1v1h1v-1H4Zm1 3v-1H4v1h1Zm7 0v-1h-1v1h1Zm-1-2h1v-1h-1v1Zm-6 3H4v1h1v-1Zm7 1v-1h-1v1h1Zm-7 1H4v1h1v-1Zm7 1v-1h-1v1h1Zm-8 1v1h1v-1H4Zm7 1h1v-1h-1v1Z"/>
            </svg>
            <span className="sr-only">Entradas</span>
        </Link>
        </button>
        <div id="tooltip-settings" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Settings
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
   
        <button data-tooltip-target="tooltip-profile" type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <Link to="/profile" className="nav-link">
            <svg className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-pink-400 dark:group-hover:text-pink-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"></path>
            </svg>
            <span className="sr-only">Profile</span>
        </Link>
        </button>
        <div id="tooltip-profile" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Profile
            <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
</div>

<div>
</div>
        
        </div>
  );
}

export default NavBar;