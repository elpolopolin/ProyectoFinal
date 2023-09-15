import config from "./dbconfig.js";
import sql from 'mssql';
import Usuario from "./src/models/usuario.js";
import EventoRouter from "./src/controllers/eventoController.js"
import UsuarioRouter from "./src/controllers/usuarioController.js"
import express from "express";
import multer from "multer";
import cors from "cors";
import mercadopago from "mercadopago";



const app = new express();

app.use(express.static('public'));


app.use(express.json());
app.use(cors());

const port = 3000;


app.use("/", EventoRouter);
app.use("/usuarios", UsuarioRouter);


//Mercado Pago:

mercadopago.configure({
  access_token: "your_acces_token",
});

app.get("/", function (req, res) {
  res.send("el servidor de mercado pago funciona! :)");
});

app.post("/create_preference", (req, res) => {
  let preference = {
    items: [
      {
        title: req.body.description,
        unit_price: Number(req.body.price),
        quantity: Number(req.body.quantity),
      },
    ],
    back_urls: {
      success: "http://localhost:3001/",
      failure: "http://localhost:3001/nofunciono",
      pending: "",
    },
    auto_return: "approved",
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.json({
        id: response.body.id,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })