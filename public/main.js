function getAll () {

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
        url = "http://localhost:3000/getbyid/" + id;
    
        axios
        .get(url)

        .then((result) => {
            var resultado = result.data
            console.log(resultado);
                
                let table = '';
                table += `
                <center>
                        <img src="${resultado.ImagenEvento}">
                        <h2> ${resultado.Nombre} </h2>
                </center>

                `
                document.getElementById("evento-verMas").innerHTML = table;

        })

        .catch((error) => {
            console.log(error);
        })
        
    }