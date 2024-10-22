import express from "express";
import LivroController from "../controllers/livroControllers.js";

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);

routes.post("/livros", LivroController.cadastraLivro);

export default routes;