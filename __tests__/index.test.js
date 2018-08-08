const start = require("../index");

describe("start", () => {
  it("returns true", () => {
    const result = start();

    expect(result).toBe(true);
  });
});
