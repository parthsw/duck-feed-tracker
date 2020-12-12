const express = require('express');
const router = express.Router();

const Database = require('src/shared/database');
const FoodService = require('src/services/foodService');
const FoodController = require('src/controllers/foodController');

const config = require('src/config/index');
const database = new Database(config.database);
const foodService = new FoodService(database);
const foodController = new FoodController(foodService);

router.route(`/type`).get(foodController.getFoodTypes);

module.exports = router;
