/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Cell = ({value, onClick}) => {
    return (
      <div className={`game-cell ${value == "O" ? "isO" : value == "X" ? "isX" : ""}`} onClick={onClick}>
        {value}
      </div>
    );
};

export default Cell;