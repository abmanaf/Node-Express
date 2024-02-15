const express = require("express");
//const router = require(".");
const router = express.Router();

route.get("/", function (req, res) {
  res.send("Here is the Home page");
});

route.get("/About", function (req, res) {
  res.send("Here is the about page");
});

module.exports = router;
