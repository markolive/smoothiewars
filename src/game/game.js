
var game = {
  // Game variables
  players: [],
  days: [],
  day: 1,
};

function setupGame(players, days) {
  game.players = players;
  game.days = days;
  game.day = 1;
  return game;
};

function getGame() {
    return game;
};

export {setupGame, getGame};