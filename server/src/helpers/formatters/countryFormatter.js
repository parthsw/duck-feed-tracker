// Formatting the response objects for the front-end models

const formatCountries = countries => {
  return countries.map(country => {
    return {
      id: country.id,
      name: country.country_name,
    };
  });
};

module.exports = {
  formatCountries,
};
