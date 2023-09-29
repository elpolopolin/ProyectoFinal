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

    Categorias = async () => {
        let returnEntity = null;
        try {
            let pool    = await sql.connect(config);
            let result  = await pool.request()
                                                .query('SELECT * FROM Categoria')
                                                        
            returnEntity = result.recordset;
            
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    getByIdEvento = async (id) => {
        
        let returnEntity = null;
        console.log('Estoy en: Evento.getById(id)');
        try {
            let pool    = await sql.connect(config);
            let result  = await pool.request()
                                                .input('pId', sql.Int, id)
                                                .query('SELECT * FROM Evento WHERE Id = @pId');
            returnEntity = result.recordsets[0][0]; //
            console.log('Esto es el evento', returnEntity)
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    VerificarEntradaEnBD = async (IdEvento, IdEntrada) => { //laburo aca
        
    }

    EventosCategoriaUsuario = async (id) => {
      let returnEntity = null;
      console.log('Estoy en: Evento.EventosCategoriaUsuario(id)');
      try {
          let pool    = await sql.connect(config);
          let result  = await pool.request()
                                              .input('pId', sql.Int, id)
                                              .query(`SELECT IdCategoria FROM Categorias_x_Usuario WHERE IdUsuario = @pId
                                             
                                             `);

          returnEntity = result.recordsets[0]; //
          console.log('categoriass del usuario: ', returnEntity)
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
                                                .query('SELECT IdUsuario, IdEvento, IdEntrada, Usuario.Nombre, Usuario.Descripcion, usuario.FotoPerfil FROM Participante_x_Evento INNER JOIN Evento ON  Participante_x_Evento.IdEvento = Evento.Id INNER JOIN Usuario ON  Participante_x_Evento.IdUsuario = Usuario.Id WHERE IdEvento = @pId');
            returnEntity = result.recordsets[0]; //
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    }

    insert = async (evento) => {
        let rowsAffected = 0;
        
        console.log(evento);

        console.log('estoy en:  EventoService.insert(Evento)');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request()
                                            .input('pNombre', sql.VarChar, evento.nombre)
                                            .input('pFecha', sql.VarChar, evento.fecha)
                                            .input('pPrecio', sql.Float, evento.precio)
                                            .input('pParticipantes', sql.Float, evento.participantes)
                                            .input('pDescripcion', sql.VarChar, evento.descripcion)
                                            .input('pDireccion', sql.VarChar, evento.direccion)
                                            .input('pPublico', sql.Bit, evento.publico)
                                            .input('pEdadMinima', sql.Float, evento.edadMinima)
                                            .input('pEdadMaxima', sql.Float, evento.edadMaxima)
                                            .input('pImagenEvento', sql.VarChar, evento.imagenEvento)
                                            .input('pidCategoria', sql.Int, evento.idCategoria)


                                            .query('Insert into Evento (Nombre, Fecha, Precio, Participantes, Descripcion, Direccion, Publico, EdadMinima, EdadMaxima, ImagenEvento, idCategoria) Values (@pNombre, @pFecha, @pPrecio, @pParticipantes, @pDescripcion, @pDireccion, @pPublico, @pEdadMinima, @pEdadMaxima, @pImagenEvento, @pidCategoria)')
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
                                            
        return rowsAffected;
    }


    ingresarEnEvento = async (IdUsuario, IdEvento, idDeEntrada, qrCodeImage) => {
        let rowsAffected = 0;
        console.log('Ingresar En Evento');
        console.log(IdUsuario, IdEvento, idDeEntrada);
      
        try {
          let pool = await sql.connect(config);
      
          // Verificar si el usuario ya participa en el evento
          const verificaQuery = `
            SELECT COUNT(*) AS count FROM Participante_X_Evento
            WHERE IdUsuario = @pIdUsuario AND IdEvento = @pIdEvento
          `;
      
          const verificaResult = await pool
            .request()
            .input('pIdUsuario', sql.Int, IdUsuario)
            .input('pIdEvento', sql.Int, IdEvento)
            .query(verificaQuery);
      
          const participacionExistente = verificaResult.recordset[0].count > 0;
      
          if (!participacionExistente) {
            // El usuario no participa todavía, realizar la inserción
            const insertQuery = `
              INSERT INTO Participante_X_Evento (IdUsuario, IdEvento, IdEntrada, QrImage)
              VALUES (@pIdUsuario, @pIdEvento, @pIdEntrada, @pQrImage)
            `;
      
            const result = await pool
              .request()
              .input('pIdUsuario', sql.Int, IdUsuario)
              .input('pIdEvento', sql.Int, IdEvento)
              .input('pIdEntrada', sql.VarChar, idDeEntrada)
              .input('pQrImage', sql.VarChar, qrCodeImage)
              .query(insertQuery);
      
            rowsAffected = result.rowsAffected;

             // Actualizar el contador de participantes en el evento
             const updateEventoQuery = `
             UPDATE Evento
             SET Participando = Participando + 1
             WHERE Id = @pIdEvento
           `;
       
           await pool
             .request()
             .input('pIdEvento', sql.Int, IdEvento)
             .query(updateEventoQuery);
             // Fin

          } else {
            console.log('El usuario ya participa en el evento');
          }
        } catch (error) {
          console.log(error);
        }
      
        return rowsAffected;
      };

    AsistentesXEvento = async () => {
        let returnEntity = null;

        console.log('estoy en:  EventoService.VerParticipantesEvento(id)');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request()
                                        
            .query(`
            SELECT	IdEvento,IdUsuario, Usuario.NombreUsuario, Usuario.Nombre, Usuario.Apellido, Usuario.Descripcion, Usuario.FotoPerfil, Usuario.Direccion
                            
                        FROM Participante_x_Evento
                        INNER JOIN Evento ON Participante_x_Evento.IdEvento = Evento.Id
                        INNER JOIN Usuario ON Participante_x_Evento.IdUsuario = Usuario.Id
                        
                       `);

                        returnEntity = result.recordsets[0]; //

        } catch (error) {
            res.status(404).send('No se encontró papi(404)!!');
        }
                                            
        return returnEntity;
    }

    
}
export default EventoService;