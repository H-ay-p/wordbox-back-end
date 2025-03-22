const db = require("../db/connection.js");

const fetchMaxScore = () => {
  return db.query("SELECT MAX(score) from scores").then((response) => {
    return response.rows[0].max;
  });
};

module.exports = fetchMaxScore;
