function ingresoUsers(req,res,next){
    let usuarios = ["Ada","Greta","Vim","Tim"];
    let busqueda = usuarios.find(usuario => usuario === req.query.user)
    if(busqueda){
        res.send("Hola Admin:" + busqueda);

    }else{
        res.send("No tienes los privilegios para ingresar");
    }
    next();
}
module.exports = ingresoUsers;