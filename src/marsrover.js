const plateauSize = require("./mars_plateau.js");
const roverMovement = require("./roverMovement.js");

function newLocation(rovers) {
  if (!rovers) throw new Error("No co-ordinates supplied for rovers");
  let newRoverPosition = [];

  //Validate the data received for the plateau is all present and in the correct format
  plateauSize(rovers);

  //Rover data received from the rover navigation file
  newRoverPosition = roverMovement(rovers);

  return newRoverPosition;
}

module.exports = newLocation;
