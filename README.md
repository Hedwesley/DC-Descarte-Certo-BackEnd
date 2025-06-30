
# 🛠️ DC – Descarte Certo | Back-End

Este é o repositório do back-end do projeto Descarte Certo (DC), uma plataforma criada para promover o descarte correto de resíduos sólidos, com foco em cidades como São Luís – MA. A API foi construída com Node.js, Express e MongoDB, fornecendo endpoints para cadastro, login, denúncias, conteúdo educativo e pontos de coleta.

---

## 🚀 Funcionalidades da API

- 👤 Cadastro e login de usuários com nome, e-mail, senha e campo opcional "record"
- 🗺️ Atualização do campo record para ranqueamento do usuário
- 📢 Cadastro e listagem de denúncias de descarte irregular
- 📚 Cadastro e consulta de conteúdos educativos
- 📍 Registro e listagem de pontos de coleta
- 🔗 Integração com o front-end via JSON

---

## 🔌 Endpoints principais

| Método | Rota                    | Descrição                                     |
|--------|-------------------------|-----------------------------------------------|
| POST   | /api/usuarios           | Cria um novo usuário                          |
| POST   | /api/usuarios/login     | Realiza login do usuário                      |
| GET    | /api/usuarios           | Lista todos os usuários                       |
| PUT    | /api/usuarios/:id       | Atualiza dados de um usuário (ex: record)     |
| DELETE | /api/usuarios/:id       | Remove um usuário                             |
| POST   | /api/denuncias          | Cria nova denúncia                            |
| GET    | /api/denuncias          | Lista todas as denúncias                      |
| POST   | /api/conteudos          | Adiciona conteúdo educativo                   |
| GET    | /api/conteudos          | Lista conteúdos educativos                    |
| POST   | /api/pontos             | Registra novo ponto de coleta                 |
| GET    | /api/pontos             | Lista todos os pontos de coleta               |

---

## 🧰 Tecnologias Utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- JSON Web Token (JWT)
- Dotenv
- Cors
- Nodemon (ambiente de desenvolvimento)

---

## 📦 Instalação local

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/DC-Descarte-Certo-BackEnd.git
cd DC-Descarte-Certo-BackEnd
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` com o conteúdo:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

4. Inicie o servidor:

```bash
node server.js
```

> O servidor será iniciado em http://localhost:5000

---

## 📁 Estrutura de pastas

```
/
├── server.js
├── .env
├── package.json
└── src/
    ├── config/
    │   └── db.js
    ├── controllers/
    │   ├── usuario.controller.js
    │   ├── denuncia.controller.js
    │   ├── conteudo.controller.js
    │   └── ponto.controller.js
    ├── models/
    │   ├── Usuario.js
    │   ├── denuncia.model.js
    │   ├── conteudo.model.js
    │   └── ponto.model.js
    └── routes/
        ├── usuario.routes.js
        ├── denuncia.routes.js
        ├── conteudo.routes.js
        └── ponto.routes.js
```

---

## 🧪 Testando o endpoint de atualização (record)

Para atualizar apenas o campo record de um usuário logado:

```http
PUT /api/usuarios/{id}
Content-Type: application/json

{
  "record": 5
}
```

---

## 🌐 Deploy

- Front-end hospedado na Vercel
- Back-end (esta API) hospedado no Render: https://dc-descarte-certo-backend.onrender.com

---

## 👨‍💻 Desenvolvedor

Projeto criado por:

- Hedwesley Gusmão – Back-End com Node.js, MongoDB & Integração com Front-End

---

## 📄 Licença

Este projeto é de uso livre para fins educacionais e sociais. Sem fins lucrativos.

🟢 Em constante evolução com foco em sustentabilidade, cidadania e tecnologia.
