function plateauSize(rovers) {
  if (rovers[0].length !== 2) throw new Error("Plateau size not valid");
  if (isNaN(rovers[0][0]) || isNaN(rovers[0][1]))
    throw new Error("Invalid data for Plateau");
  const plateauSize = rovers[0];
}

module.exports = plateauSize;
