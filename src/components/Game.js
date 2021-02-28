import React, { useState } from "react";
import { theWinner } from "../theWinner";
import Board from "./Board";

const styles = {
  width: "200px",
  margin: "20px auto"
};  

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = theWinner(board);

  const handleClick = (i) => {
    const spreadBoard = [...board];

    // Logic for the click
    if (winner || spreadBoard[i]) return;

    // X or O on the square
    spreadBoard[i] = xIsNext ? "X" : "O";
    setBoard(spreadBoard);

    setXisNext(!xIsNext);
  };

  return (
    <div>
      <div style={styles}>
        <p>
          {winner
            ? "Winner: " + winner
            : "Next Player: " + (xIsNext ? "X" : "O")}
        </p>
        <button onClick={() => setBoard(Array(9).fill(null))}>
          Start Game
        </button>
      </div>
      <Board squares={board} onClick={handleClick} />
    </div>
  );
};

export default Game;
