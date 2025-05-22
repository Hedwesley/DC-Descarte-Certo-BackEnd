# 🛠️ DC – Descarte Certo | Back-End

Este é o repositório do back-end do projeto Descarte Certo (DC), uma plataforma para promover o descarte correto de resíduos sólidos em São Luís - MA. A API foi construída com Node.js, Express e MongoDB, fornecendo endpoints para autenticação de usuários, denúncias e acesso seguro a funcionalidades exclusivas.

---

## 🚀 Funcionalidades da API

- 👤 Cadastro e login de usuários
- 🔒 Autenticação com tokens JWT
- 📁 Criação e consulta de denúncias
- 🧾 Validação de sessão via token
- 🧠 Middleware de segurança para rotas privadas
- 🔗 Integração com o front-end em consumo de dados via JSON

---

## 🧪 Rotas Principais

| Método | Rota               | Descrição                           | Protegida |
|--------|--------------------|--------------------------------------|-----------|
| POST   | /api/usuarios      | Cadastra novo usuário                | ❌        |
| POST   | /api/login         | Realiza login                        | ❌        |
| GET    | /api/usuarios/me   | Retorna dados do usuário logado      | ✅        |
| POST   | /api/denuncias     | Cria nova denúncia                   | ✅        |
| GET    | /api/denuncias     | Lista todas as denúncias             | ✅        |

---

## 🧰 Tecnologias Utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- JSON Web Token (JWT)
- Dotenv
- Cors
- Nodemon (desenvolvimento)

---

## 📦 Instalação Local

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/DC-backend.git
cd DC-backend
Instale as dependências:

bash
Copiar
Editar
npm install
Crie um arquivo .env com as variáveis:

ini
Copiar
Editar
PORT=3000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=sua_chave_secreta
Inicie o servidor:

bash
Copiar
Editar
npm run dev
Servidor disponível em: http://localhost:3000

📁 Estrutura de Arquivos
pgsql
Copiar
Editar
/
├── controllers/
│   ├── authController.js
│   └── denunciaController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── Usuario.js
│   └── Denuncia.js
├── routes/
│   ├── authRoutes.js
│   └── denunciaRoutes.js
├── .env
├── server.js
├── package.json
🔐 Segurança
As rotas protegidas exigem header Authorization com token válido:
Authorization: Bearer {seu_token_jwt}

Senhas são armazenadas com bcrypt e não ficam expostas.

🌍 Integração com o Front-End
O front-end consome a API via fetch/AJAX com o token JWT no localStorage.

A API responde com status HTTP padrão (200, 401, 403, 500 etc).

👨‍💻 Desenvolvedores
Este back-end foi desenvolvido como parte do projeto Descarte Certo – Desafio 4 do Programa Trilhas 2B:

👤 Hedwesley – Node.js & MongoDB

👤 Hedwesley – Integração Front x Back

📄 Licença
Este projeto é livre para fins educacionais e sociais, sem fins lucrativos.

🟢 Projeto em constante evolução com foco em sustentabilidade, cidadania e tecnologia!
