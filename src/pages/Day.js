import { getGame } from "../game/game";


const Day = () => {
    const game = getGame();
    console.log(game);
    return <h1>Day</h1>;
  };
  
  export default Day;
  