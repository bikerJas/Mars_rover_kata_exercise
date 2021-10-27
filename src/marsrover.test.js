const newLocation = require("./marsrover");

describe("newLocation", () => {
  test("returns array of new locations", () => {
    const rovers = [[5,5],[[1,2,"N"],["LMLMLMLMM"]]]
    expect(newLocation(rovers)).toEqual([ 1, 3, "N" ]);
  });
});
