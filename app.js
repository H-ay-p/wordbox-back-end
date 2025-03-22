const express = require("express");
const connection = require("./db/connection");
const getMaxScore = require("./controllers/maxScoreController.js");
const postScore = require("./controllers/postScoreController.js");
const getLetters = require("./functions/getLettersFunc.js");
const cors = require("cors");

const app = express();
app.use(express.json());

app.get("/api/healthcheck", (req, res) => {
  res.status(200).send("I am healthy");
});

app.get("/api/max_score", getMaxScore);

// app.post("/api/getLetters", getLetters);

app.get("/api/get_letters", (req, res) => {
  const letters = getLetters();
  res.status(200).json(letters);
});

app.post("/api/new_score", postScore);

module.exports = app;
