const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.get('/', produtoController.mostrarFormulario);
router.post('/cadastrar', produtoController.cadastrarProduto);

module.exports = router;
