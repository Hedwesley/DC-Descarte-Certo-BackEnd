const express = require('express');
const router = express.Router();
const pontoController = require('../controllers/ponto.controller');

// Rotas para pontos de coleta
router.post('/', pontoController.criarPonto);          // POST /api/pontos
router.get('/', pontoController.listarPontos);         // GET /api/pontos
router.get('/:id', pontoController.obterPontoPorId);   // GET /api/pontos/:id

module.exports = router;
