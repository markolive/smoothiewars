import React from 'react';
import { getGame } from "../game/game";

const LeaderBoard = () => {
    const game = getGame();

    return (
        <div>
        {game.players.map((player, i) => (
            <div key={i}>
                <h1>{player.name}</h1>
                <h2>Smoothie Stand: {player.smoothieStand}</h2>
                <h2>Smoothie Price: {player.smoothiePrice}</h2>
                <h2>Number of Smoothies: {player.numSmoothies}</h2>
            </div>
        ))}
    </div>
    );
 };

 export default LeaderBoard;