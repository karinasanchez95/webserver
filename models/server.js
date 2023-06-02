let express = require("express");
let wiew

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.routes();
        this.middlewares();

    }
    middlewares(){
        this.app.use(express.static("public"));

        //view engine
        this.app.set('view engine', 'ejs');

    }
    routes(){

        this.app.get("/hola", (req, res) => {
            res.send("<h1> Hola Mundo! </h1> <a href='index.html'> Regresar al inicio </a>");
        });

        this.app.get("/saludo", (req, res) => {
            let nombre = req.query.nombre;
            
            res.render("vista1", {nombre: nombre});

        });
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log("http://127.0.0.1:" + this.port);
        });

    }
}
module.exports = Server;