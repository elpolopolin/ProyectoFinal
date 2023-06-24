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
