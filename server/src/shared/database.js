// Wrapper around `mysql` package to return promise.

const mysql = require('mysql');

class Database {
  constructor(config) {
    this.connection = mysql.createConnection(config);
  }

  query(sql, args) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err, result) => {
        if (err) {
          return reject(err);
        }
        return resolve(result);
      });
    });
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.connection.connect(err => {
        if (err) {
          return reject(err);
        }
        return resolve({
          success: true,
          message: 'Database connection established.',
        });
      });
    });
  }

  terminate() {
    return new Promise((resolve, reject) => {
      this.connection.end(err => {
        if (err) {
          return reject(err);
        }
        return resolve({
          success: true,
          message: 'Database connection closed.',
        });
      });
    });
  }
}

module.exports = Database;
