// src/models/Usuario.js
const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  senha: {
    type: String,
    required: true,
  },
  record: {
    type: Number,
    required: false, //agora opcional
  },
  tipo: {
    type: String,
    enum: ['comum', 'administrador'],
    default: 'comum',
  },
}, { timestamps: true });

module.exports = mongoose.model('Usuario', UsuarioSchema);
