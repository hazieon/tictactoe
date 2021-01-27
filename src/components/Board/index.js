// board
// state - array of squares
// props -
// behaviour - checkWinner(), checkSquare()

//import React, { useState, useEffect } from "react";
import Square from "../Square";

function Board({ squares, onClick }) {
  return (
    <div className="game-board">
      <div id="squares-grid">
        <div className="board-row">
          <Square value={squares[0]} id="top-left" onClick={() => onClick(0)} />
          <Square value={squares[1]} onClick={() => onClick(1)} />
          <Square
            value={squares[2]}
            id="top-right"
            onClick={() => onClick(2)}
          />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onClick={() => onClick(3)} />
          <Square value={squares[4]} onClick={() => onClick(4)} />
          <Square value={squares[5]} onClick={() => onClick(5)} />
        </div>
        <div className="board-row">
          <Square
            value={squares[6]}
            id="bottom-left"
            onClick={() => onClick(6)}
          />
          <Square value={squares[7]} onClick={() => onClick(7)} />
          <Square
            value={squares[8]}
            id="bottom-right"
            onClick={() => onClick(8)}
          />
        </div>
      </div>
    </div>
  );
}

export default Board;

// class Board extends React.Component {
//     renderSquare(i) {
//       return (
//         <Square
//           value={this.props.squares[i]}
//           onClick={() => this.props.onClick(i)}
//         />
//       );
//     }

//     render() {
//       return (
//         <div>
//           <div className="board-row">
//             {this.renderSquare(0)}
//             {this.renderSquare(1)}
//             {this.renderSquare(2)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(3)}
//             {this.renderSquare(4)}
//             {this.renderSquare(5)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(6)}
//             {this.renderSquare(7)}
//             {this.renderSquare(8)}
//           </div>
//         </div>
//       );
//     }
//   }
// }
