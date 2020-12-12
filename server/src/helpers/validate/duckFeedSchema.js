const { Joi } = require('express-validation');

const createDuckFeedSchema = {
  body: Joi.object({
    foodTypeId: Joi.number().required(),
    foodDescription: Joi.string().required(),
    foodQtyGms: Joi.number().required().greater(0),
    noOfDucks: Joi.number().required().greater(0),
    countryId: Joi.string().required(),
    feedTime: Joi.string().required(),
    feedDate: Joi.string().required(),
    parkLocation: Joi.string().required(),
    isRepetitive: Joi.boolean().required(),
  }).options({ abortEarly: false }),
};

module.exports = {
  createDuckFeed: createDuckFeedSchema,
};
