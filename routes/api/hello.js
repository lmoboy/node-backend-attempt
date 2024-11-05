const express = require("express");
const router = express.Router();



module.exports = (req, res) => {
  const text = "Hello World!";
  res.send({ text });
};
