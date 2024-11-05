const express = require("express");
const router = express.Router();

const handlers = {
  "/text": require("./api/hello.js"),
  "/random": require("./api/random.js"),
};

module.exports = (req, res) => {
  const path = req.path;

  if (path in handlers) {
    handlers[path](req, res);
  }else{
    res.status(404).send("What are you even looking for?");
  }
};
