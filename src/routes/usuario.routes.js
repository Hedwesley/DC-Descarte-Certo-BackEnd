const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller');

// Rotas padrão
router.post('/', usuarioController.criarUsuario);
router.get('/', usuarioController.listarUsuarios);
router.get('/:id', usuarioController.buscarUsuarioPorId);
router.put('/:id', usuarioController.atualizarUsuario);
router.delete('/:id', usuarioController.deletarUsuario);
router.post('/login', usuarioController.loginUsuario); // Rota de login

module.exports = router;
