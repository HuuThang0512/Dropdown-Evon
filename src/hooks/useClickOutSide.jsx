/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";

export default function useClickOutSide(dom = "button") {
  const nodeRef = useRef();
  const [show, setShow] = useState(false);
  console.log("useClickOutSide", show);
  const handleClickOut = useRef();
  handleClickOut.current = (e) => {
    if (
      nodeRef.current &&
      !nodeRef.current.contains(e.target) &&
      !nodeRef.current.matches(dom)
    ) {
      setShow(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOut.current);
    return () => {
      document.removeEventListener("click", handleClickOut.current);
    };
  }, []);
  
  return {
    nodeRef,
    show,
    setShow,
  };
}
