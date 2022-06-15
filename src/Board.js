import React, { useEffect, useState } from "react";

import Square from "./Square";

function Board({ isX, setIsX, player1, player2, setP1Score, setP2Score, setTies, setGameDone, status, setStatus }) {
  const [square, setSquare] = useState(Array(9).fill(null));
  const handleClick = (i) => {
    if (calculateWinner(square) || square[i]) {
      return;
    }

    square[i] = isX ? "X" : "O";
    setSquare(square);
    setIsX(!isX);

    console.log(square);
  };

  const winner = calculateWinner(square);

  
  useEffect(() => {

    
    if (winner) {
      if(winner === 'X'){
        setStatus(`${player1} Won`)
        setP1Score(prevState => prevState + 1)
        setGameDone(true)
      }else{
        setStatus(`${player2} Won`)
        setP2Score(prevState => prevState + 1)
        setGameDone(true)
      }
    } else if (!winner && !square.includes(null)) {
      setStatus("Tied");
      setTies(prevState => prevState + 1)
      setGameDone(true)
    } else {
      setStatus(`Next player is ${isX ? player1 : player2}`);
    }
  }, [isX, player1, player2, setP1Score, setP2Score, setTies, square, winner, setGameDone, setStatus])
    
  function calculateWinner(square) {
    const pattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < pattern.length; i++) {
      const [a, b, c] = pattern[i];

      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
    return null;
  }

  return (
    <div className="board">
      {square.map((square, index) => (
        <Square
          key={index}
          index={index}
          value={square}
          handleClick={handleClick}
        />
      ))}
      <h2>{status}</h2>
    </div>
  );
}

export default Board;
