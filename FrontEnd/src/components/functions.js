import axios from "axios";

var eventos = null;

export default function CargarEventos() {
    document.getElementById("cargar").style = "display: none";
    axios 
    .get("http://localhost:3000/getAll")
    .then((result) => {
        eventos = result.data.results; 
        eventos.map((eventos) => {
            const {id, nombre, fecha, precio, participantes, descripcion, direccion, publico, colaboradores, invitados, edadMinima, edadMaxima, ImagenEvento } = eventos;

            document.getElementById("listado").innerHTML += `
            <div class="listItem" onclick="mostrarInfo(${id - 1})">
                <img src=${ImagenEvento}>
                <div id="textos">
                <b> ${nombre} </b><br>
                </div> 
            </div>
            `;

            console.log(document.getElementById("listado").style.display);
        })
    })
    .catch((error) => {
        console.log(error);
    });
}

function mostrarInfo(id){
    document.getElementById("listado").style.display = "none";
    document.getElementById('modal').style.display = "block";
    const evento = eventos[id];
    document.getElementById('modal').innerHTML =  `
    <img src=${evento.ImagenEvento}>
    <h1> ${evento.nombre} </h1>
    <p> <i>fecha</i>: ${evento.fecha} </p>
    <p> <i>precio</i>: ${evento.precio} </p>
    <p> <i>participantes</i>: ${evento.participantes} </p>
    <p> <i>descripcion</i>: ${evento.descripcion} </p>
    <p> <i>direccion</i>: ${evento.direccion} </p>
    <p> <i>publico</i>: ${evento.publico} </p>
    <p> <i>colaboradores</i>: ${evento.colaboradores} </p>
    <p> <i>invitados</i>: ${evento.invitados} </p>
    <p> <i>edadMinima</i>: ${evento.edadMinima} </p>
    <p> <i>edadMaxima</i>: ${evento.edadMaxima} </p>

    `;
}

function cerrarModal(){
    document.getElementById("listado").style.display = "";
    document.getElementById('modal').innerHTML = "";
    document.getElementById('modal').style.display = "none";
}
