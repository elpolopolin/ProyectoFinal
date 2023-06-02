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

  router.get('/getbyid/:id', async (req, res) => {
    try {
      let resultado = await svc.getById(req.params.id);
      return res.status(200).json(resultado);
      console.log(resultado);
    } catch (res) {
      console.log(error);
    }
     
    })
  
export default router;