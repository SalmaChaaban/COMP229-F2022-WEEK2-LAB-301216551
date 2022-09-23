const express = require('express');
const app = express();

const server = express.createServer((req, res) => {

    "message": "Hello from NodeJS Application as json”
});

server.listen(3000);

console.log('Server running at http://localhost:3000/json');
