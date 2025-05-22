const Denuncia = require('../models/denuncia.model');

// Criar uma nova denúncia
exports.criarDenuncia = async (req, res) => {
  try {
    const novaDenuncia = new Denuncia(req.body);
    const denunciaSalva = await novaDenuncia.save();
    res.status(201).json(denunciaSalva);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

// Listar todas as denúncias
exports.listarDenuncias = async (req, res) => {
  try {
    const denuncias = await Denuncia.find().populate('usuario', 'nome email');
    res.status(200).json(denuncias);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

// Obter uma denúncia por ID
exports.obterDenunciaPorId = async (req, res) => {
  try {
    const denuncia = await Denuncia.findById(req.params.id).populate('usuario', 'nome email');
    if (!denuncia) {
      return res.status(404).json({ erro: 'Denúncia não encontrada' });
    }
    res.status(200).json(denuncia);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};
