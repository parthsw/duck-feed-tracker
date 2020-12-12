// Service layer for the food resource communicating with the database, transforming the response,
// and returning the results back to the controller

const config = require('src/config/index');

class FoodService {
  getAllFoodTypes = `SELECT * FROM ${config.database.name}.DUCK_FOOD`;

  constructor(database) {
    this.database = database;
  }

  async getFoodTypes() {
    console.log(`Fetching list of available food types...`);
    try {
      let foodTypes = await this.database.query(this.getAllFoodTypes);
      return {
        success: true,
        statusCode: 200,
        items: foodTypes,
      };
    } catch (error) {
      console.log(`Error fetching list of all available food types... - ${error}`);
      return {
        success: false,
        statusCode: 500,
        error,
      };
    }
  }
}

module.exports = FoodService;
