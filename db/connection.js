const { Pool } = require("pg");
const ENV = process.env.NODE_ENV || "development";

// if (!process.env.PGDATABASE) {
//   throw new Error("No PGDATABASE configured");
// }

if (!process.env.PGDATABASE && !process.env.DATABASE_URL) {
  throw new Error("PGDATABASE or DATABASE_URL not set");
}

const config = {};

if (ENV === "production") {
  config.connectionString = process.env.DATABASE_URL;
  config.max = 2;
}

module.exports = new Pool(config);

// module.exports = new Pool();
