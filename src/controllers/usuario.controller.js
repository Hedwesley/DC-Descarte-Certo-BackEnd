const Usuario = require('../models/Usuario');

// Criar um novo usuário
exports.criarUsuario = async (req, res) => {
  try {
    const usuario = new Usuario(req.body);
    const novoUsuario = await usuario.save();
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(400).json({ erro: 'Erro ao criar usuário', detalhes: error.message });
  }
};

// Listar todos os usuários
exports.listarUsuarios = async (_req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar usuários', detalhes: error.message });
  }
};

// Buscar um usuário por ID
exports.buscarUsuarioPorId = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar usuário', detalhes: error.message });
  }
};

// Atualizar um usuário por ID
exports.atualizarUsuario = async (req, res) => {
  try {
    const usuarioAtualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!usuarioAtualizado) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }
    res.status(200).json(usuarioAtualizado);
  } catch (error) {
    res.status(400).json({ erro: 'Erro ao atualizar usuário', detalhes: error.message });
  }
};

// Deletar um usuário por ID
exports.deletarUsuario = async (req, res) => {
  try {
    const usuarioRemovido = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuarioRemovido) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }
    res.status(200).json({ mensagem: 'Usuário removido com sucesso' });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao remover usuário', detalhes: error.message });
  }
};

// Login de usuário
exports.loginUsuario = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(401).json({ erro: 'Usuário não encontrado' });
    }

    // Comparação simples — para produção, use bcrypt!
    if (senha !== usuario.senha) {
      return res.status(401).json({ erro: 'Senha incorreta' });
    }

    // Sucesso no login
    res.status(200).json({
      mensagem: 'Login bem-sucedido',
      usuarioId: usuario._id,
      nome: usuario.nome,
      email: usuario.email,
      record: usuario.record // <-- adiciona o campo
    });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao fazer login', detalhes: error.message });
  }
};