
class Usuario {
    id;
    nombreUsuario;
    contrasena;
    nombre;
    apellido;
    fechaNacimiento;
    genero;
    fechaCreacion;
    descripcion;
    direccion;
    fotoPerfil;


    
    constructor (a,b,c,d,e,f,g,h,i,j){
     this.nombreUsuario = a;
     this.contrasena = b;
     this.nombre = c;
     this.apellido = d;
     this.fechaNacimiento = e;
     this.genero = f;
     this.fechaCreacion = g;
     this.descripcion = h;
     this.direccion = i;
     this.fotoPerfil = j;
    }
}

export default Usuario;