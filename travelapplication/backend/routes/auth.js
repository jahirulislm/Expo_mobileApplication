const router = require("express").Router();
const authController = require("../controllers/AuthController");

router.post("/register", function (req, res) {
  authController.createUser;
});
router.post("/login", function (req, res) {
  authController.loginUser;
});

module.exports = router;
