const request = require("supertest");
const app = require("../app.js");

// const connection = require("../../db/connection");

describe("GET /api/healthcheck", () => {
  test("should run a heath check", () => {
    return request(app)
      .get("/api/healthcheck")
      .expect(200)
      .then((response) => {
        expect(response.status).toBe(200);
      });
  });
});

describe("GET /api/max_score", () => {
  test("should retrieve max score from database", () => {
    return request(app)
      .get("/api/max_score")
      .expect(200)
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.text).toBe("5");
      });
  });
});
