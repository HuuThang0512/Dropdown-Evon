/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import React from "react";
import useClickOutSide from "../../hooks/useClickOutSide";

const SidebarMenu = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className={`text-blue-500 bg-gray-300 w-[200px] ${
        props.show ? "" : "-translate-x-[200px]"
      }  shadow-md fixed top-0 bottom-0 transition-all`}
    >
      Menu
    </div>
  );
});

export default SidebarMenu;
