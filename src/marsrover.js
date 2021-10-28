function newLocation(rovers) {
  if (!rovers) throw new Error("No co-ordinates supplied for rovers");
  if (rovers[0].length !== 2) throw new Error("Plateau size not valid");
  if (isNaN(rovers[0][0]) || isNaN(rovers[0][1]))
    throw new Error("Invalid data for Plateau");
  const notValid = /[^LRM]/g;
  const noMovement = /[M]/g;
  const plateauSize = rovers[0];
  const compassPoints = ["N", "S", "W", "E"];
  const robotData = rovers.slice(1);
  let newRoverPosition = [];
  let robots = new Set();

  const leftTurn = new Map();
  leftTurn.set("N", "W");
  leftTurn.set("W", "S");
  leftTurn.set("S", "E");
  leftTurn.set("E", "N");

  const rightTurn = new Map();
  rightTurn.set("N", "E");
  rightTurn.set("E", "S");
  rightTurn.set("S", "W");
  rightTurn.set("W", "N"),
    robotData.forEach((robotPositions) => {
      if (robotPositions[0].length !== 3)
        throw new Error("Rover coordinates invalid");
      if (isNaN(robotPositions[0][0]) || isNaN(robotPositions[0][1]))
        throw new Error("Invalid starting coordinates for rover");
      if (!compassPoints.includes(robotPositions[0][2]))
        throw new Error("Rover's direction positioning is invalid");
      if (robotPositions[1].toString().match(notValid) !== null)
        throw new Error(
          "Not a valid set of new rover destination instructions"
        );
      if (robotPositions[1].toString().match(noMovement) == null)
        throw new Error("Rover does not move");

      const steps = robotPositions[1].join().split("");
      let tempFacing = robotPositions[0][2];
      let tempPosition = [robotPositions[0][0], robotPositions[0][1]];

      steps.forEach((subStep) => {
        if (subStep === "L") {
          tempFacing = leftTurn.get(tempFacing);
        }
        if (subStep === "R") {
          tempFacing = rightTurn.get(tempFacing);
        }
        if (subStep === "M") {
          switch (tempFacing) {
            case "N":
              {
                robotPositions[0][1] +=1;
                if (robotPositions[0][1] > plateauSize[1])
                  throw new Error("New position outside boundary of Plateau");
                else if (robots.has(tempPosition.join("")))
                  throw new Error("Rover clashes with another rover");
                else {
                  tempPosition = [
                    robotPositions[0][0],
                    robotPositions[0][1],
                  ];
                }
              }
              break;
            case "E":
              {
                robotPositions[0][0] +=1;
                if (robotPositions[0][0] > plateauSize[0])
                  throw new Error("New position outside boundary of Plateau");
                else if (robots.has(tempPosition.join("")))
                  throw new Error("Rover clashes with another rover");
                else {
                  tempPosition = [
                    robotPositions[0][0],
                    robotPositions[0][1],
                  ];
                }
              }
              break;
            case "S":
              {
                robotPositions[0][1] -=1;
                if (robotPositions[0][1] < 0)
                  throw new Error("New position outside boundary of Plateau");
                else if (robots.has(tempPosition.join("")))
                  throw new Error("Rover clashes with another rover");
                else {
                  tempPosition = [
                    robotPositions[0][0],
                    robotPositions[0][1],
                  ];
                }
              }
              break;
            case "W":
              {
                robotPositions[0][0] -=1;
                if (robotPositions[0][0] < 0)
                  throw new Error("New position outside boundary of Plateau");
                else if (robots.has(tempPosition.join("")))
                  throw new Error("Rover clashes with another rover");
                else {
                  tempPosition = [
                    robotPositions[0][0],
                    robotPositions[0][1],
                  ];
                }
              }
              break;
          }
        }
      });
      newRoverPosition.push(tempPosition.concat(tempFacing));
      robots.add(tempPosition.join(""));
    });
  return newRoverPosition;
}

module.exports = newLocation;
