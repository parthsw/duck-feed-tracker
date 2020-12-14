// Service layer for the country resource communicating with the database, transforming the response,
// and returning the results back to the controller

const config = require('src/config/index');
const countryFormatter = require('src/helpers/formatters/countryFormatter');

class CountryService {
  getAllCountries = `SELECT * FROM ${config.database.name}.COUNTRY`;

  constructor(database) {
    this.database = database;
  }

  async getCountries() {
    console.log(`Fetching list of all countries...`);
    try {
      let countries = await this.database.query(this.getAllCountries);
      let formattedCountries = countryFormatter.formatCountries(countries);
      return {
        success: true,
        statusCode: 200,
        items: formattedCountries,
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
