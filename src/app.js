import express from "express";

const app = express();
app.use(express.json());//executa o express.json em todas as requisições que chegam e que sao manejadas pelo express. Converte string para json.

//middleware, utilizado para ter acesso as requisições e respostas, e realizar algumas ações nelas.

const livros = [
    {
        id: 1, 
        titulo: "Hobbit"
    },
    {
        id: 2, 
        titulo: "Senhor dos Aneis"
    }
]

function buscaLivro(id){
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    });
}


app.get("/", (req, res) => {
    res.status(200).send("Curso de NodeJS, API Rest");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);//jason e uma notação de objeto que tem como referencia um objeto javascript 
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);//parametro id
    res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("livro cadastrado");
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);//splice localiza um elemento no array e deleta ele
    res.status(200).send("livro deletado");
});

export default app;
//CRUD - Create(post), Read(get), Update (put), Delete
