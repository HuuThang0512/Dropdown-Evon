/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../../heplers";
import "./GameStyles.css";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  let winner = calculateWinner(board);
  const handleClick = (index) => {
    let copyBoard = [...board];
    if (winner || board[index]) return;
    copyBoard[index] = isXNext ? "X" : "O";
    setIsXNext((isXNext) => !isXNext);
    setBoard(copyBoard);
    console.log(winner);
  };
  const reset = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };
  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
      <div className="winner">{winner ? `Winner is ${winner}` : ""}</div>
      <button className="resetBtn" onClick={reset}>
        Reset Game
      </button>
    </div>
  );
};

export default Game;
