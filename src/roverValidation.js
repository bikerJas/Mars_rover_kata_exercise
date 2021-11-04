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
  if (!robotPositions[1])
    throw new Error("No steps supplied for new rover position");
  if (robotPositions[1].toString().match(notValid) !== null)
    throw new Error("Not a valid set of new rover destination instructions");
  if (robotPositions[1].toString().match(noMovement) == null)
    throw new Error("Rover does not move");
}

module.exports = roverValidate;
