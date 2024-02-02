// Desc: Display the game day and allow the user to start trading
import { useParams } from "react-router-dom";
import { getDayName } from "../game/gameDay";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getGame } from "../game/game";

const Day = () => {
  const navigate = useNavigate();
  function startTrading(dayNo) {
    return () => {
      console.log("Trading button clicked");
      navigate("/Trading/" + dayNo + "/1");
    };
  }

  let { dayNo } = useParams();
  const game = getGame();
  console.log(game);
  console.log("Day = ", dayNo);

  if (dayNo < 1 || dayNo > game.day) {
    console.log("Day number out of range");
    return (
      <div>
        <h1>Day number out of range</h1>
      </div>
    );
  }
  // display the game day
  return (
    <Stack spacing={6} alignItems="center" justifyContent="space-evenly">
      <h1>It's {getDayName(dayNo)}</h1>
      <Button onClick={startTrading(dayNo)} variant="contained">
        Place your stakes!
      </Button>
    </Stack>
  );
};

export default Day;
