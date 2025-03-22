const fetchMaxScore = require("../models/maxScoreModel");

const getMaxScore = (req, res) => {
  fetchMaxScore().then((max) => {
    res.status(200).send(max.toString());
  });
};

module.exports = getMaxScore;
