const router = require("express").Router();
const { verifyToken } = require("../controllers/verifyToken");
const userController = require("../controllers/user-controller");

router.delete("/", verifyToken, userController.deleteUser);
router.get("/", userController.getUser);

module.exports = router;
