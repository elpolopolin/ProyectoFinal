import config from "../../dbconfig.js";
import sql from 'mssql';
import Usuario from '../models/usuario.js'


class UsuarioService {
    
    getAllUsuario = async () => { 
        let returnEntity = null;
        console.log('estoy en EventoService.getaLLUsuario');
        try {
            let pool    = await sql.connect(config);
            let result  = await pool.request()
                                                .query('SELECT * FROM Usuario')
            returnEntity = result.recordset;
            console.log(returnEntity);
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }


    insert = async (usuario) => {
        let rowsAffected = 0;
        
        console.log(usuario);

        console.log('estoy en:  UsuarioService.insert(usuario)');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request()
                                            .input('pNombreUsuario', sql.VarChar, usuario.nombreUsuario)
                                            .input('pContrasena', sql.VarChar, usuario.contrasena)
                                            .input('pNombre', sql.VarChar, usuario.nombre)
                                            .input('pApellido', sql.VarChar, usuario.apellido)
                                            .input('pFechaNacimiento', sql.DateTime, usuario.fechaNacimiento)
                                            .input('pGenero', sql.VarChar, usuario.genero)
                                            .input('pFechaCreacion', sql.DateTime, usuario.fechaCreacion)
                                            .input('pDescripcion', sql.VarChar, usuario.descripcion)
                                            .input('pDireccion', sql.VarChar, usuario.direccion)
                                            .input('pFotoPerfil', sql.VarChar, usuario.fotoPerfil)

                                            .query('Insert into Usuario (NombreUsuario,Contrasena,Nombre, Apellido, FechaNacimiento, Genero, FechaCreacion, Descripcion, Direccion, FotoPerfil) Values (@pNombreUsuario, @pContrasena, @pNombre, @pApellido, @pFechaNacimiento, @pGenero, @pFechaCreacion, @pDescripcion, @pDireccion, @pFotoPerfil)')
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
                                            
        return rowsAffected;
    }

}
export default UsuarioService;