import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  let eventos = [];
  const CargarEventos = function () {
    axios
      .get("http://localhost:3000/getAll")
      .then((result) => {
        const events = result.data;
        events.map((event) => 
          eventos.push(event)
        );
      })
      .catch((error) => {
        console.log(error);
      });
      console.log(eventos)
  };
  return (
    <div className="App">
      <button onClick={() => CargarEventos()}> Cargar Eventos </button>
    </div>
  );
}

export default App;
