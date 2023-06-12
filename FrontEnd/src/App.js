import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Eventos from "./components/Eventos.js";
import NavBar from "./components/NavBar";


function App() {

  const appStyle = {
    backgroundColor: "rgba(37, 37, 37, 1)",
    
  };
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
    <div className="App container" style={appStyle}>
      <br />
      

      <Eventos eventos={eventos}/>
      
      
      
      <NavBar></NavBar>
     
      
    </div>

  );
}

export default App;