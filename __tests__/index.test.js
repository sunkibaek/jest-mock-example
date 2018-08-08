const start = require("../index");
const somethingElse = require("../index").somethingElse;

const mockFirebase = require("firebase");

describe("start", () => {
  it("returns true", () => {
    const result = start();

    mockFirebase.initializeApp = {
      start: jest.fn()
    };

    const resultFromSomethingElse = somethingElse();

    expect(result).toBe(true);
    expect(resultFromSomethingElse).toBe(true);
  });
});
