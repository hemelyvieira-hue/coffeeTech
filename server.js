/* const express = require('express');
const connectDB = require('./db');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

// Remover a rota que bloqueia o index
// (Você só coloca se realmente quiser)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });

  } catch (error) {
    console.error("Falha ao iniciar o servidor:", error);
  }
};

startServer();
 */

const express = require('express');
// BUG 1: Falta importar a conexão com o banco
const connectDB = require('./db');

// BUG 2: Falta criar a "loja" (instância do app)
// Dica: const app = ...
const app = express();

const PORT = 3000;

// BUG 3: O Express não sabe ler JSON (falta middleware)
app.use(express.json());
// BUG 4: O site (index.html) não carrega porque não definimos a pasta pública
app.use(express.static('public'));
// BUG 5: Esta rota está "roubando" o lugar do index.html
/* app.get('/', (req, res) => {
  res.send('Erro! Você caiu na rota errada e o site não carregou.');
}); */

const startServer = async () => {
  try {
    // BUG 6: O servidor tenta abrir a porta ANTES de conectar no banco
    await connectDB();

    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });

    
  } catch (error) {
    console.error('Falha ao iniciar:', error);
  }
};

// BUG 7: A função existe, mas ninguém mandou ela rodar.
startServer();

