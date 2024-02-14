function setupPlayers(num) {
  let players = [];
  console.log("NumPlayers = ", num);
  for (let i = 1; i <= num; i++) {
    let player = { id: i, name: `Player ${i}`, balance: 100, smoothieStand: 0, smoothiePrice: 1, numSmoothies: 100};
    console.log("player = ", player);
    players.push(player);
  }
  return players;
}

export default setupPlayers;
