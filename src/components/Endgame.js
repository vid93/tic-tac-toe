import React, { useEffect } from "react";

import { saveToLocal } from "../helper";

import { Modal } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Endgame({
  gameDone,
  setGameDone,
  setShow,
  status,
  setStatus,
  player1,
  player2,
  setSquare,
  setIsX,
  setP1Score,
  setP2Score,
  setTies,
  setPlayer1,
  setPlayer2,
  prevGames,
}) {
  var today = new Date();
  var date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

  useEffect(() => {
    const data = {
      player1: player1,
      player2: player2,
      time: date,
      score: status,
    };
    saveToLocal("game", [...prevGames, data]);
    //eslint-disable-next-line
  }, []);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "55%",
    width: "45%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    textAlign: 'center'
  };

  const newGame = () => {
    //reset the whole game
    setGameDone(false);
    setP1Score(0);
    setP2Score(0);
    setTies(0);
    setSquare(Array(9).fill(null));
    setPlayer1("");
    setPlayer2("");
    setStatus("");
    setShow(true);
    setIsX(true);
    localStorage.clear();
  };

  const tryAgain = () => {
    // keep player names and score, reset the board
    setGameDone(false);
    setSquare(Array(9).fill(null));
    setIsX(true);
  };

  return (
    <Modal open={gameDone}>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h5" component="h5">
          {status}
        </Typography>
        <button className="try-btn" onClick={tryAgain}>
          Try Again
        </button>
        <button className="new-btn" onClick={newGame}>
          New Game
        </button>
        {prevGames.map((game, index) => (
          <h4 key={index}>
            {game.player1} vs {game.player2} | {game.time} | {game.score}
          </h4>
        ))}
      </Box>
    </Modal>
  );
}

export default Endgame;
