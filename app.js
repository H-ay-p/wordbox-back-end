const express = require("express");
const connection = require("./db/connection");
const getMaxScore = require("./controllers/maxScoreController.js");
const postScore = require("./controllers/postScoreController.js");

const app = express();
app.use(express.json());

app.get("/api/healthcheck", (req, res) => {
  res.status(200).send("I am healthy");
});

app.get("/api/max_score", getMaxScore);

app.post("/api/new_score", postScore);

module.exports = app;
