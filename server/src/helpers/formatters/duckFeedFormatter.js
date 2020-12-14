// Formatting the response objects for the front-end models

const formatDuckFeeds = duckFeeds => {
  return duckFeeds.map(duckFeed => {
    return {
      duckFeedId: duckFeed.id,
      foodTypeId: duckFeed.food_type_id,
      foodDescription: duckFeed.food_description,
      foodQtyGms: duckFeed.food_qty_gms,
      noOfDucks: duckFeed.no_of_ducks,
      countryId: duckFeed.country_id,
      feedTime: duckFeed.feed_time,
      feedDate: duckFeed.feed_date,
      parkLocation: duckFeed.park_location,
      isRepetitive: duckFeed.is_repetitive,
      participantName: duckFeed.participant_name,
      participantEmail: duckFeed.participant_email,
      countryName: duckFeed.country_name,
      foodType: duckFeed.food_type,
    };
  });
};

module.exports = {
  formatDuckFeeds,
};
