

class Evento {
    id;
    nombre;
    fecha;
    precio;
    participantes;
    descripcion;
    direccion;
    colaboradores;
    invitados;
    edadMinima;
    edadMaxima;

    
    constructor (a,b,c,d,e,f,g,h,i,j){
        this.nombre = a;
        this.fecha = b;
        this.precio = c;
        this.participantes = d;
        this.descripcion = e;
        this.direccion =f;
        this.colaboradores = g;
        this.invitados = h;
        this.edadMinima = i;
        this.edadMaxima = j;

    }
}

export default Evento;