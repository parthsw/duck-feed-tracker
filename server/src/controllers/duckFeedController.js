// Controller class handling duck feed resource and delegating business work to the service layer

class DuckFeedController {
  constructor(duckFeedService) {
    this.duckFeedService = duckFeedService;
    this.getDuckFeeds = this.getDuckFeeds.bind(this);
    this.createDuckFeed = this.createDuckFeed.bind(this);
  }

  async getDuckFeeds(req, res) {
    let response = await this.duckFeedService.getDuckFeeds();
    res.status(response.statusCode).send(response);
  }

  async createDuckFeed(req, res) {
    let response = await this.duckFeedService.createDuckFeed(req.body);
    res.status(response.statusCode).send(response);
  }
}

module.exports = DuckFeedController;
