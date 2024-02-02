const round = {
  smoothieStand: "city",
  smoothiePrice: 1,
  numSmoothies: 100,
  totalSales: 0,
  money: 100,
};

// create a constructor function to create and return a new Day object with the above properties
function newRound() {
  return Object.create(round);
}

export default newRound;

