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
                                            .input('pidCategoria', sql.Int, evento.IdCategoria)


                                            .query('Insert into Evento (Nombre, Fecha, Precio, Participantes, Descripcion, Direccion, Publico, EdadMinima, EdadMaxima, ImagenEvento, IdCategoria) Values (@pNombre, @pFecha, @pPrecio, @pParticipantes, @pDescripcion, @pDireccion, @pPublico, @pEdadMinima, @pEdadMaxima, @pImagenEvento, @pidCategoria)')
            rowsAffected = result.rowsAffected;
        } catch (error) {
            console.log(error);
        }
                                            
        return rowsAffected;
    }

    AsistentesXEvento = async (idEvento) => {
        let returnEntity = null;

        console.log('estoy en:  EventoService.VerParticipantesEvento(id)');
        try {
            let pool   = await sql.connect(config);
            let result = await pool.request()
                                            .input('pId', sql.Int, idEvento)
            .query(`
            SELECT	IdUsuario, IdEvento, Usuario.NombreUsuario
                            
                        FROM Participante_x_Evento
                        INNER JOIN Evento ON Participante_x_Evento.IdEvento = Evento.Id
                        INNER JOIN Usuario ON Participante_x_Evento.IdUsuario = Usuario.Id
                        
                        WHERE IdEvento = @pId`);

                        returnEntity = result.recordsets[0]; //

        } catch (error) {
            res.status(404).send('No se encontró papi(404)!!');
        }
                                            
        return returnEntity;
    }

    
}
export default EventoService;
