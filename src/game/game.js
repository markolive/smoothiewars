var game = {
  // Game variables
  players: [],
  days: [],
  day: 0,
  setupGame: function (players) {
    this.players = players;
  },
  newDay: function (day) {
    this.days.push(day);
    this.day++;
  },
};

function getGame() {
    return game;
};

export {getGame};