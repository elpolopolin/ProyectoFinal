

class Evento {
    id;
    nombre;
    fecha;
    precio;
    participantes;
    descripcion;
    direccion;
    publico;
    colaboradores;
    invitados;
    edadMinima;
    edadMaxima;
    imagenEvento;
    IdCategoria;
    
    constructor (a,b,c,d,e,f,g,h,i,j,k,l,m){
        this.nombre = a;
        this.fecha = b;
        this.precio = c;
        this.participantes = d;
        this.descripcion = e;
        this.direccion =f;
        this.publico = g;
        this.colaboradores = h;
        this.invitados = i;
        this.edadMinima = j;
        this.edadMaxima = k;
        this.imagenEvento = l;
        this.IdCategoria = m;
    }
}

export default Evento;