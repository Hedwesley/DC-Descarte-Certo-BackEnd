const PontoColeta = require('../models/ponto.model');

// Criar um novo ponto de coleta
exports.criarPonto = async (req, res) => {
  try {
    const novoPonto = new PontoColeta(req.body);
    const pontoSalvo = await novoPonto.save();
    res.status(201).json(pontoSalvo);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

// Listar todos os pontos de coleta
exports.listarPontos = async (req, res) => {
  try {
    const pontos = await PontoColeta.find();
    res.status(200).json(pontos);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

// Obter um ponto por ID
exports.obterPontoPorId = async (req, res) => {
  try {
    const ponto = await PontoColeta.findById(req.params.id);
    if (!ponto) {
      return res.status(404).json({ erro: 'Ponto de coleta não encontrado' });
    }
    res.status(200).json(ponto);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};
