const startDatabase = require('../database'); 


exports.mostrarFormulario = (req, res) => {
    res.render('formulario');
};


exports.cadastrarProduto = async (req, res) => {
    const { nome, valor, descricao } = req.body;
    const db = await startDatabase();

    try {
        await db.run(
            'INSERT INTO produtos (nome, valor, descricao) VALUES (?, ?, ?)',
            [nome, valor, descricao]
        );
        console.log(`Produto cadastrado: ${nome}`);

       
        res.render('formulario', { sucesso: true, nome });
    } catch (err) {
        console.error('Erro ao cadastrar produto:', err.message);
        res.render('formulario', { erro: true });
    }
};
