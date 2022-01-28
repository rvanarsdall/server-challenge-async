const router = require("express").Router();
const { UserModel } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/test", async (req, res) => {
  res.send("The Test Worked");
});
module.exports = router;
