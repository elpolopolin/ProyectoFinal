import { Router } from "express";
import Evento from "./../models/evento.js";
import EventoService from "./../services/evento-service.js"
const router = Router();
const svc = new EventoService();



router.get('/getAll', async (req, res) => {
    console.log("Estoy en EventoController");
    let resultado = await svc.getAll();
    return res.status(200).json(resultado);
    console.log(resultado);
  })

  router.get('/Categorias', async (req, res) => {
    console.log("Estoy en eventoControllerCategorias");
    let resultado = await svc.Categorias();
    return res.status(200).json(resultado);
   
  })

  router.get('/getbyid/:id', async (req, res) => {
    try {
      let resultado = await svc.getById(req.params.id);
      return res.status(200).json(resultado);
      console.log(resultado);
    } catch (res) {
      console.log(error);
    }
     
    })

    router.get('/AsistentesXEvento', async (req, res) => {
      try {
        let resultado = await svc.AsistentesXEvento();
        return res.status(200).json(resultado);
        
      } catch (error) {
        console.log(error);
      }
       
      })

    router.post('/insert', async (req, res) => {

      let resultado = null;
         let evento = new Evento ();
         evento.nombre = req.body.Nombre;
         evento.fecha = req.body.Fecha;
         evento.precio = req.body.Precio;
         evento.participantes = req.body.Participantes;
         evento.descripcion = req.body.Descripcion;
         evento.direccion = req.body.Direccion;
         evento.publico = req.body.Publico;
         evento.edadMinima = req.body.EdadMinima;
         evento.edadMinima = req.body.EdadMaxima;
         evento.imagenEvento = req.body.ImagenEvento;
         evento.IdCategoria = req.body.idCategoria;

    
        console.log(evento);
        resultado = await svc.insert(evento);
        return res.status(200).json(resultado);
        
     
    
    })
  
export default router;