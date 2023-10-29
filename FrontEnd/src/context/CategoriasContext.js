
import React, { createContext, useState, useEffect, useContext  } from "react";
import axios from "axios";
import { UsuarioContext } from "../App";

export const CategoriasContext = createContext();

const CategoriasProvider = (props) => {

    const usuario = useContext(UsuarioContext);
  const [categories, setCategories] = useState([]);
    const link = "http://34.42.27.222:30001/EventosCategoriaUsuario/" + usuario.Id;
    
  useEffect(() => {
    axios
      .get(link)
      .then((result) => {
        setCategories(result.data);
      
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


    return (
        <CategoriasContext.Provider
          value={{
            categories,
          }}
        >
          {props.children}
        </CategoriasContext.Provider>
      );
  
};

export default CategoriasProvider;
