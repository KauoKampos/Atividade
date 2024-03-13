// Importando HTTP
const http = require('http');
// Importando a função requestMain do arquivo routes.js
const { requestMain } = require('./router');

// Criando servidor
const server = http.createServer(requestMain);

// Definindo a porta
const PORT = 3000;

// Iniciando o servidor e ouvindo a porta
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
