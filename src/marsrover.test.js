const newLocation = require("./marsrover");

describe("newLocation", () => {
  test("returns array of new locations", () => {
    const rovers = [
      {
        rover: 1,
        plateauSize: {
          x: 5,
          y: 5,
          currentPosition: {
            x: 1,
            y: 2,
            orientation: "N",
          },
          newPosition: "LMLMLMLMM",
        },
      },
    ];
    expect(newLocation(rovers)).toEqual([1, 3, "N"]);
  });
});
