import express from "express";
import livros from "./livrosRoulters.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send("Curso de NodeJS, API Rest");
    });

    app.use(express.json(), livros);
}

export default routes;