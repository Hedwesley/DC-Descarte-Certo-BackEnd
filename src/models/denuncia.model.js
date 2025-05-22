// src/models/Denuncia.js
const mongoose = require('mongoose');

const DenunciaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  endereco: {
    type: String,
    required: true,
  },
  imagem: {
    type: String, // URL ou base64
  },
  status: {
    type: String,
    enum: ['pendente', 'em análise', 'resolvido'],
    default: 'pendente',
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
  },
}, { timestamps: true });

module.exports = mongoose.model('Denuncia', DenunciaSchema);
