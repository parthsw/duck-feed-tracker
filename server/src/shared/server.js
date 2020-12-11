const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { ValidationError } = require('express-validation');

const server = express();

server.use(cors());
server.use(bodyParser.json());

server.get('/', (req, res) => res.sendStatus(200));

server.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }
  return res.status(500).json(err);
});

module.exports = server;
