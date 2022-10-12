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

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  users = users.filter((use) => use.id != id);
  res.send(`your item ${id} deleted`);
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const { firstName, lastName, city } = req.body;
  const user = users.find((user) => user.id == id);
  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (city) user.city = city;
  res.send(`updated ${id} name`);
});


module.exports = router;
