addScore = require("../models/postScoreModel.js");

const postScore = (req, res, next) => {
  const newScore = req.body.score;
  addScore(newScore)
    .then((response) => {
      res.status(201).send(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("error");
    });
};

module.exports = postScore;
