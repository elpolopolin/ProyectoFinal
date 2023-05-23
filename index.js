import config from "./dbconfig.js";
import sql from 'mssql';
import EventoService from "./src/services/evento-service.js";
import Pizza from "./src/models/evento.js";
import express from "express";


const app = new express();

app.use(express.static('public'));

app.use(express.json());
const port = 3000;

let svc = new EventoService()
 
//1
app.get('/getAll', async (req, res) => {
  
  let resultado = await svc.getAll();
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

//revisar
app.post('/insert', async (req, res) => {
  let resultado = null;
     let pizza = new Pizza ();
     pizza.nombre = req.body.Nombre;
     pizza.libreGluten = req.body.LibreGluten;
     pizza.importe = req.body.Importe;
     pizza.descripcion = req.body.Descripcion;
    console.log(pizza);
    resultado = await svc.insert(pizza);
    res.send(resultado);
    console.log(resultado)
 

})

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