import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    cargarEventos();
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

  return (
    <div className="App">
      <br></br>
      <div id="eventos" class="row">
        {eventos.map((evento) => (
          <div key={evento.Id} className="col-3" style={{ margin: "10px"}}>
            <div className="card mb-4">
              <img src={evento.ImagenEvento} className="card-img-top img-fluid" alt="..."  /> 
              <div className="card-body">
                <h4 className="card-title">{evento.Nombre}</h4>
                <button /*onClick={() => MasInfo(evento.Id)}*/>Info</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;