function getAll () {
    document.getElementById("Registro").innerHTML = "";
    document.getElementById("botones").innerHTML = '<button id="boton1" onclick="getAll()">GetAll</button>    <button id="boton2" onclick="Registrarse()">Registrarse</button> <button id="boton3" onclick="Usuarios()">Ver Usuarios</button> <button id="boton4" onclick="crearEvento()">Crear Evento</button>';
    document.getElementById("boton1").innerHTML = "GetAll";
    document.getElementById("evento-verMas").innerHTML = "";

    axios
    .get("http://localhost:3000/getAll")

    .then((result) => {
        var resultado = result.data
        console.log(resultado);
            
            let table = '';
            
            resultado.forEach((unEvento, index) => {
                table += `
                <div class="col-3">
                    <div class="card mb-4" style="width: 18rem;">
                            <img src="${unEvento.ImagenEvento}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${unEvento.Nombre}</h5>
                                <p class="card-text">${unEvento.Descripcion}</p>
                            </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><b>Capacidad: </b>${unEvento.Participantes} </li>
                        <li class="list-group-item"><b>Precio: </b>${unEvento.Precio}</li>
                        <li class="list-group-item"><b>Edades: </b>${unEvento.EdadMinima} - ${unEvento.EdadMaxima} </li>
                    </ul>
                    <div class="card-body">
                        <button onclick="verMas(${unEvento.Id})" class="card-link">Ver Mas</button>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
            </div>
            `

                
              });
              
              document.getElementById("evento-list").innerHTML = table;
        
            })
    

    .catch((error) => {
        console.log(error);
    })  

}

    function verMas(id) {
        document.getElementById("evento-list").innerHTML = "";
        document.getElementById("boton1").innerHTML = "Regresar";
        url = "http://localhost:3000/getbyid/" + id;
    
        axios
        .get(url)

        .then((result) => {
            var resultado = result.data
            console.log(resultado);

                let table = '';
                table += `
                
                <center>
                                        <ul class="list-group">
                        <li class="list-group-item"><img src="${resultado.ImagenEvento}"></li>
                        <li class="list-group-item"><h2> ${resultado.Nombre} </h2></li>
                        <li class="list-group-item"><p> ${resultado.Descripcion} </p></li>
                        <li class="list-group-item"><b>Capacidad: ${resultado.Participantes} Participantes</li>
                        <li class="list-group-item">Precio: ${resultado.Precio}</li>

                        `
                        if (resultado.Publico == true) {
                            table += `<li class="list-group-item">Direccion: <p class="text-success"> ${resultado.Direccion} </p> </li>`
                        }
                        else {
                           table += `<li class="list-group-item">Direccion: <b class="text-danger">Privada</b> </li>`
                        }

                        table += `
                       
                        
                        </ul>    
                </center>

                `
                document.getElementById("evento-verMas").innerHTML = table;

        })

        .catch((error) => {
            console.log(error);
        })



        
    }

    function Registrarse(){
        document.getElementById("evento-list").innerHTML = "";
        document.getElementById("evento-verMas").innerHTML = "";
        document.getElementById("botones").innerHTML = "";

        document.getElementById("Registro").innerHTML =   ` <br>
        
        <a href="https://mdbootstrap.com/docs/standard/extended/registration/">Templates de registro</a>
        <br> <br>
        
       <input placeholder="Nombre de usuario" type="text" id="textNombreUsuario"> 
       <input placeholder="Contraseña" type="password" id="textContraseña"> 
       <input placeholder="Nombre" type="text" id="textNombre"> 
       <input placeholder="Apellido" type="text" id="textApellido"> 
       <input placeholder="fecha naciemiento" type="date" id="textFechaNacimiento">
       <input placeholder="genero" type="checkbox" id="textGenero"> 
       <input placeholder="Direccion" type="text" id="textDireccion"> 
     <input placeholder="Foto Perfil" type="file" id="textFotoPerfil" accept="image/jpg"/> 
        <br> <br> 
        <button onClick="Registro()">Registrarse</button>
        
        `


    }


function Registro() {

    url = "http://localhost:3000/insert/" ;

    nombreUsuario = document.getElementById("textNombreUsuario").value;
    contraseña = document.getElementById("textContraseña").value;
    nombre = document.getElementById("textNombre").value;
    apellido = document.getElementById("textApellido").value;
    fechaNacimiento = document.getElementById("textFechaNacimiento").value;
    genero = document.getElementById("textGenero").Checked;
    direccion = document.getElementById("textDireccion").value;
    fotoPerfil = document.getElementById("textFotoPerfil").value;
    
    let fechaCreacion = new Date().toLocaleString();

    let objUsuario = {
        NombreUsuario: nombreUsuario,
        Contraseña: contraseña,
        Nombre: nombre,
        Apellido: apellido,
        FechaNaciemiento: fechaNacimiento,
        Genero: genero,
        FechaCreacion: null,
        Descripcion: null,
        Direccion: direccion,
        FotoPerfil: fotoPerfil
    }

    
    axios

    .post (url, objUsuario)

    .then ((result) => {
        
        getAll();
        
    })

    .catch((error) => {
        console.log(error);
    })

}


function Usuarios () {
    document.getElementById("Registro").innerHTML = "";
    document.getElementById("botones").innerHTML = '<button id="boton1" onclick="getAll()">GetAll</button>    <button id="boton2" onclick="Registrarse()">Registrarse</button> <button id="boton3" onclick="Usuarios()">Ver Usuarios</button> <button id="boton4" onclick="crearEvento()">Crear Evento</button>';
    document.getElementById("boton1").innerHTML = "GetAll";
    document.getElementById("evento-verMas").innerHTML = "";
    
    axios
    .get("http://localhost:3000/getAll/usuario")

    .then((result) => {
        var resultado = result.data
        console.log(resultado);
            
            let table = '';
            
            resultado.forEach((unUsuario, index) => {
                var edad = 0;
                var año = new Date();
                var nacimiento = unUsuario.FechaNacimiento;
                console.log(nacimiento);
                var year = año.getFullYear();
                var nacimientoAño = nacimiento;
                
           /*    edad = (year - naciemientoAño); */

                table += `
                
                <div class="col-3 mb-4">
  
       
                <img src="${unUsuario.FotoPerfil}" class="" style= "height: 200px; width: auto; border-radius: 50%;">
                 
              <div class="flex-grow-1 ms-3">
                <h5 class="mb-1">${unUsuario.NombreUsuario}</h5>
                <p class="mb-2 pb-1" style="color: #2b2a2a;">${unUsuario.Nombre} ${unUsuario.Apellido}</p>
                <div class="d-flex justify-content-start rounded-3 p-2 mb-2"
                  style="background-color: #efefef;">
                  <div>
                    <p class="small text-muted mb-1">Eventos</p>
                    <p class="mb-0">0</p>
                  </div>
                  <div class="px-3">
                    <p class="small text-muted mb-1">Followers</p>
                    <p class="mb-0">0</p>
                  </div>
                  <div>
                    <p class="small text-muted mb-1">Edad</p>
                    <p class="mb-0">${edad}</p>
                  </div>
                </div>
                <div class="d-flex pt-1">
                  <button type="button" class="btn btn-outline-primary me-1 flex-grow-1">Chat</button>
                  <button type="button" class="btn btn-primary flex-grow-1">Follow</button>
                </div>
              
            </div>
            </div>
            
               
            `

                
              });
              
              document.getElementById("evento-list").innerHTML = table;
        
            })
    

    .catch((error) => {
        console.log(error);
    })  

}