const express = require("express");
const router = express.Router();


module.exports = (req, res) => {
    const random = Math.floor(Math.random() * 100) + 1;
    res.send({ random });
  };
