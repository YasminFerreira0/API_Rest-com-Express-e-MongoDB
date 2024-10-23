import express from "express";
import LivroController from "../controllers/livroControllers.js";

const routes = express.Router();

routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/:id", LivroController.listarLiproPorId);
routes.post("/livros", LivroController.cadastraLivro);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.deletarLivro);

export default routes;
