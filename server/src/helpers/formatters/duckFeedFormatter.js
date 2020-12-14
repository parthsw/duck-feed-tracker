// Formatting the response objects for the front-end models

const formatDuckFeeds = duckFeeds => {
  return duckFeeds.map(duckFeed => {
    return {
      id: foodType.id,
      type: foodType.food_type,
    };
  });
};

module.exports = {
    formatDuckFeeds,
};
