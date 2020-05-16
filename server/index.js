const express = require('express');
const server = express();
const PORT = process.env.PORT || 4200;
// Endpoints
server.get('/', (req, res) => res.send('Hello World!'));


// exportar server para poder requerirlo desde otros archivos
module.exports = { server, PORT };