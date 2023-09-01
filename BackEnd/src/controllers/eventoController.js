import { Router } from "express";
import Evento from "./../models/evento.js";
import EventoService from "./../services/evento-service.js"
const router = Router();
const svc = new EventoService();
import multer from 'multer'; // Utiliza import en lugar de require
import path from 'path'; // Utiliza import en lugar de require


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("Estoy en destination");
    cb(null, 'public/imagenesEventos'); // La carpeta donde se guardarán las imágenes públicas
  },
  filename: function (req, file, cb) {
    const extname = path.extname(file.originalname);
    const filename = `${Date.now()}${extname}`;
    console.log("Estoy en filename");
    cb(null, filename);
  },
});


const upload = multer({ storage });

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

    router.get('/getbyidEvento/:id', async (req, res) => {
      try {
        let resultado = await svc.getByIdEvento(req.params.id);
        return res.status(200).json(resultado);
        
      } catch (error) {
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

      router.post('/insert', upload.single('ImagenEvento'), async (req, res, next) => {
        try {
          let resultado = null;
          let evento = new Evento();
          evento.nombre = req.body.Nombre;
          evento.fecha = req.body.Fecha;
          evento.precio = req.body.Precio;
          evento.participantes = req.body.Participantes;
          evento.descripcion = req.body.Descripcion;
          evento.direccion = req.body.Direccion;
          evento.publico = req.body.Privacidad;
          evento.edadMinima = req.body.EdadMinima;
          evento.edadMinima = req.body.EdadMaxima;
          evento.imagenEvento = "";//req.body.ImagenEvento; // Accede al nombre del archivo subido
          evento.categoria = req.body.Categoria;
      
          
          console.log(evento);
          console.log("-----------------req.body.ImagenEvento begin");          
          console.log(req);
          console.log(req);
          console.log("-----------------req.body.ImagenEvento end");          
          //console.log(req.body.ImagenEvento);


      
          resultado = await svc.insert(evento);
          return res.status(200).json(resultado);
        } catch (error) {
          console.log(error);
          return res.status(500).json({ error: "Error interno del servidor" });
        }
      });
  
export default router;