import config from "./dbconfig.js";
import sql from 'mssql';
import Pizza from "./src/models/evento.js";
import Usuario from "./src/models/usuario.js";
import EventoRouter from "./src/controllers/eventoController.js"
import UsuarioRouter from "./src/controllers/usuarioController.js"
import express from "express";
import multer from "multer";
import cors from "cors";



const app = new express();

app.use(express.static('public'));


app.use(express.json());
app.use(cors());

const port = 3000;


app.use("/", EventoRouter);
app.use("/usuarios", UsuarioRouter);


 
//1
/*

//GET ALL USUARIOS






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

*/
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })