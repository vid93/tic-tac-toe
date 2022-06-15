import React, { useState } from "react";

import "./App.css";

import Login from "./Login";
import Navbar from "./Navbar";
import Game from "./Game";
import Endgame from "./Endgame";

function App() {
  const [status, setStatus] = useState("");
  const [show, setShow] = useState(true);
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [p1Score, setP1Score] = useState(0);
  const [p2Score, setP2Score] = useState(0);
  const [ties, setTies] = useState(0);
  const [gameDone, setGameDone] = useState(false);
  

  
  return (
    <div className="App">
      <header>
        <Navbar
          player1={player1}
          player2={player2}
          p1Score={p1Score}
          p2Score={p2Score}
          ties={ties}
        />
      </header>
      <Login
        show={show}
        setShow={setShow}
        player1={player1}
        player2={player2}
        setPlayer1={setPlayer1}
        setPlayer2={setPlayer2}
      />
      <Game
        player1={player1}
        player2={player2}
        setP1Score={setP1Score}
        setP2Score={setP2Score}
        setTies={setTies}
        setGameDone={setGameDone}
        status={status}
        setStatus={setStatus}
      />
      <Endgame
        player1={player1}
        player2={player2}
        show={gameDone}
        setShow={setGameDone}
        status={status}
      />
    </div>
  );
}

export default App;
