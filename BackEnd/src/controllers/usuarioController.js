import config from "../../dbconfig.js";
import { Router } from "express";
import Usuario from "./../models/usuario.js";
import UsuarioService from "./../services/usuario-service.js"
const router = Router();
const svc = new UsuarioService();

router.get('/getAll', async (req, res) => {
  
    let resultado = await svc.getAllUsuario();
    return res.status(200).json(resultado);
    console.log(resultado);
  })

  router.get('/getbyid/:id', async (req, res) => {
    try {
      let resultado = await svc.getById(req.params.id);
      if (resultado && resultado.length > 0) {
        return res.status(200).json(resultado[0]); // Devuelve el primer elemento del arreglo
      } else {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Error en el servidor' });
    }
  });

  router.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
      const resultado = await svc.login(username, password);
    
      if (resultado) {
        return res.status(200).json(resultado);
      } else {
        return res.status(400).send('Usuario no existe');
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send('Error interno del servidor');
    }
  });
   
   
  

  
//insert de usuario
router.post('/insert', async (req, res) => {

    let resultado = null;
       let usuario = new Usuario ();
       usuario.nombreUsuario = req.body.NombreUsuario;
       usuario.contrasena = req.body.Contrasena;
       usuario.nombre = req.body.Nombre;
       usuario.apellido = req.body.Apellido;
       usuario.fechaNacimiento = req.body.FechaNacimiento;
       usuario.genero = req.body.genero;
       usuario.fechaCreacion = req.body.FechaCreacion;
       usuario.descripcion = req.body.Descripcion;
       usuario.direccion = req.body.Direccion;
       usuario.fotoPerfil = req.body.FotoPerfil;
  
      console.log(usuario);
      resultado = await svc.insert(usuario);
      return res.status(200).json(resultado);
      
   
  
  })

export default router;