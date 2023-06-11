import React from "react";

function NavBar() {
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-white">
        <div className="">
          <ul className="navbar-nav flex-row ">
            <li className="nav-item col-3">
              <a href="/" className="nav-link">
                <i className="fas fa-home"></i> Home
              </a>
            </li>
            <li className="nav-item col-5">
              <a href="/friends" className="nav-link">
                <i className="fas fa-users"></i> Friends
              </a>
            </li>
            <li className="nav-item col-5">
              <a href="/profile" className="nav-link">
                <i className="fas fa-user"></i> Perfil
              </a>
            </li>
            <li className="nav-item col-5">
              <a href="/posts" className="nav-link">
                <i className="fas fa-file-alt"></i> Entradas
              </a>
            </li>
            <li className="nav-item col-5">
              <a href="/calendar" className="nav-link">
                <i className="fas fa-calendar-alt"></i> Calendario
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;