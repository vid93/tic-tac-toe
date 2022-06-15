// try again ostaju isti igraci i score
// new game resetuje sve

import React, { useEffect, useState } from "react";

import { saveToLocal, getFromLocal } from "./helper";

import { Modal } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Endgame({ show, setShow, status, player1, player2, gameDone }) {

  var today = new Date();
  var date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

  const data = {
    player1: player1,
    player2: player2,
    time: date,
    score: status,
  };

  useEffect(() => {
    getFromLocal('game')
  })

  saveToLocal('game', data)

  if (show === false) {
    return null;
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: 500,
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const newGame = () => {
    setShow(false);
  };

  return (
    <Modal open={show}>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h3" component="h2">
          {status}
        </Typography>
        <button className="try-btn" onClick={newGame}>
          Try Again
        </button>
        <button className="new-btn" onClick={newGame}>
          New Game
        </button>
      </Box>
    </Modal>
  );
}

export default Endgame;
