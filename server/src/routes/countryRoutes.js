const express = require('express');
const router = express.Router();

const Database = require('src/shared/database');
const CountryService = require('src/services/countryService');
const CountryController = require('src/controllers/countryController');

const config = require('src/config/index');
const database = new Database(config.database);
const countryService = new CountryService(database);
const countryController = new CountryController(countryService);

router.route(`/`).get(countryController.getCountries);

module.exports = router;
