/**
 * Defining layers for country routes. It follows below track:
 * 1) Validating the schema for params or body or queryParams
 * 2) calling appropriate controller for the route
 */

const express = require('express');
const router = express.Router();

const Database = require('src/shared/database');
const DuckFeedService = require('src/services/duckFeedService');
const DuckFeedController = require('src/controllers/duckFeedController');

const config = require('src/config/index');
const database = new Database(config.database);
const duckFeedService = new DuckFeedService(database);
const duckFeedController = new DuckFeedController(duckFeedService);

router.route(`/feed`).get(duckFeedController.getDuckFeeds).post(duckFeedController.createDuckFeed);

module.exports = router;
