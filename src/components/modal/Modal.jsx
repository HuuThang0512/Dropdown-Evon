/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Modal = ({ open = false, handleClose = () => {} }) => {
  if (typeof document === "undefined") {
    return <div className="modal"></div>;
  }
  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-5 ${
        open ? "" : "opacity-0 invisible"
      }`}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-25 overlay"
        onClick={handleClose}
      ></div>
      <div className="relative z-10 p-10 bg-white rounded-lg modal-content w-full max-w-[482px]">
        <span
          className="absolute top-0 right-0 flex items-center justify-center w-10 h-10 bg-white rounded-full cursor-pointer translate-x-2/4 -translate-y-2/4"
          onClick={handleClose}
        >
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="19" cy="19" r="18.5" fill="white" stroke="#E7ECF3" />
            <path
              d="M20.225 19L25.7375 13.4875C26.0875 13.1375 26.0875 12.6125 25.7375 12.2625C25.3875 11.9125 24.8625 11.9125 24.5125 12.2625L19 17.775L13.4875 12.2625C13.1375 11.9125 12.6125 11.9125 12.2625 12.2625C11.9125 12.6125 11.9125 13.1375 12.2625 13.4875L17.775 19L12.2625 24.5125C12.0875 24.6875 12 24.8625 12 25.125C12 25.65 12.35 26 12.875 26C13.1375 26 13.3125 25.9125 13.4875 25.7375L19 20.225L24.5125 25.7375C24.6875 25.9125 24.8625 26 25.125 26C25.3875 26 25.5625 25.9125 25.7375 25.7375C26.0875 25.3875 26.0875 24.8625 25.7375 24.5125L20.225 19Z"
              fill="#84878B"
            />
          </svg>
        </span>
        <h2 className="mb-8 text-[36px] font-semibold text-center text-black">
          Welcome Back
        </h2>
        <div className="flex flex-col gap-3 mb-6">
          <label htmlFor="email" className="cursor-pointer text-[14px]">
            Email Address
          </label>
          <input
            type="email"
            className="w-full text-[14px] bg-[#E7ECF3] rounded-lg p-4"
            placeholder="Enter your email..."
          />
        </div>
        <div className="flex flex-col gap-3 mb-6">
          <label htmlFor="password" className="cursor-pointer text-[14px]">
            Password
          </label>
          <input
            type="password"
            className="w-full text-[14px] bg-[#E7ECF3] rounded-lg p-4"
            placeholder="Enter your password..."
          />
        </div>
        <button className="w-full p-4 font-semibold text-white bg-[#316BFF] rounded-lg">
          Submit
        </button>
      </div>
    </div>,
    document.querySelector("body")
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Modal;
