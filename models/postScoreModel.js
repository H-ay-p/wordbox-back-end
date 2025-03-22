const db = require("../db/connection.js");

const addScore = (newScore) => {
  return db
    .query(`INSERT INTO scores (score) VALUES ($1) RETURNING *;`, [
      Number(newScore),
    ])
    .then(({ rows }) => {
      return rows[0];
    });
};

// const addScore = (newScore) => {
//   console.log("entering post score model");
//   console.log(typeof newScore);

//   try {
//     return db
//       .query(`INSERT INTO scores (score) VALUES ($1) RETURNING *;`, [
//         Number(newScore),
//       ])
//       .then(({ rows }) => {
//         return rows[0];
//       });
//   } catch (error) {
//     console.error("Error at the database level:", error);
//     throw error;
//   }
// };
module.exports = addScore;
