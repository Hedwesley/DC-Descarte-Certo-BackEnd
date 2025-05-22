// src/models/Educativo.js
const mongoose = require('mongoose');

const EducativoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  conteudo: {
    type: String,
    required: true,
  },
  imagem: String, // opcional
  fonte: String,  // URL opcional
}, { timestamps: true });

module.exports = mongoose.model('Educativo', EducativoSchema);
