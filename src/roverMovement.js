const roverValidate = require("./roverValidation.js");
const plateauSize = require("./mars_plateau.js");

function roverMovement(rovers) {
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
        
      //Validate rover navigation data  
      roverValidate(robotPositions);

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
                robotPositions[0][1] += 1;
                if (robotPositions[0][1] > plateauSize[1])
                  throw new Error("New position outside boundary of Plateau");
                else if (robots.has(tempPosition.join("")))
                  throw new Error("Rover clashes with another rover");
                else {
                  tempPosition = [robotPositions[0][0], robotPositions[0][1]];
                }
              }
              break;
            case "E":
              {
                robotPositions[0][0] += 1;
                if (robotPositions[0][0] > plateauSize[0])
                  throw new Error("New position outside boundary of Plateau");
                else if (robots.has(tempPosition.join("")))
                  throw new Error("Rover clashes with another rover");
                else {
                  tempPosition = [robotPositions[0][0], robotPositions[0][1]];
                }
              }
              break;
            case "S":
              {
                robotPositions[0][1] -= 1;
                if (robotPositions[0][1] < 0)
                  throw new Error("New position outside boundary of Plateau");
                else if (robots.has(tempPosition.join("")))
                  throw new Error("Rover clashes with another rover");
                else {
                  tempPosition = [robotPositions[0][0], robotPositions[0][1]];
                }
              }
              break;
            case "W":
              {
                robotPositions[0][0] -= 1;
                if (robotPositions[0][0] < 0)
                  throw new Error("New position outside boundary of Plateau");
                else if (robots.has(tempPosition.join("")))
                  throw new Error("Rover clashes with another rover");
                else {
                  tempPosition = [robotPositions[0][0], robotPositions[0][1]];
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

module.exports = roverMovement;
