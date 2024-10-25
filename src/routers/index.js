import express from "express";
import livros from "./livrosRoulters.js";
import autor from "./autorRoulters.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send("Curso de NodeJS, API Rest");
    });

    app.use(express.json(), livros, autor);
}

export default routes;