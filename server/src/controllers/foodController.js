// Controller class handling food resource and delegating business work to the service layer

class FoodController {
  constructor(foodService) {
    this.foodService = foodService;
    this.getFoodTypes = this.getFoodTypes.bind(this);
  }

  async getFoodTypes(req, res) {
    let response = await this.foodService.getFoodTypes();
    res.status(response.statusCode).send(response);
  }
}

module.exports = FoodController;
