/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import useClickOutSide from "../../hooks/useClickOutSide";
import ReactDom from "react-dom";

const Dropdown = () => {
  const dom = ".text-selected";
  const { nodeRef, show, setShow } = useClickOutSide();
  const [coords, setCoords] = useState({});
  const handleClick = (e) => {
    if (nodeRef.current) {
      setCoords(nodeRef.current.getBoundingClientRect());
    }
    console.log(coords);
    setShow((show) => !show);
  };
  return (
    <>
      <div
        ref={nodeRef}
        className=" text-center m-[120px] relative w-full max-w-[300px]"
      >
        <div
          onClick={handleClick}
          className="block p-5 font-medium text-blue-500 border border-gray-400 rounded-lg cursor-pointer text-selected"
        >
          Select
        </div>
        {show && <DropdownList coords={coords}></DropdownList>}
      </div>
    </>
  );
};

const DropdownList = ({ coords }) => {
  if (typeof document === "undefined") return null;
  return ReactDom.createPortal(
    <div
      className="absolute w-full font-medium text-blue-400 border border-gray-400 rounded-lg cursor-pointer top-full"
      style={{
        top: coords.top + coords.height + window.scrollY,
        left: coords.left,
        width: coords.width,
      }}
    >
      <div className="p-5 text-center transition-all border hover:text-blue-500 border-b-blue-300">
        HTML
      </div>
      <div className="p-5 text-center transition-all border hover:text-blue-500 border-b-blue-300">
        CSS
      </div>
      <div className="p-5 text-center transition-all border hover:text-blue-500">
        Javascripts
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default Dropdown;
