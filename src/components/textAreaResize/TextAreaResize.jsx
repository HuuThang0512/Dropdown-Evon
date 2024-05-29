/* eslint-disable no-unused-vars */
import React from "react";

const TextAreaResize = () => {
  const [text, setText] = React.useState("");
  const [heightTxtArea, setHeightTxtArea] = React.useState("auto");
  const txtAreaRef = React.useRef();
  const handleChange = (e) => {
    setText(e.target.value);
    setHeightTxtArea("auto");
  };

  const changeHeightRef = React.useRef();
  changeHeightRef.current = () => {
    setHeightTxtArea(`${txtAreaRef.current.scrollHeight}px`);
  };

  React.useLayoutEffect(changeHeightRef.current, [text]);

  return (
    <div className=" p-10 text-center">
      <textarea
        className=" p-4 border border-gray-700 focus:border-blue-700 overflow-hidden"
        name="ht"
        ref={txtAreaRef}
        placeholder="Type Somthing..."
        onChange={handleChange}
        value={text}
        style={{ height: heightTxtArea }}
      ></textarea>
    </div>
  );
};

export default TextAreaResize;
