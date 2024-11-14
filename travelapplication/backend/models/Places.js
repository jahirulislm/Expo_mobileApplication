const mongoose = require("mongoose");

const PlaceSchema = new Schema(
  {
    country_id: { typeof: String, required: true },
    description: { typeof: String, required: true },
    imageUrl: { typeof: String, required: true },
    location: { typeof: String, required: true },
    rating: { typeof: Number, required: true },
    title: { typeof: Number, required: true },
    review: { typeof: String, required: true },
    latitude: { typeof: Number, required: true },
    longitude: { typeof: Number, required: true },
    // popular: [
    //   {
    //     type: mongoose.Schema.ObjectId,
    //     ref: "Hotel",
    //   },
    // ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("place", PlaceSchema);
