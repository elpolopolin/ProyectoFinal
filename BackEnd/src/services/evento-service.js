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

    getAllxFecha = async () => {
        let returnEntity = null;
        console.log('Estoy en EventoService.getAllxFecha');
        try {
            const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' '); // Obtén la fecha actual en el formato 'YYYY-MM-DD HH:MM:SS'
    
            const pool = await sql.connect(config);
            const result = await pool.request()
                .query(`SELECT * FROM Evento WHERE Fecha > '${currentDate}'`);
    
            returnEntity = result.recordset;
            console.log(returnEntity);
        } catch (error) {
            console.log(error);
        }
        return returnEntity;
    };

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

    getCategoriasByIds = async (ids) => {
        let returnEntities = [];
        try {
          const pool = await sql.connect(config);
          for (const id of ids) {
            const result = await pool.request()
              .input('pId', sql.Int, id)
              .query('SELECT * FROM Categoria WHERE IdCategoria = @pId');
            const categoria = result.recordsets[0][0];
            returnEntities.push(categoria);
          }
        } catch (error) {
          console.log(error);
        }
        return returnEntities;
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

  CategoriasDeUsuario = async (id) => {
    let returnEntity = null;
    try {
      let pool = await sql.connect(config);
      let result = await pool.request()
        .input('pId', sql.Int, id)
        .query(`SELECT IdCategoria FROM Categorias_x_Usuario WHERE IdUsuario = @pId`);
      
      returnEntity = result.recordsets[0].map((row) => row.IdCategoria);
      console.log('Categorías del usuario: ', returnEntity);
    } catch (error) {
      console.log(error);
    }
    return returnEntity;
  }

  eventosUser = async (id) => { 
    let returnEntity = null;
    try {
        let pool    = await sql.connect(config);
        let result  = await pool.request()
                                            .input('pId', sql.Int, id)
                                            .query('SELECT * FROM Evento WHERE IdOrganizador = @pId');
        returnEntity = result.recordsets[0]; //
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

    AgregarCategorias = async (userId, CategoriasAgregar) => {
        try {
          const pool = await sql.connect(config);
      
          // Verificar si el usuario ya tiene categorías en la base de datos
          const result = await pool.request()
            .input('userId', sql.Int, userId)
            .query('SELECT IdCategoria FROM Categorias_x_Usuario WHERE IdUsuario = @userId;');
          const existingCategories = result.recordset;
      
          // Obtener las categorías actuales del usuario
          const currentCategories = existingCategories.map((row) => row.IdCategoria);
      
          // Calcular cuántas categorías adicionales se pueden agregar
          const maxCategories = 3 - currentCategories.length;
      
          if (maxCategories <= 0) {
            // El usuario ya tiene el máximo de categorías permitidas
            return { success: false, message: "El usuario ya tiene el máximo de categorías permitidas." };
          }
      
          // Filtrar las categorías a agregar para asegurarse de no agregar duplicados
          const uniqueCategoriesToAdd = CategoriasAgregar.filter((category) => !currentCategories.includes(category));
      
          if (uniqueCategoriesToAdd.length > maxCategories) {
            // Hay más categorías para agregar de las permitidas
            return { success: false, message: "No se pueden agregar más categorías de las permitidas." };
          }
      
          // Realizar las inserciones en la tabla Categorias_x_Usuario
          for (const category of uniqueCategoriesToAdd) {
            const result = await pool.request()
              .input('userId', sql.Int, userId)
              .input('category', sql.Int, category)
              .query('INSERT INTO Categorias_x_Usuario (IdUsuario, IdCategoria) VALUES (@userId, @category);');
          }
      
          return { success: true, message: "Categorías agregadas con éxito." };
        } catch (error) {
          console.error("Error al agregar categorías:", error);
          return { success: false, message: "Error al agregar categorías." };
        }
      };

      DeleteCategoria = async (userId, CategoriaId) => {
        let rowsAffected = 0;
        try {
          const pool = await sql.connect(config);
          const result = await pool.request()
            .input('userId', sql.Int, userId)
            .input('category', sql.Int, CategoriaId)
            .query('DELETE FROM Categorias_x_Usuario WHERE IdUsuario = @userId AND IdCategoria = @category;'); 
          rowsAffected = result.rowsAffected;
        } catch (error) {
          console.log(error.message);
        }
        return rowsAffected;
      }


    insert = async (evento) => {
        let rowsAffected = 0;
    
        try {
            let pool = await sql.connect(config);
    
            // Check if an event with the same idCategoria and Nombre already exists
            const checkQuery = 'SELECT COUNT(*) AS count FROM Evento WHERE Nombre = @pNombre AND idCategoria = @pidCategoria';
            const checkResult = await pool.request()
                .input('pNombre', sql.VarChar, evento.nombre)
                .input('pidCategoria', sql.Int, evento.idCategoria)
                .query(checkQuery);
            const eventCount = checkResult.recordset[0].count;
    
            if (eventCount > 0) {
                // An event with the same name and idCategoria already exists, handle the error
                throw new Error('An event with the same name and idCategoria already exists');
            }
    
            // If no event with the same name and idCategoria exists, proceed with insertion
            const insertQuery = `
                INSERT INTO Evento (Nombre, Fecha, Precio, Participantes, Descripcion, Direccion, Publico, EdadMinima, EdadMaxima, ImagenEvento, idCategoria, IdOrganizador)
                VALUES (@pNombre, @pFecha, @pPrecio, @pParticipantes, @pDescripcion, @pDireccion, @pPublico, @pEdadMinima, @pEdadMaxima, @pImagenEvento, @pidCategoria, @pIdOrganizador)
            `;
            const result = await pool.request()
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
                .input('pIdOrganizador', sql.Int, evento.Organizador)
                .query(insertQuery);
    
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error.message);
            // Handle the error here, e.g., return a custom error code or message
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