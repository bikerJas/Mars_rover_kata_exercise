function roverValidate(robotPositions) {
  const notValid = /[^LRM]/g;
  const noMovement = /[M]/g;
  const compassPoints = ["N", "S", "W", "E"];

  if (robotPositions[0].length !== 3)
    throw new Error("Rover coordinates invalid");
  if (isNaN(robotPositions[0][0]) || isNaN(robotPositions[0][1]))
    throw new Error("Invalid starting coordinates for rover");
  if (!compassPoints.includes(robotPositions[0][2]))
    throw new Error("Rover's direction positioning is invalid");
}

module.exports = roverValidate;
