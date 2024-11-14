const User = require("../models/User");
var jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");

function createUser(req, res, next) {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt("my message", "secret key 123").toString(),
  });
  try {
    newUser.save();
    res
      .status(201)
      .json({ status: true, message: "User created successfully" });
  } catch (error) {
    return next(error);
  }

  loginUser: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });

      if (!user) {
        return res
          .status(401)
          .json({ status: true, message: "User not found" });
      }

      const decryptPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.SECRET_KEY
      ).toString(CryptoJS.enc.Utf8);

      if (decryptPassword != req.body.password) {
        return res
          .status(401)
          .json({ status: true, message: "Wrong password" });
      }

      const userToken = jwt.sign(
        {
          id: user._id,
        },
        process.env.SECRET_KEY,
        { expiresIn: "21h" }
      );

      const user_Id = user.id;

      res.status(200).json({ status: true, id: user_Id, token: userToken });
    } catch (error) {
      return next(error);
    }
  };
}
