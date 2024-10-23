import livro from "../models/livro.js"

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
        try{
            const novoLivro = await livro.create(req.body);
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

};

export default LivroController;