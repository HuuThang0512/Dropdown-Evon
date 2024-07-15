/* eslint-disable react/display-name */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

const Tooltip = ({children, text }) => {
  const hoverRef = useRef();
  const textRef = useRef();
  const [coords, setCoords] = useState();
  const [coordsText, setCoordsText] = useState();
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    setCoords(hoverRef.current.getBoundingClientRect());
    if (showText) {
      setCoordsText(textRef.current.getBoundingClientRect());
    }
  }, [showText]);
  return (
    <div className="h-[100vh] flex items-center justify-center">
      {showText && (
        <TooltipText ref = {textRef} coords={coords}>
          {children}
        </TooltipText>
      )}
      <span
        ref={hoverRef}
        className="font-semibold cursor-pointer"
        onMouseEnter={() => {
          setShowText(true);
        }}
        onMouseLeave={() => {
          setShowText(false);
        }}
      >
        {text}
      </span>
    </div>
  );
};

const TooltipText = React.forwardRef(({ coords, children }, ref) => {
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(
    <p
      ref={ref}
      className="absolute -translate-x-2/4 inline-block p-5 font-semibold text-white bg-blue-400 rounded-lg"
      style={{
        top: coords.top - 100,
        left: coords.left + coords.width / 2,
      }}
    >
      {children}
    </p>,
    document.querySelector("body")
  );
});

export default Tooltip;
