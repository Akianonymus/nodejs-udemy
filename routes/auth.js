const express = require("express");

const authController = {
  api: require("../controllers/api/auth"),
  view: require("../controllers/auth"),
};

const router = express.Router();

// view
router.get("/login", authController.view.Login);

// api
router.post("/login", authController.api.Login);
router.post("/logout", authController.api.Logout);

module.exports = router;
