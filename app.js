const express = require("express");
const app = express();
const connection = require("./db/connection");

afterAll(() => connection.end());

app.get("/api/healthcheck", (req, res) => {
  res.status(200).send("I am healthy");
});

app.get("/api/maxscore", getMaxScore);

module.exports = app;
