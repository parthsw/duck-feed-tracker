// Service layer for the country resource communicating with the database, transforming the response, 
// and returning the results back to the controller

const config = require('src/config/index');

class CountryService {
  getAllCountries = `SELECT * FROM ${config.database.name}.COUNTRY`;

  constructor(database) {
    this.database = database;
  }

  async getAll() {
    console.log(`Fetching list of all countries...`);
    try {
      let countries = await this.database.query(this.getAllCountries);
      return {
        success: true,
        statusCode: 200,
        items: countries,
      };
    } catch (error) {
      console.log(`Error fetching list of all countries... - ${error}`);
      return {
        success: false,
        statusCode: 500,
        error,
      };
    }
  }
}

module.exports = CountryService;
