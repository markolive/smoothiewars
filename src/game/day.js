const Day = {
  day: 1,
  weather: "sunny",
  smoothieStand: "city",
  smoothiePrice: 1,
  nunSmoothies: 100,
  totalSales: 0,
  money: 100,
};

// create a constructor function to create and return a new Day object with the above properties
function newDay() {
  return Object.create(Day);
}

export default newDay;
