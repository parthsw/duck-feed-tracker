const dotenv = require('dotenv');

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

const envFound = dotenv.config({ path: `${__dirname}/./../.env` });
if (envFound.error) {
  throw new Error("Couldn't find .env file");
}

const configurables = {
  database: {
    port: parseInt(process.env.DB_PORT),
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    algorithm: process.env.JWT_ALGO,
    duration: process.env.DURATION,
  },
  api: {
    prefix: '/api',
  },
};
module.exports = configurables;
