import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({
    blue: 0,
    red: 0,
    yellow: 0,
    green: 0,
  });

  let UpdateBlue = () => {
    setMoves((preMoves) => {
      return { ...preMoves, blue: preMoves.blue + 1 };
    });
  };

  let UpdateRed = () => {
    setMoves((preMoves) => {
      return { ...preMoves, red: preMoves.red + 1 };
    });
  };

  let UpdateYellow = () => {
    setMoves((preMoves) => {
      return { ...preMoves, yellow: preMoves.yellow + 1 };
    });
  };

  let UpdateGreen = () => {
    setMoves((preMoves) => {
      return { ...preMoves, green: preMoves.green + 1 };
    });
  };

  return (
    <div>
      <p>Game Begins!</p>
      <div className="board">
        <p>Blue moves = {moves.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={UpdateBlue}>
          +1
        </button>
        <p>Yellow moves = {moves.yellow}</p>
        <button
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={UpdateYellow}
        >
          +1
        </button>
        <p>Green moves = {moves.green}</p>
        <button style={{ backgroundColor: "green" }} onClick={UpdateGreen}>
          +1
        </button>
        <p>Red moves = {moves.red}</p>
        <button style={{ backgroundColor: "red" }} onClick={UpdateRed}>
          +1
        </button>
      </div>
    </div>
  );
}
