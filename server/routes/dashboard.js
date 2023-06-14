const router = require("express").Router();
const dashboardController = require("../controllers/dashboardController");

/**
 * GET - /dashboard
 * Dashboard Page
 */

router.get("/dashboard", dashboardController.dashboardPage);

module.exports = router;
