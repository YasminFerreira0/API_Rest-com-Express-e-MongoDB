import express from "express";

const app = express();

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

app.get("/", (req, res) => {
    res.status(200).send("Curso de NodeJS, API Rest");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

export default app;
