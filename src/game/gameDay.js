const gameDay = {
  dayNumber: 0,
  dayName: "...",
  weather: "???",
};

const weather = ["sunny", "cloudy", "rainy"];

// create a function to return the name of a day given its number
function getDayName(dayNumber) {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return daysOfWeek[dayNumber - 1];
}

// create a constructor function to create and return a new Day object with the above properties
function newGameDay(dayNo) {
  const dayObj = Object.create(gameDay);
  console.log(dayObj);
  dayObj.dayNumber = dayNo;
  dayObj.dayName = getDayName(dayNo);
  console.log(dayObj);
  return dayObj;
}

export default gameDay;
export { getDayName };
