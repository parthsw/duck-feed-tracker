// Service layer for the duck feed resource communicating with the database, transforming the response, 
// and returning the results back to the controller

const mysql = require('mysql');
const config = require('src/config/index');

class DuckFeedService {
  getAllDuckFeeds = `SELECT * FROM ${config.database.name}.DUCK_FEED_DATASET`;
  duckFeed = `INSERT INTO ${config.database.name}.DUCK_FEED_DATASET(food_type_id, food_description, food_qty_gms, no_of_ducks, country_id, feed_time, feed_date, park_location, is_repetitive, participant_name, participant_email) VALUES(?,?,?,?,?,?,?,?,?,?,?)`;

  constructor(database) {
    this.database = database;
  }

  async getDuckFeeds() {
    console.log(`Fetching list of all duck feeding dataset...`);
    try {
      let duckFeeds = await this.database.query(this.getAllDuckFeeds);
      return {
        success: true,
        statusCode: 200,
        items: duckFeeds,
      };
    } catch (error) {
      console.log(`Error fetching list of all duck feeding dataset... - ${error}`);
      return {
        success: false,
        statusCode: 500,
        error,
      };
    }
  }

  async createDuckFeed(duckFeed) {
    const createDuckFeedQuery = mysql.format(this.duckFeed, [
      duckFeed.foodTypeId,
      duckFeed.foodDescription,
      duckFeed.foodQtyGms,
      duckFeed.noOfDucks,
      duckFeed.countryId,
      duckFeed.feedTime,
      duckFeed.feedDate,
      duckFeed.parkLocation,
      duckFeed.isRepetitive,
      duckFeed.participantName,
      duckFeed.participantEmail,
    ]);
    console.log(`Creating a duck feed entry...`);
    try {
      let result = await this.database.query(createDuckFeedQuery);
      return {
        success: true,
        statusCode: 200,
        result,
      };
    } catch (error) {
      console.log(`Error creating a duck feed entry... - ${error}`);
      return {
        success: false,
        statusCode: 500,
        error,
      };
    }
  }
}

module.exports = DuckFeedService;
