const request = require("supertest");
const app = require("../app.js");
// const db = require("../db/connection.js");
// const testData = require("../db/data/test_scores.js");
// const seed = require("../db/run-seed.js");

// beforeEach(() => seed(testData));

// afterAll(() => db.end());

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

describe("POST api/new_score", () => {
  test("should post a new score", () => {
    return request(app)
      .post("/api/new_score")
      .send({
        score: "8",
      })
      .expect(201);
  });
});

describe("GET /api/max_score", () => {
  test("should retrieve max score from database", () => {
    return request(app)
      .get("/api/max_score")
      .expect(200)
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.text).toBe("8");
      });
  });
});

describe("GET /api/getLetters", () => {
  test("should produce new set of letters", () => {
    return request(app)
      .get("/api/get_letters")
      .expect(200)
      .then((response) => {
        expect(response.body.length).toBe(16);
      });
  });
});
