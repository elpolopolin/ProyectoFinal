import { Router } from "express";
import Evento from "./../models/evento.js";
import EventoService from "./../services/evento-service.js"
const router = Router();
const svc = new EventoService();
import multer from 'multer'; // Utiliza import en lugar de require
import path from 'path'; // Utiliza import en lugar de require
import os from 'os';
import { v4 as uuidv4 } from 'uuid';
import QRCode from 'qrcode';

// Función para obtener la dirección IPv4
function getIPv4Address() {
  const networkInterfaces = os.networkInterfaces();
  for (const interfaceName in networkInterfaces) {
    const interfaceInfo = networkInterfaces[interfaceName];
    for (const info of interfaceInfo) {
      if (info.family === 'IPv4' && !info.internal) {
        return info.address;
      }
    }
  }
  return 'https://localhost:3000'; // Valor por defecto si no se encuentra ninguna dirección IPv4 válida
}

// const ipv4Address = getIPv4Address();
const ipv4Address = "192.168.0.119";
const host = `http://${ipv4Address}:3000`;

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

  // Define una función para filtrar archivos de imagen
  const fileFilter = (req, file, cb) => {
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif']; // Agrega las extensiones permitidas aquí
    const extname = path.extname(file.originalname).toLowerCase();

    if (allowedExtensions.includes(extname)) {
      cb(null, true); // Acepta el archivo
    } else {
      cb(new Error('Solo se permiten archivos de imagen con extensiones .jpg, .jpeg, .png o .gif'), false); // Rechaza el archivo
    }
  }




const upload = multer({ storage, fileFilter });

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

      router.get('/EventosCategoriaUsuario/:id', async (req, res) => {
        try {
          let resultado = await svc.EventosCategoriaUsuario(req.params.id);
          return res.status(200).json(resultado);
          
        } catch (error) {
          console.log(error);
        }
         
        })

      
      router.post('/IngresarEnEvento', async (req, res) => {
        try {
          // Paso 1: Parsear los valores del cuerpo de la solicitud
          const { IdUsuario, IdEvento } = req.body;
      
          // Paso 2: Generar un ID único para la entrada
          const idDeEntrada = uuidv4();

          const redirectURL = `${host}/verificarEntrada/${IdEvento}/${idDeEntrada}`;

          // Paso 3: Generar el código QR
          const qrCodeData = { redirectURL };
          const qrCodeImage = await QRCode.toDataURL(JSON.stringify(qrCodeData));
      
          // Paso 4: Insertar los valores en la tabla Participante_X_Evento
          const rowsAffected = await svc.ingresarEnEvento(IdUsuario, IdEvento, idDeEntrada, qrCodeImage);
      
          // Comprueba si la inserción fue exitosa
          if (rowsAffected > 0) {
            // Paso 5: Envía una respuesta al cliente
            res.status(200).json({
              message: 'Entrada generada',
              idDeEntrada: idDeEntrada,
              qrCode: qrCodeImage,
            });
          } else {
            res.status(500).json({ error: 'Error al generar la entrada' });
          }
        } catch (error) {
          console.log(error);
          res.status(500).json({ error: 'Error interno del servidor' });
        }
      });

      router.get('/verificarEntrada/:IdEvento/:IdEntrada', async (req, res) => {
        try {
          const { IdEvento, IdEntrada } = req.params;
      
          // Paso 2: Realizar la verificación en la base de datos
          // Aquí deberías implementar la lógica para verificar la entrada en tu base de datos
          // Supongamos que tienes una función 'verificarEntradaEnBD' en 'svc'
          const entradaValida = await svc.verificarEntradaEnBD(IdEvento, IdEntrada);
      
          if (entradaValida) {
            res.status(200).json({ message: 'Entrada válida' });
          } else {
            res.status(400).json({ error: 'Entrada no válida' });
          }
        } catch (error) {
          console.log(error);
          res.status(500).json({ error: 'Error interno del servidor' });
        }
      });

      router.post('/insert', upload.single('ImagenEvento'), async (req, res, next) => {
        try {
          let resultado = null;
          let evento = new Evento();
          //datos del evento traidos del form del front paaa
          evento.nombre = req.body.Nombre;
          evento.fecha = req.body.Fecha;
          evento.precio = req.body.Precio;
          evento.participantes = req.body.Participantes;
          evento.descripcion = req.body.Descripcion;
          evento.direccion = req.body.Direccion;
          evento.publico = req.body.Privacidad;
          evento.edadMinima = req.body.EdadMinima;
          evento.edadMinima = req.body.EdadMaxima;
      
          // Obtén la ruta completa de la imagen guardada
          const extname = path.extname(req.file.filename);
          const imagenRuta = `${host}/imagenesEventos/${req.file.filename}`;
          
          evento.imagenEvento = imagenRuta;
      
          evento.idCategoria = req.body.Categoria;
      
          console.log(evento);
          console.log("-----------------req.body.ImagenEvento begin");          
          console.log(req);
          console.log("-----------------req.body.ImagenEvento end");   
          
          // Redimensionar la imagen si es necesario
        
          resultado = await svc.insert(evento);
          
          return res.status(200).json(resultado);
        } catch (error) {
          console.log(error);
          return res.status(500).json({ error: "Error interno del servidor" });
        }
      });
  

      /*filter eventos con base de datos 

      SELECT *
      FROM Evento
      WHERE Nombre LIKE '%f%'; 
      (usarlo para buscar eventos en algun momento ya que filter es una porong*)
      
      */

export default router;