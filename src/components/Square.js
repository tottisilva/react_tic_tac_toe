import React from "react";

const style = {
  background: "#ddd",
  border: "2px solid #363636",
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none"
};

const Square = ({ value, onClick }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

export default Square;
