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

   
}
export default EventoService;
