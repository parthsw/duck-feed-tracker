var cron = require('node-cron');

const Database = require('src/shared/database');
const DuckFeedService = require('src/services/duckFeedService');

const config = require('src/config/index');
const database = new Database(config.database);
const duckFeedService = new DuckFeedService(database);

(function () {
  cron.schedule('0 0 0 * * *', async function () {
    //runs every day at 12:00 AM
    try {
      const getRegularScheduleDuckFeeds = await duckFeedService.getRegularScheduleDuckFeeds();
      const regularScheduleDuckFeeds = getRegularScheduleDuckFeeds.items;

      if (regularScheduleDuckFeeds.length > 0) {
        regularScheduleDuckFeeds.forEach(async function (item) {
          item.isRepetitive = 0;
          await duckFeedService.createDuckFeed(item);
        });
      }
    } catch (error) {
      console.error(error);
    }
  });
})();
