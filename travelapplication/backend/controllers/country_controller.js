const Country = require("../models/Country_model");

module.exports = {
  addCountry: async (req, res, next) => {
    const { country, description, imageUrl, region, popular } = req.body;
    try {
      const newCountry = new Country({
        country,
        description,
        imageUrl,
        region,
      });

      await newCountry.save();
      res.status(201).json({ status: true });
    } catch (error) {
      return next(error);
    }
  },
  addPlacesToCountry: async (req, res, next) => {},
  getCountries: async (req, res, next) => {
    try {
      const countries = await Country.find(
        {},
        { country: 1, id: 1, imageUrl: 1 }
      );
      res.status(200).json(countries);
    } catch (error) {
      return next(error);
    }
  },
  getCountry: async (req, res, next) => {},
};
