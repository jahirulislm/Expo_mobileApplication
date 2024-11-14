const Place = require("../models/Places");

module.exports = {
  addPlace: async (req, res, next) => {
    const {
      country_id,
      description,
      imageUrl,
      location,
      title,
      rating,
      latitude,
      longitude,
    } = req.body;
    try {
      const newPlace = new Place({
        country_id,
        description,
        imageUrl,
        location,
        title,
        rating,
        latitude,
        longitude,
      });
      await newPlace.save();
      res.status(201).json({ message: "Place added successfully" });
    } catch (error) {
      return next(error);
    }
  },

  getPlaces: async (req, res, next) => {
    try {
      const places = await Place.find(
        {},
        "id review rating imageUrl title country_id"
      );

      res.status(200).json(places);
    } catch (error) {
      return next(error);
    }
  },

  getPlace: async (req, res, next) => {
    const placeId = req.params.id;
    try {
      const place = await place.findById(placeId, {
        createdAt: 0,
        updatedAt: 0,
        __v: 0,
      });
      if (!place) {
        return res.status(404).json({ message: "Place not found" });
      }
      res.status(200).json(place);
    } catch (error) {
      return next(error);
    }
  },
};
