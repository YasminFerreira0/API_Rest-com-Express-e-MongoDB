import { autor } from "../models/Autor.js";

class AutorController{
    static async listarAutor (req, res) {
        try{
            const listarAutor = await autor.find({});
            res.status(200).json(listarAutor);

        }catch(error){
            res.status(500).json({ message: `${error.message} - falha na requisição` });
        }
    };

    static async listarAutorPorId (req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição do autor.` });
        }
    };

    static cadastrarAutor = async (req, res) => {
        try {
          let autor = new autores(req.body);
    
          const autorResultado = await autor.save();
    
          res.status(201).send(autorResultado.toJSON());
        } catch (erro) {
          res.status(500).send({message: `${erro.message} - falha ao cadastrar Autor.`});
        }
    };

    static atualizarAutor = async (req, res) => {
        try {
          const id = req.params.id;
    
          await autores.findByIdAndUpdate(id, {$set: req.body});
    
          res.status(200).send({message: "Autor atualizado com sucesso"});
        } catch (erro) {
          res.status(500).send({message: erro.message});
        }
    };

    static deletarAutor = async (req, res) => {
        try {
          const id = req.params.id;
    
          await autores.findByIdAndDelete(id);
    
          res.status(200).send({message: "Autor removido com sucesso"});
        } catch (erro) {
          res.status(500).send({message: erro.message});
        }
    };

};

export default AutorController;
