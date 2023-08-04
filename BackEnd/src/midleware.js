import UsuariosService from "./services/usuarios-service.js";

class AutenticationMiddleWare {

    requiereAutenticacion = async function (req,res,next) {
        if (req.path.toLowerCase().startsWith("/eventos")) return next();
        //if (req.path.toLowerCase().startsWith("/api/pizzas")) return next();
        if (req.path.toLowerCase().startsWith("/api/ingredientes")) return next();
        if (req.path.toLowerCase().startsWith("/api/unidades")) return next();
    }
}
