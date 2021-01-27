// game
// state - board, players, in progress, current player,
// props -
// behaviour - getNextPlayer(), startGame(), checkWinner()?, checkMoveValidity()

import React, { useState } from "react";
import Board from "../Board";
import { winningCombinations } from "./winningCombinations";

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (squares.every((s) => s)) {
    //checks every square has content -
    status = "GAME OVER - NO WINNER!";
  } else {
    status = "Next player: " + getNextPlayerValue();
  }

  function changeSquare(index, newValue) {
    setSquares([
      // Get items before affected item
      ...squares.slice(0, index),

      // Affected item
      newValue,

      // Get items after the affected item
      ...squares.slice(index + 1),
    ]);

    // if (calculateWinner(squares)) {
    //   return alert(` has won!`);
    // }
  }

  function getNextPlayerValue() {
    if (xIsNext) {
      return "☠️";
    }
    return "🧟";
  }

  function handleClick(index) {
    if (squares[index] || calculateWinner(squares)) {
      return;
    }

    const nextPlayerValue = getNextPlayerValue();
    changeSquare(index, nextPlayerValue);
    setXIsNext(!xIsNext);
  }
  return (
    <div>
      <div className="game-info">
        <div className="status">{status}</div>
      </div>
      <Board squares={squares} onClick={handleClick} />;
    </div>
  );

  function calculateWinner(squares) {
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
}

export default Game;
