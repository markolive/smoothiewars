import { getDayName } from './gameDay'
var game = {
  // Game variables
  players: [],
  days: [],
  day: 0,
  setupGame: function (players) {
    this.players = players;
  },
  newDay: function (day) {
    this.days.push({ day: day, dayName: getDayName(day), weather: 'sunny'});
    this.day++;
    console.log(this.days);
  },
};

function getGame() {
    return game;
};

export {getGame};