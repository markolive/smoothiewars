// Desc: Display the game day and allow the user to start trading
import { useParams } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getGame } from "../game/game";
import WheelComponent from "react-wheel-of-prizes";
import { useState } from "react";
//import 'react-wheel-of-prizes/dist/index.css';
const Weather = () => {
  const navigate = useNavigate();
  const segments = [
    'Sunny',
    'Cloudy',
    'Rainy',
  ]
  const segColors = [
    '#fcdb03',
    '#adb2b8',
    '#8693f7',
  ]

  const [weather, setWeather] = useState('...');

  const onFinished = (winner) => {
    console.log(winner)
    game.Weather = winner.text;
    console.log(game.Weather);
    setWeather(winner.text);
  }
  function showLeaderBoard(dayNo) {
      return () => {
        console.log("Leaderboard button clicked");
        navigate("/Trading/"+dayNo+"/1");
      };
    }

    let { dayNo } = useParams();
    const game = getGame();
    //console.log(game);
   console.log("Day = ", dayNo);
    // display the game day
    if (dayNo<1 || dayNo>7 ) {  
        console.log("Day number out of range");
        return (
            <div>
              <h1>Day number out of range</h1>
            </div>
          );
    }
    return (
      <Stack spacing={6} alignItems="center" justifyContent="space-evenly">
         <WheelComponent
      segments={segments}
      segColors={segColors}
      winningSegment='won 10'
      onFinished={(winner) => onFinished(winner)}
      primaryColor='black'
      contrastColor='white'
      buttonText='Spin'
      isOnlyOnce={false}
      size={290}
      upDuration={100}
      downDuration={1000}
      fontFamily='Arial'
    />   
        <h1>It's {weather}</h1>
        <Button onClick={showLeaderBoard(dayNo)} variant="contained">
          Leaderboard
        </Button>
      </Stack>
    );
  };
  
  export default Weather;