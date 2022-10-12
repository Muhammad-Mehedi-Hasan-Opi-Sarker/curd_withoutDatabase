const { v4: uuidv4 } = require("uuid");

const express = require("express");
const router = express.Router();

let users = [];

router.get("/", (req, res) => {
  res.send(users);
});


module.exports = router;
