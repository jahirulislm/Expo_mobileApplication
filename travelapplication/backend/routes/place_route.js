const router = require("express").Router();
const placeController = require("../controllers/PlaceController");
const { verifyToken } = require("../middlewares/jwt_token");

router.post("/", verifyToken, placeController.addPlace);
router.get("/", verifyToken, placeController.getPlace);
router.get("/:id", verifyToken, placeController.getPlacesByCountry); // TODO:
router.get("/:byCountry/:id", verifyToken, placeController.getPlacesByCountry); // TODO:

module.exports = router;
