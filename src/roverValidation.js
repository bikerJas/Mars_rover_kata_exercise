function roverValidate(robotPositions) {
  const notValid = /[^LRM]/g;
  const noMovement = /[M]/g;
  const compassPoints = ["N", "S", "W", "E"];

  if (robotPositions[0].length !== 3)
    throw new Error("Rover coordinates invalid");
  if (isNaN(robotPositions[0][0]) || isNaN(robotPositions[0][1]))
    throw new Error("Invalid starting coordinates for rover");
}

module.exports = roverValidate;
