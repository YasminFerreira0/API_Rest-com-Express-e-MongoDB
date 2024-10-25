import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController{
    static async listarLivros (req, res) {
        try{
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);

        }catch(error){
            res.status(500).json({ message: `${error.message} - falha na requisição` });
        }
    };

    static async listarLiproPorId (req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição do livro.` });
        }
    };

    static async cadastraLivro (req, res){
        const novoLivro = req.body;
        try{
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc }};
            const livroCriado = await livro.create(livroCompleto);

            res.status(201).json({ message: "livro cadastrado", livro: novoLivro });
        }catch(error){
            res.status(500).json({ message: `${error.message} - falha ao cadastrar livro` })
        }
    };

    static async atualizarLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "livro atualizado"});
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na atualização do livro.` });
        }
    };

    static async deletarLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: "livro deletado"});
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao deletar o livro.` });
        }
    };

    static async listarLivrosPorEditora (req, res) {
        const editora = req.query.editora;
        try {
            const livrosPorEditora = await livro.find({ editora: editora });
            res.status(200).json(livrosPorEditora);
        } catch (error) {
            res.ststus(500).json({ message: `${error.message} - falha na busca` });
        }
    };

};

export default LivroController;