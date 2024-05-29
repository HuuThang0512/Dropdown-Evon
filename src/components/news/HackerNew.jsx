/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import axios from "axios";
// https://hn.algolia.com/api/v1/search?query=react

const initialState = {
  hits: [],
  query: "",
  loading: true,
  errorMessage: "",
  url: "https://hn.algolia.com/api/v1/search?query=''",
  test: "",
};

const hackerNewReducer = (state, action) => {
  switch (action.type) {
    case "SET_HITS":
      return { ...state, hits: action.payload };
    case "SET_QUERY":
      return { ...state, query: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, errorMessage: action.payload };
    case "SET_URL":
      return {
        ...state,
        url: `https://hn.algolia.com/api/v1/search?query=${action.payload}`,
      };
    case "SET_TEST":
      return state;
    default:
      break;
  }
};

const HackerNew = () => {
  const [state, dispatch] = React.useReducer(hackerNewReducer, initialState);
  const handleFetchData = React.useRef({});
  const handleChangeQuery = (e) => {
    dispatch({ type: "SET_QUERY", payload: e.target.value });
  };
  handleFetchData.current = async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const response = await axios.get(`${state.url}`);
      dispatch({ type: "SET_HITS", payload: response.data.hits || [] });
      dispatch({ type: "SET_LOADING", payload: false });
    } catch (err) {
      dispatch({ type: "SET_ERROR", payload: err });
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };
  useEffect(() => {
    handleFetchData.current();
  }, [state.url]);
  return (
    <div className=" rounded-lg w-[40%] mx-auto mb-10">
      <div className="flex gap-x-5 mx-auto my-5">
        <input
          placeholder="Enter to search"
          type="text"
          className=" border-blue-100 border-2 focus:border-blue-300 p-3 rounded-lg flex-1"
          onChange={handleChangeQuery}
        />
        <button
          className=" bg-blue-400 text-white p-5 rounded-lg font-medium"
          onClick={() => dispatch({ type: "SET_URL", payload: state.query })}
        >
          Search
        </button>
      </div>
      <div>
        {state.loading && (
          <p className="text-center text-blue-500 font-medium">Loading...</p>
        )}

        {!state.loading && state.errorMessage && (
          <p className="text-center text-red-500 font-medium">
            Have error
          </p>
        )}

        {!state.loading && state.hits.length < 1 && (
          <p className="text-center text-blue-500 font-medium">
            No relevant news was found
          </p>
        )}

        <div className="flex gap-5 flex-wrap">
          {!state.loading &&
            !state.errorMessage &&
            state.hits.length > 0 &&
            state.hits.map(
              (item, index) =>
                item.title && (
                  <div
                    key={`${index}${item.title}`}
                    className=" p-3 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition-all"
                  >
                    {item.title}
                  </div>
                )
            )}
        </div>
      </div>
    </div>
  );
};

export default HackerNew;
