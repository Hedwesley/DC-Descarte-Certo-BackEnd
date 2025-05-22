const Conteudo = require('../models/conteudo.model');

// Criar novo conteúdo educativo
exports.criarConteudo = async (req, res) => {
  try {
    const novoConteudo = new Conteudo(req.body);
    const conteudoSalvo = await novoConteudo.save();
    res.status(201).json(conteudoSalvo);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

// Listar todos os conteúdos
exports.listarConteudos = async (req, res) => {
  try {
    const conteudos = await Conteudo.find();
    res.status(200).json(conteudos);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

// Obter conteúdo por ID
exports.obterConteudoPorId = async (req, res) => {
  try {
    const conteudo = await Conteudo.findById(req.params.id);
    if (!conteudo) {
      return res.status(404).json({ erro: 'Conteúdo não encontrado' });
    }
    res.status(200).json(conteudo);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};
