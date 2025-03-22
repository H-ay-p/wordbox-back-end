const express = require("express");
const app = express();
const connection = require("./db/connection");
const getMaxScore = require("./controllers/maxScoreController.js");

afterAll(() => connection.end());

app.get("/api/healthcheck", (req, res) => {
  res.status(200).send("I am healthy");
});

app.get("/api/max_score", getMaxScore);

module.exports = app;
