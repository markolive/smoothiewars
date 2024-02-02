import "@mui/material";
import { useNavigate } from "react-router-dom";
import { getNumPlayers, NumPlayers } from "../NumPlayers";
import { Button, Stack } from "@mui/material";
import  setupPlayers  from "../game/players"
import {getGame}  from "../game/game";
import newGameDay from "../game/gameDay";

function NewGame() {
  const navigate = useNavigate();

  function newGame() {
    console.log("button clicked");
    const numPlayers = getNumPlayers();
    const players = setupPlayers(numPlayers);
    const game = getGame();
    game.setupGame(players);
    game.newDay(newGameDay());
    navigate("/Day/1");
  }
  return (
    <Stack spacing={6} alignItems="center" justifyContent="space-evenly">
      <NumPlayers></NumPlayers>
      <Button onClick={newGame} variant="contained">
        Let's Make Smoothies!
      </Button>
    </Stack>
  );
}

export default NewGame;
