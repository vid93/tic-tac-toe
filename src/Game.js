import React, { useState } from "react";

import Board from "./Board";

function Game({player1, player2, setP1Score, setp2Score, setTies, setGameDone, status, setStatus }) {
  const [isX, setIsX] = useState(true);

  return (
    <div className="wrapper">
      <Board
        isX={isX}
        setIsX={setIsX}
        player1={player1}
        player2={player2}
        setP1Score={setP1Score}
        setp2Score={setp2Score}
        setTies={setTies}
        setGameDone={setGameDone}
        status={status}
        setStatus={setStatus}
      />
    </div>
  );
}

export default Game;
