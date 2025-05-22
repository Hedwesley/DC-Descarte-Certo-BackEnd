const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

// Criar novo usuário
router.post('/', async (req, res) => {
  try {
    const novoUsuario = new Usuario(req.body);
    await novoUsuario.save();
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(400).json({ erro: 'Erro ao cadastrar usuário' });
  }
});

// Listar todos os usuários
router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar usuários' });
  }
});

module.exports = router;
