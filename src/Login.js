import React from "react";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";

function Login({ show, setShow, setPlayer1, setPlayer2, player1, player2 }) {
  if (show === false) {
    return null;
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: 375,
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const gameStart = () => {
    // put colected names in local storage
    setShow(false);
    
  };

  return (
    <Modal  open={show}>
      <Box sx={style} >
        <form className="form">
          <label className="player1">
            Player 1
            <br />
            <input onChange={(e) => setPlayer1(e.target.value)} />
          </label>
          <br />
          <label className="player2">
            Player 2
            <br />
            <input onChange={(e) => setPlayer2(e.target.value)} />
          </label>
        </form>
        <button
          type="submit"
          className="logbtn"
          onClick={gameStart}
          disabled={player1 === "" || player2 === ""}
        >
          Start
        </button>
      </Box>
    </Modal>
  );
}

export default Login;
