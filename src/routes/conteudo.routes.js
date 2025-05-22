const express = require('express');
const router = express.Router();
const conteudoController = require('../controllers/conteudo.controller');

// Rotas para conteúdos educativos
router.post('/', conteudoController.criarConteudo);         // POST /api/conteudos
router.get('/', conteudoController.listarConteudos);        // GET /api/conteudos
router.get('/:id', conteudoController.obterConteudoPorId);  // GET /api/conteudos/:id

module.exports = router;
