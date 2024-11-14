const User = require("../models/User");

module.exports = {
  deleteUser: async (req, res, next) => {
    try {
      await User.findByIdAndDelete(req.user.id);
      res
        .status(200)
        .json({ status: true, message: "User deleted successfully" });
    } catch (error) {
      return next(error);
    }
  },
};
