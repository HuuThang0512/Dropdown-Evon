/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "./Button.scss"

const Button = (props) => {
    return (
      <button className={`button ${props.className || ""}`}>
        {props.children}
      </button>
    );
};

export default Button;