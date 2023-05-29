import config from "./dbconfig.js";
import sql from 'mssql';
import EventoService from "./src/services/evento-service.js";
import UsuarioService from "./src/services/usuario-service.js";
import Pizza from "./src/models/evento.js";
import Usuario from "./src/models/usuario.js";
import express from "express";
import multer from "multer";


const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '.jpg');
  }
});

const upload = multer({ storage: storage });

const app = new express();

app.use(express.static('public'));

app.use(express.json());
const port = 3000;

let svc = new EventoService()
let svc2 = new UsuarioService()
 
//1
app.get('/getAll', async (req, res) => {
  
  let resultado = await svc.getAll();
  res.send(resultado);
  console.log(resultado);
})

//GET ALL USUARIOS
app.get('/getAll/usuario', async (req, res) => {
  
  let resultado = await svc2.getAllUsuario();
  res.send(resultado);
  console.log(resultado);
})


app.get('/getbyid/:id', async (req, res) => {
try {
  let resultado = await svc.getById(req.params.id);
  res.send(resultado);
  console.log(resultado);
} catch (res) {
  console.log(error);
}
 
})

//insert de usuario
app.post('/insert', async (req, res) => {

  let resultado = null;
     let usuario = new Usuario ();
     usuario.nombreUsuario = req.body.NombreUsuario;
     usuario.contraseña = req.body.Contraseña;
     usuario.nombre = req.body.Nombre;
     usuario.apellido = req.body.Apellido;
     usuario.fechaNacimiento = req.body.FechaNacimiento;
     usuario.genero = req.body.genero;
     usuario.fechaCreacion = req.body.FechaCreacion;
     usuario.descripcion = req.body.Descripcion;
     usuario.direccion = req.body.Direccion;
     usuario.fotoPerfil = req.body.FotoPerfil;

    console.log(usuario);
    resultado = await svc2.insert(usuario);
    res.send(resultado);
    console.log(resultado)
 

})

app.post('/upload', upload.single('avatar'), (req, res) => {
  res.send('Archivo subido correctamente');
});

app.put('/update/:id', async function (req,res) {

  let pizza = new Pizza ();
    pizza.id = req.params.id;
    pizza.nombre = req.body.Nombre;
     pizza.libreGluten = req.body.LibreGluten;
     pizza.importe = req.body.Importe;
     pizza.descripcion = req.body.Descripcion;
    console.log(pizza);
    let resultado = null;
   resultado = await svc.update(pizza)
  res.send(resultado);
})
  
//revisar
app.delete('/delete/:id', async (req, res) => {
  let resultado = await svc.deleteById(req.params.id);
  res.send(resultado);
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })