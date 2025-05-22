const express = require('express');
const router = express.Router();
const denunciaController = require('../controllers/denuncia.controller');

// Rotas para denúncias
router.post('/', denunciaController.criarDenuncia);      // POST /api/denuncias
router.get('/', denunciaController.listarDenuncias);     // GET /api/denuncias
router.get('/:id', denunciaController.obterDenunciaPorId); // GET /api/denuncias/:id

module.exports = router;
