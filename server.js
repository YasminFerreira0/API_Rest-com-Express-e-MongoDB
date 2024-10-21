//import http from "http";
import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;

/*const rotas = {
    "/": "Servidor com NodeJS", 
    "/livros": "Pagina livros", 
    "/autores": "pagina de autores"
}

const server = http.createServer((req, res) => {
    try{
        res.writeHeader(200, { "Content-Type": "text/plain"});
        res.end(rotas[req.url]);
    }catch(erro){
        throw erro;
    }
});*/

//server
app.listen(PORT, ()=>{
    console.log("Servidor escutando");
    
});
