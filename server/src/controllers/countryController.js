// Controller class handling country resource and delegating business work to the service layer

class CountryController {
  constructor(countryService) {
    this.countryService = countryService;
    this.getCountries = this.getCountries.bind(this);
  }

  async getCountries(req, res) {
    let response = await this.countryService.getCountries();
    res.status(response.statusCode).send(response);
  }
}

module.exports = CountryController;
