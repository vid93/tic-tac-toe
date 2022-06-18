import React from "react";

import Board from "./Board";

function Game({player1, player2, setP1Score, setP2Score, setTies, setGameDone, status, setStatus, square, setSquare, isX, setIsX }) {
  

  return (
    <div className="wrapper">
      <Board
        isX={isX}
        setIsX={setIsX}
        player1={player1}
        player2={player2}
        setP1Score={setP1Score}
        setP2Score={setP2Score}
        setTies={setTies}
        setGameDone={setGameDone}
        status={status}
        setStatus={setStatus}
        square={square}
        setSquare={setSquare}
      />
    </div>
  );
}

export default Game;
