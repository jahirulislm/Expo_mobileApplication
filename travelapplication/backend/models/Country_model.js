const mongoose = require("mongoose");

const CountrySchema = new Schema(
  {
    country: { typeof: "string", required: true },
    description: { typeof: "string", required: true },
    imageUrl: { typeof: "string", required: true },
    region: { typeof: "string", required: true },
    popular: [
      {
        type: Schema.Types.ObjectId,
        ref: "Place",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("country", CountrySchema);
