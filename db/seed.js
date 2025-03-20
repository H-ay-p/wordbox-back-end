const db = require("./connection");
const format = require("pg-format");
const test_scores = require("./data/test_scores");

function seed(test_scores) {
  return db
    .query("DROP TABLE IF EXISTS scores;")
    .then(() => {
      return createScoreTable();
    })
    .then(() => {
      return insertScoreData(test_scores);
    });
}

function createScoreTable() {
  return db.query(`CREATE TABLE scores(
        score INT
        )`);
}

function insertScoreData(test_scores) {
  const query = format(
    `INSERT INTO scores (score) VALUES %L;`,
    test_scores.map((s) => [s])
  );
  return db.query(query);
}

module.exports = seed;
