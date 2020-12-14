const dotenv = require('dotenv');

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

const envFound = dotenv.config({ path: `${__dirname}/./../.env` });
if (envFound.error) {
  throw new Error("Couldn't find .env file");
}

const configurables = {
  database: {
    port: 3306,
    host: "duckfeed.cqwmzadqv6u2.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "Welcom3110",
    name: "duck_feeding_tracker",
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
