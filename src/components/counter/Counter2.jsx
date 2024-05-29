/* eslint-disable no-unused-vars */
import React from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      console.log("Tang");
      return { count: state.count + 1 };
    case "decrement":
      console.log("Giam");
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const Counter = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button
        className=" p-5 bg-blue-400 mx-5 text-white font-medium rounded-lg"
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </button>
      <button
        className=" p-5 bg-blue-400 mx-5 text-white font-medium rounded-lg"
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </button>
    </>
  );
};

export default Counter;
