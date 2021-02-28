import React from "react";
import Square from "./Square";
import { uuid} from "uuidv4";

const style = {
  border: "4px solid #363636",
  borderRadius: "10px",
  width: "250px",
  height: "250px",
  margin: "0 auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)"
};
const Board = ({ squares, onClick }) => (
  <div style={style}>
    {squares.map((square, i) => {
      return <Square key={uuid} value={square} onClick={() => onClick(i)} />;
    })}
  </div>
);

export default Board;
