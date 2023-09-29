import "@mui/material";
import { useNavigate } from "react-router-dom";
import { getNumPlayers, NumPlayers } from "../NumPlayers";
import { Button, Stack } from "@mui/material";
import  setupPlayers  from "../game/players"
import {setupGame}  from "../game/game";
import newDay from "../game/day";

function NewGame() {
  const navigate = useNavigate();

  function newGame() {
    console.log("button cli cked");
    const numPlayers = getNumPlayers();
    const players = setupPlayers(numPlayers);
    // create an array of 7 Day objects
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push(newDay());
    }
  
    setupGame(players,days);
    navigate("/Day");
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
