import { getGame } from "../game/game";
import { useParams } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MenuItem, TextField, InputAdornment } from "@mui/material";
import smoothieStand from "../game/smoothieStand";
import { useState } from "react";

const Trading = () => {
  let { dayNo, playerNo } = useParams();
  const game = getGame();
  const navigate = useNavigate();
  console.log(game);
  console.log("Trading day = ", dayNo);
  smoothieStand.map((it, index) => console.log(index, it.name));
  const [numSmoothies, setNumSmoothies] = useState(game.players[playerNo - 1].balance);

  function nextPlayer() {
    console.log("Next Player button clicked");
    playerNo++;
    navigate("/Trading/" + dayNo + "/" + playerNo);
  }

  function weather() {
    console.log("Weather button clicked");
    // your weather logic here
    navigate("/Weather/" + dayNo);
  }

  var smoothieStandSelected = 1;

  function setName(event) {
    console.log(event.target.value);
    smoothieStandSelected = event.target.value;
  }

  function updateNumSmoothies(event) {
    console.log("NumSm "+event.target.value);
    if (event.target.value>100) {
      console.log("Error: You don't have enough money to buy that many smoothies");
      setNumSmoothies( game.players[playerNo - 1].balance);
    } else {
      setNumSmoothies(event.target.value);
    }
  }

  return (
    <Stack spacing={6} alignItems="center" justifyContent="space-evenly">
      <h1>{game.players[playerNo - 1].name}</h1>

      <TextField
        select
        fullWidth
        id="smoothie-stand-selected"
        defaultValue={smoothieStandSelected}
        label="Smoothie Stand"
        onChange={setName}
      >
        {smoothieStand.map((it, index) => (
          <MenuItem key={index} value={index}>
            {it.name}
          </MenuItem>
        ))}
      </TextField>
      
      <TextField
        label="Number of Smoothies"
        onChange={updateNumSmoothies}
        value= {numSmoothies}
        InputProps={{
          startAdornment: <InputAdornment position="start">#</InputAdornment>,
          inputProps: {
            min: 1,
            max: 100000,
          },

          inputMode: "numeric",
          pattern: "[0-9]", 
        }}
        id="number-of-smoothies"
        type="number"
      />

      <TextField
        label="Price per Smoothie"
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
          inputProps: {
            min: 1,
            max: 3,
          },
          inputMode: "numeric",
          pattern: "[1-3]",
        }}
        id="price-of-smoothies"
        type="number"
      />
      {playerNo < game.players.length ? (
        <Button onClick={nextPlayer} variant="contained">
          Next Player
        </Button>
      ) : (
        <Button onClick={weather} variant="contained">
          The weather today is ...
        </Button>
      )}
    </Stack>
  );
};

export default Trading;
