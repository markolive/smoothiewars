// Desc: Display the game day and allow the user to start trading
import { useParams } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getGame } from "../game/game";
import { MenuItem, TextField } from "@mui/material";
//import 'react-wheel-of-prizes/dist/index.css';
const WeatherManual = () => {
  const navigate = useNavigate();

  function showLeaderBoard(dayNo) {
      return () => {
        console.log("Leaderboard button clicked");
        navigate("/LeaderBoard/"+(dayNo));
      };
    }

    let { dayNo } = useParams();
    const game = getGame();
    //console.log(game);
   console.log("Day = ", game.days[dayNo-1].dayName);
    // display the game day
    if (dayNo<1 || dayNo>7 ) {  
        console.log("Day number out of range");
        return (
            <div>
              <h1>Day number out of range</h1>
            </div>
          );
    }

    function setWeather(event) {
        console.log("Weather");
        game.days[dayNo-1].weather = event.target.value;
    }

    return (
      <Stack spacing={6} alignItems="center" justifyContent="space-evenly">
       <TextField
          select
          fullWidth
          id="weather"
          defaultValue="Sunny"
          label="Weather"
          onChange={setWeather}
        >
            <MenuItem key="1" value="Sunny">
              Sunny
            </MenuItem>
            <MenuItem key="2" value="Cloudy">
              Cloudy
            </MenuItem>
            <MenuItem key="3" value="Rainy">
              Rainy
            </MenuItem>
        </TextField>
        <Button onClick={showLeaderBoard(dayNo)} variant="contained">
          Leaderboard
        </Button>
      </Stack>
    );
  };
  
  export default WeatherManual;