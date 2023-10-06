import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HostContext } from "../App";
import axios from "axios";

function Categorias() {
    const host = useContext(HostContext);
    const [Categorias, setCategorias] = useState([])
    useEffect(() => {
        cargarCategorias();
      }, []);
    
      const cargarCategorias = () => {
        axios
          .get(host + "/Categorias")
          .then((result) => {
            const cat = result.data;
            setCategorias(cat);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    return (
        <div className="">
             <div className="nana-container overflow-y-scroll text-white">
             <h2 className="font-bold text-2xl text-center py-8">Categorias</h2>
        <div className=""> 
            <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8 ">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xsm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {Categorias.map((categoria) => (
            <a key={categoria.IdCategoria} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={categoria.Imagen}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm ">{categoria.NombreCategoria}</h3>
             
            </a>
          ))}
        </div>
      </div>
        </div>

        </div>
        </div>
    )
}

export default Categorias;