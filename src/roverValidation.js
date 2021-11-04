function roverValidate(robotPositions) {
  const notValid = /[^LRM]/g;
  const noMovement = /[M]/g;
  const compassPoints = ["N", "S", "W", "E"];

  if (robotPositions[0].length !== 3)
    throw new Error("Rover coordinates invalid");
}

module.exports = roverValidate;
