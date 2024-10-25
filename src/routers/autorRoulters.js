import express from "express";
import AutorController from "../controllers/autorControllers.js";

const routes = express.Router();

routes.get("/autores", AutorController.listarAutor);
routes.get("/autores/:id", AutorController.listarAutorPorId);
routes.post("/autores", AutorController.cadastraAutor);
routes.put("/autores/:id", AutorController.atualizarAutor);
routes.delete("/autores/:id", AutorController.deletarAutor);

export default routes;
