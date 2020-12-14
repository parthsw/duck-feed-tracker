// Formatting the response objects for the front-end models

const formatFoodTypes = foodTypes => {
  return foodTypes.map(foodType => {
    return {
      id: foodType.id,
      type: foodType.food_type,
    };
  });
};

module.exports = {
  formatFoodTypes,
};
