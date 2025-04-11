const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const port = 8080

app.use(express.static(path.join(__dirname, 'public')));

wss.on('connection', (ws) => {
  console.log('Cliente online!');

  ws.send('Olá do servidor! 😎');

  ws.on('message', (message) => {
    const msgString = message.toString();
    console.log('Mensagem recebida do cliente:', msgString);
    ws.send(`Você disse: ${msgString}`);
  });

  ws.on('close', () => {
    console.log('Cliente offline');
  });

});

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});