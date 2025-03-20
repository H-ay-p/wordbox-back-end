const seed = require("./seed");
const db = require("./connection");
const test_scores = require("./data/test_scores");

seed(test_scores).then(() => {
  return db.end();
});
