import React, { useEffect, useState } from "react";

import "./App.css";

import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Game from "./components/Game";
import Endgame from "./components/Endgame";
import { getFromLocal } from "./helper";

function App() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [status, setStatus] = useState("");
  const [show, setShow] = useState(true);
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [p1Score, setP1Score] = useState(0);
  const [p2Score, setP2Score] = useState(0);
  const [ties, setTies] = useState(0);
  const [gameDone, setGameDone] = useState(false);
  const [isX, setIsX] = useState(true);
  const [prevGames, setPrevGames] = useState([])

  useEffect(() => {
    setPrevGames(getFromLocal("game") || [])
  }, [gameDone])

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
      {gameDone && <Endgame
        isX={isX}
        setIsX={setIsX}
        player1={player1}
        player2={player2}
        gameDone={gameDone}
        setGameDone={setGameDone}
        status={status}
        setStatus={setStatus}
        setSquare={setSquare}
        setP1Score={setP1Score}
        setP2Score={setP2Score}
        setTies={setTies}
        setPlayer1={setPlayer1}
        setPlayer2={setPlayer2}
        setShow={setShow}
        prevGames={prevGames}
      />}
    </div>
  );
}

export default App;
