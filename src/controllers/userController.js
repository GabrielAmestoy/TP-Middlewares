module.exports = {
    login:(req,res) =>{
        return res.render("login");
    },
    register:(req,res) =>{
        res.render("register");
    }         
}