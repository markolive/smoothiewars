const gameDay = {
    weather: "???",   
  };
  
  const weather = ["sunny", "cloudy", "rainy"];
  
  // create a function to return the name of a day given its number
  function getDayName(dayNumber) {
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return daysOfWeek[dayNumber-1]; 
  }
  
  // create a constructor function to create and return a new Day object with the above properties
  function newGameDay() {
    return Object.create(gameDay);
  }
  
  export default newGameDay;
  export { getDayName };