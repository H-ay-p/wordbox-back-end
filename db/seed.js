const db = require("./connection");
const format = require("pg-format");

function seed() {
  return db
    .query("DROP TABLE IF EXISTS scores;")

    .then(() => {
      return createScoreTable();
    });
}

function createScoreTable() {
  return db.query(`CREATE TABLE SCORES(
        score INT
        )`);
}

module.exports = seed;
