const newLocation = require("./marsrover");

describe("newLocation", () => {
  test("returns array of new locations", () => {
    const rovers = [[5,5],[[3,3,"E"],["MMRMMRMRRM"]]]
    expect(newLocation(rovers)).toEqual([[5, 1, "E"]]);
  });
});
