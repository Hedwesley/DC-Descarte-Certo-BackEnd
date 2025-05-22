// src/models/PontoColeta.js
const mongoose = require('mongoose');

const PontoColetaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  endereco: {
    type: String,
    required: true,
  },
  tipoResiduos: [String], // Ex: ['plástico', 'metal']
  coordenadas: {
    lat: Number,
    lng: Number,
  }
}, { timestamps: true });

module.exports = mongoose.model('PontoColeta', PontoColetaSchema);
