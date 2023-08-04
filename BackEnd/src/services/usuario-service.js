import config from "../../dbconfig.js";
import sql from 'mssql';
import Usuario from '../models/usuario.js'

//importar algun bcript o algo pa encriptar la data de los users


class UsuarioService {
    
    getAllUsuario = async () => { 
        let returnEntity = null;
        console.log('estoy en EventoService.getaLLUsuario');
        try {
            let pool    = await sql.connect(config);
            let result  = await pool.request()
                                                .query('SELECT * FROM Usuario')
            returnEntity = result.recordset;
        
           // Encriptar la contraseña si existe
        if (returnEntity) {
        for (const Usuario of returnEntity) {
          if (Usuario.Contrasena) {
            const encryptedPassword = "******";
            Usuario.Contrasena = encryptedPassword;
          }
        }
         }
        
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    login = async (nombre, contrasena) => { 
        let returnEntity = null;
        console.log('estoy en EventoService.LogIN');
        try {
          let pool = await sql.connect(config);
          let result = await pool.request()
            .input('pNombre', sql.VarChar, nombre)
            .input('pContrasena', sql.VarChar, contrasena)
            .query('SELECT * FROM Usuario WHERE NombreUsuario = @pNombre AND Contrasena = @pContrasena');
          returnEntity = result.recordset[0];

          if (returnEntity) {
            const encryptedPassword = "******";
              returnEntity.Contrasena = encryptedPassword;T
          }
        } catch (error) {
          console.log(error);
        }
        return returnEntity;
      }

      getEventosXUsuario = async (id) => {
        let returnEntity = null;
        console.log('Estoy en: Usuario.getEventosXUsuario (id)');
        try {
          let pool = await sql.connect(config);
          let result = await pool
            .request()
            .input('pId', sql.Int, id)
            .query('SELECT IdEvento FROM Usuario INNER JOIN Participante_x_Evento ON Usuario.Id = Participante_x_Evento.IdUsuario WHERE Id = @pId');
          returnEntity = result.recordsets[0]; // Obtener el primer elemento del arreglo
        } catch (error) {
          console.log(error);
        }
        return returnEntity;
      }

      getById = async (id) => {
        let returnEntity = null;
        console.log('Estoy en: Usuario.getById(id)');
        try {
          let pool = await sql.connect(config);
          let result = await pool
            .request()
            .input('pId', sql.Int, id)
            .query('SELECT * FROM Usuario WHERE Id = @pId');
          returnEntity = result.recordsets[0]; // Obtener el primer elemento del arreglo
            
          if (returnEntity) {
            for (const Usuario of returnEntity) {
              if (Usuario.Contrasena) {
                const encryptedPassword = "******";
                Usuario.Contrasena = encryptedPassword;
              }
            }
          }
        } catch (error) {
          console.log(error);
        }
        return returnEntity;
      };

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