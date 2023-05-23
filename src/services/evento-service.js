import config from "../../dbconfig.js";
import sql from 'mssql';
import Evento from '../models/evento.js'


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

   
}
export default EventoService;
