import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HostContext } from "../App";
import axios from "axios";
import { UsuarioContext } from "../App";

function Categorias({cargarUsuario}) {
  const host = useContext(HostContext);
  const usuario = cargarUsuario(); //cargamoss usuario desde app.js (malapraxis pa)
  const [Categorias, setCategorias] = useState([]);
  const [CategoriaAgregar, setCategoriaAgregar] = useState([]);

  useEffect(() => {
    cargarCategorias();
    CargarCategoriasDeUsuario();
  }, []);

    const CargarCategoriasDeUsuario = () => {
      if (usuario) {
        const link = host + "/CategoriasDeUsuario/" + usuario.Id;
        axios
        .get(link)
        .then((result) => { 
          console.log(result.data)
          setCategoriaAgregar(result.data)
        })
      }
    }

  useEffect(() => {
    console.log("CategoriaAgregar ha cambiado:", CategoriaAgregar);
    if (CategoriaAgregar.length > 0){
      agregarCategorias();
    }
  }, [CategoriaAgregar]);

  const HandleAgregarCategoria = (id) => {
    if (CategoriaAgregar.includes(id)) {
      setCategoriaAgregar(CategoriaAgregar.filter((categoriaId) => categoriaId !== id));
      EliminarCategoria(id); //elimina categoria de DB cada vez q se vuelve a clickear
    } else if (CategoriaAgregar.length < 3) {
      setCategoriaAgregar([...CategoriaAgregar, id]);
    } 
    if (CategoriaAgregar.length == 3) {
      if (CategoriaAgregar.includes(id)) {
        setCategoriaAgregar(CategoriaAgregar.filter((categoriaId) => categoriaId !== id));
      } else{
      alert("Maximas Categorias Seleccionadas")
    }
    }
  }

  const EliminarCategoria = (id) => {
    axios
      .delete(`${host}/EliminarCategoria/${id}`, { data: { usuarioId: usuario.Id } })
      .then((response) => {
        console.log("Categoría eliminada con éxito");
      })
      .catch((error) => {
        console.error("Error al eliminar categoría:", error);
      });
  } 

  const agregarCategorias = () => {
    const data = {
      categorias: CategoriaAgregar,
      usuario: { Id: usuario.Id }
    };

    axios
      .post(host + "/AgregarCategorias", data)
      .then((Response) => {
        console.log("Categoría(s) agregada(s): " + Response.data);
      })
      .catch((error) => {
        console.error("Error al agregar categoría:", error);
        // Maneja errores aquí.
      });
  }


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
       <h2 className=" text-white font-bold text-2xl text-center py-6 bg-white bg-opacity-20 decoration-pink-500 ">Seleccione Sus Categorias</h2>
      <div className="nana-container overflow-y-scroll text-white">
       
        <div className="">
          <div
            className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8 "
            style={{ marginTop: "-30px" }}
          >
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xsm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {Categorias.map((categoria) => (
                <a key={categoria.IdCategoria} className="group">
                  <div
                    className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
                    onClick={() => HandleAgregarCategoria(categoria.IdCategoria)}
                  >
                    <img
                      src={categoria.Imagen}
                      className="h-40 w-full object-cover object-center group-hover:opacity-75"
                      
                    />
                  </div>
                  {CategoriaAgregar ? (
                    CategoriaAgregar.includes(categoria.IdCategoria) ? (
                      <h3 className="mt-2 text-sm font-bold text-red-600">
                        {categoria.NombreCategoria}
                      </h3>
                    ) : (
                      <h3 className="mt-2 text-sm font-bold">
                        {categoria.NombreCategoria}
                      </h3>
                    )
                  ) : (
                    <h3 className="mt-2 text-sm font-bold">
                      {categoria.NombreCategoria}
                    </h3>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categorias;