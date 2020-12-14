const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { ValidationError } = require('express-validation');

require('src/jobs/regularFeedScheduler');

const countryRoutes = require('src/routes/countryRoutes');
const foodRoutes = require('src/routes/foodRoutes');
const duckFeedRoutes = require('src/routes/duckFeedRoutes');

const server = express();

server.use(cors());
server.use(bodyParser.json());

server.get('/', (req, res) => res.sendStatus(200));

server.use('/api/country', countryRoutes);
server.use('/api/food', foodRoutes);
server.use('/api/duck', duckFeedRoutes);

server.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }
  return res.status(500).json(err);
});

module.exports = server;
