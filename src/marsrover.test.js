const newLocation = require("./marsrover.js");

describe("newLocation", () => {
  test("returns error if no rover data supplied", () => {
    expect(() => {
      newLocation();
    }).toThrow("No co-ordinates supplied for rovers");
  });

  test("returns error if plateau size data is invalid", () => {
    expect(() => {
      const rovers = [[5],[[1,2,"N"],["LMLMLMLMM"]]]
      newLocation(rovers);
    }).toThrow("Plateau size not valid");
  });
  
  test("returns error if plateau size data is not a number", () => {
    expect(() => {
      const rovers = [[5,"S"],[[1,2,"N"],["LMLMLMLMM"]]]
      newLocation(rovers);
    }).toThrow("Invalid data for Plateau");
  });
});

