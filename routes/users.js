const { v4: uuidv4 } = require("uuid");

const express = require("express");
const router = express.Router();

let users = [];

router.get("/", (req, res) => {
  res.send(users);
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    const found = users.find((user) => user.id == id);
    res.send(found);
  });
  
  router.post("/", (req, res) => {
    const user = req.body;
    const Id = uuidv4();
    const UserId = { ...user, id: Id };
    users.push(UserId);
    res.send(`Api is called ${user.firstName} added`);
  });
  
  

module.exports = router;
