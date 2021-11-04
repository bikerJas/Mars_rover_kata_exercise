const newLocation = require("./marsrover.js");

describe("newLocation", () => {
  test("returns error if no rover data supplied", () => {
    expect(() => {
      newLocation();
    }).toThrow("No co-ordinates supplied for rovers");
  });

  test("returns error if plateau size data is invalid", () => {
    expect(() => {
      const rovers = [[5], [[1, 2, "N"], ["LMLMLMLMM"]]];
      newLocation(rovers);
    }).toThrow("Plateau size not valid");
  });

  test("returns error if plateau size data is not a number", () => {
    expect(() => {
      const rovers = [
        [5, "S"],
        [[1, 2, "N"], ["LMLMLMLMM"]],
      ];
      newLocation(rovers);
    }).toThrow("Invalid data for Plateau");
  });

  test("returns error if rover starting position is invalid", () => {
    expect(() => {
      const rovers = [
        [5, 5],
        [[1, 2], ["LMLMLMLMM"]],
      ];
      newLocation(rovers);
    }).toThrow("Rover coordinates invalid");
  });

  test("returns error if rover starting position co-ordinates are invalid", () => {
    expect(() => {
      const rovers = [
        [5, 5],
        [["C", 2, "N"], ["LMLMLMLMM"]],
      ];
      newLocation(rovers);
    }).toThrow("Invalid starting coordinates for rover");
  });

  test("returns error if rover is missing direction facing data", () => {
    expect(() => {
      const rovers = [
        [5, 5],
        [[1, 2, "T"], ["LMLMLMLMM"]],
      ];
      newLocation(rovers);
    }).toThrow("Rover's direction positioning is invalid");
  });

  test("returns error if no new steps supplied for new rover position", () => {
    expect(() => {
      const rovers = [[5, 5], [[1, 2, "N"]]];
      newLocation(rovers);
    }).toThrow("No steps supplied for new rover position");
  });

  test("returns error if steps for new destination contain invalid characters", () => {
    expect(() => {
      const rovers = [[5,5], [[1, 2, "N"], ["LMLMLPLMM"]]];
      newLocation(rovers);
    }).toThrow("Not a valid set of new rover destination instructions");
  });

});

