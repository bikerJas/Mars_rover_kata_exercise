const newLocation = require("./marsrover.js");

describe("newLocation", () => {
  test("returns error if no rover data supplied", () => {
    expect(() => {
      newLocation();
    }).toThrow("No co-ordinates supplied for rovers");
  });
});

