const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/users", ({ res }) => {
  res.sendFile(path.join(rootDir, "views", "users.html"));
});

module.exports = router;
