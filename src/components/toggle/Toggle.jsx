/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./ToggleStyles.css";

const Toggle = () => {
  const [on, setOn] = useState(false);
  const handleToggle = () => {
    setOn(!on);
  };
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
    </div>
  );
};

export default Toggle;
