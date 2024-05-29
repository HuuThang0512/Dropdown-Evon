/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import useClickOutSide from "../../hooks/useClickOutSide";

const Dropdown = () => {
  const dom = ".text-selected";
  const { nodeRef, show, setShow } = useClickOutSide(dom);
  const handleClick = (e) => {
    e.stopPropagation();
    setShow(!show);
  };
  console.log("re-render", show);
  return (
    <div>
      <div
        ref={nodeRef}
        className=" text-center m-[120px] relative w-full max-w-[300px]"
      >
        <div
          onClick={handleClick}
          className="text-selected p-5 border block border-gray-400 rounded-lg cursor-pointer font-medium text-blue-500"
        >
          Select
        </div>
        {show && (
          <div className="border border-gray-400 rounded-lg cursor-pointer font-medium text-blue-400 absolute w-full top-full">
            <div className=" hover:text-blue-500 transition-all p-5 border border-b-blue-300">
              HTML
            </div>
            <div className=" hover:text-blue-500 transition-all p-5 border border-b-blue-300">
              CSS
            </div>
            <div className=" hover:text-blue-500 transition-all p-5 border">
              Javascripts
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
