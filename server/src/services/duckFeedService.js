// Service layer for the duck feed resource communicating with the database, transforming the response,
// and returning the results back to the controller

const mysql = require('mysql');
const config = require('src/config/index');
const duckFeedFormatter = require('src/helpers/formatters/duckFeedFormatter');
class DuckFeedService {
  getAllDuckFeeds = `SELECT 
    A.id,
    C.food_type, 
    A.food_description, 
    A.food_qty_gms, 
    A.no_of_ducks, 
    B.country_name, 
    A.park_location, 
    A.feed_time, 
    A.feed_date FROM 
    ((${config.database.name}.duck_feed_dataset AS A INNER JOIN ${config.database.name}.country as B ON A.country_id = B.id) 
      INNER JOIN 
      ${config.database.name}.duck_food as C ON A.food_type_id = C.id);`;

  regularScheduleDuckFeeds = `SELECT * FROM ${config.database.name}.duck_feed_dataset WHERE is_repetitive = 1`;

  duckFeed = `INSERT 
    INTO 
    ${config.database.name}.duck_feed_dataset(
      food_type_id, 
      food_description, 
      food_qty_gms, 
      no_of_ducks, 
      country_id, 
      feed_time, 
      feed_date, 
      park_location, 
      is_repetitive, 
      participant_name, 
      participant_email) 
      VALUES(?,?,?,?,?,?,?,?,?,?,?)`;

  constructor(database) {
    this.database = database;
  }

  async getDuckFeeds() {
    console.log(`Fetching list of all duck feeding dataset...`);
    try {
      let duckFeeds = await this.database.query(this.getAllDuckFeeds);
      let formattedDuckFeeds = duckFeedFormatter.formatDuckFeeds(duckFeeds);
      console.log(`Returning ${formattedDuckFeeds.length} records...`);
      return {
        success: true,
        statusCode: 200,
        items: formattedDuckFeeds,
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

  async getRegularScheduleDuckFeeds() {
    console.log(`Fetching list of duck feeding dataset having regular schedule turned on...`);
    try {
      let regularScheduleDuckFeeds = await this.database.query(this.regularScheduleDuckFeeds);
      let formattedRegularScheduleDuckFeeds = duckFeedFormatter.formatDuckFeeds(regularScheduleDuckFeeds);
      console.log(`Returning ${formattedRegularScheduleDuckFeeds.length} records...`);
      return {
        success: true,
        statusCode: 200,
        items: formattedRegularScheduleDuckFeeds,
      };
    } catch (error) {
      console.log(`Fetching list of duck feeding dataset having regular schedule turned on... - ${error}`);
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
      console.log(`Created a duck feed entry...`);
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
