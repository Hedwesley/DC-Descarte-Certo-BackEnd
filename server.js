// server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');

require('dotenv').config();

const app = express();
connectDB(); // Conexão com o banco

app.use(cors());
app.use(express.json());

// Registro das rotas
app.use('/api/usuarios', require('./src/routes/usuario.routes'));
app.use('/api/denuncias', require('./src/routes/denuncia.routes'));
app.use('/api/pontos', require('./src/routes/ponto.routes'));
app.use('/api/conteudos', require('./src/routes/conteudo.routes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
