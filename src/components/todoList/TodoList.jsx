/* eslint-disable no-unused-vars */
import React, { useReducer, useRef } from "react";
import "./TodoList.css";

const initState = {
  job: "",
  jobs: [],
};
const SET_JOB = "set jobs";
const ADD_JOB = "add jobs";
const DELETE_JOB = "delete jobs";
const a = [1, 2, 3, 4, 5];

const TodoList = () => {
  const inputRef = useRef();
  const reducer = (state, action) => {
    let newState;
    const new_jobs = [...state.jobs];
    switch (action.type) {
      case SET_JOB:
        return {
          ...state,
          job: action.payload,
        };
      case ADD_JOB:
        return {
          ...state,
          jobs: [...state.jobs, action.payload],
        };
      case DELETE_JOB:
        new_jobs.splice(action.index, 1);
        return {
          ...state,
          jobs: new_jobs,
        };
      default:
        throw new Error("Invalid action");
    }
  };
  const setJob = (payload) => {
    return {
      type: SET_JOB,
      payload: payload,
    };
  };

  const addJob = (payload) => {
    return {
      type: ADD_JOB,
      payload: payload,
    };
  };

  const deleteJob = (payload) => {
    return {
      type: DELETE_JOB,
      index: payload,
    };
  };

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };

  let [state, dispatch] = useReducer(reducer, initState);
  let { job, jobs } = state;
  return (
    <div className="todo-block">
      <input
        ref={inputRef}
        type="text"
        placeholder="Add Some Work"
        value={job}
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>ADD</button>
      <div className="work-list">
        {jobs.map((job, index) => (
          <div key={index} className="work-item">
            {job}
            <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
