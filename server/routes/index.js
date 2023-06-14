const router = require("express").Router();
const mainController = require("../controllers/mainController");

// App Routes

// GET - /
router.get("/", mainController.homePage);
router.get("/about", mainController.about);

module.exports = router;
