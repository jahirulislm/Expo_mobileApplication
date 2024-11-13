const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  profileImage: {
    type: String,
    default: "default_profile_image.jpg",
  },
});

module.exports = mongoose.model("User", UserSchema);
