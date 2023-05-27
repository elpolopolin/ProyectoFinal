import config from "../../dbconfig.js";
import sql from 'mssql';
import Evento from '../models/evento.js'
import Usuario from '../models/usuario.js'


class EventoService {

    getAll = async () => { 
        let returnEntity = null;
        console.log('estoy en EventoService.getaLL');
        try {
            let pool    = await sql.connect(config);
            let result  = await pool.request()
                                                .query('SELECT * FROM Evento')
            returnEntity = result.recordset;
            console.log(returnEntity);
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

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

    getById = async (id) => {
        
        let returnEntity = null;
        console.log('Estoy en: Evento.getById(id)');
        try {
            let pool    = await sql.connect(config);
            let result  = await pool.request()
                                                .input('pId', sql.Int, id)
                                                .query('SELECT * FROM Evento WHERE id = @pId');
            returnEntity = result.recordsets[0][0]; //
        } catch (error) {
            res.status(404).send('No se encontró (404)!!');
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
                                            .input('pContraseña', sql.VarChar, usuario.contraseña)
                                            .input('pNombre', sql.VarChar, usuario.nombre)
                                            .input('pApellido', sql.VarChar, usuario.apellido)
                                            .input('pFechaNacimiento', sql.VarChar, usuario.fechaNacimiento)
                                            .input('pGenero', sql.VarChar, usuario.genero)
                                            .input('pFechaCreacion', sql.VarChar, usuario.fechaCreacion)
                                            .input('pDescripcion', sql.VarChar, usuario.descripcion)
                                            .input('pDireccion', sql.VarChar, usuario.direccion)
                                            .input('pFotoPerfil', sql.VarChar, usuario.fotoPerfil)

                                            .query('Insert into Usuario (NombreUsuario,Contraseña,Nombre, Apellido, FechaNacimiento, Genero, FechaCreacion, Descripcion, Direccion, FotoPerfil) Values (@pNombreUsuario, @pContraseña, @pNombre, @pApellido, @pFechaNacimiento, @pGenero, @pFechaCreacion, @pDescripcion, @pDireccion, @pFotoPerfil)')
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
                                            
        return rowsAffected;
    }
}
export default EventoService;
