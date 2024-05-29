/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./App.scss";
import useLinkNewTab from "./hooks/useLinkNewTab";
import Dropdown from "./components/dropdown/Dropdown";

const App = () => {
  return (
    <div>
      {/* <div className=" bg-gray-300">Test</div> */}
      <Dropdown></Dropdown>
    </div>
  );
};

export default App;
