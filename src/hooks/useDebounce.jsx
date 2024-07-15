/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

export default function useDebounce(initialValue, delay) {
  const [debounceValue, setDebounceValue] = useState(initialValue);
  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(initialValue), delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay, initialValue]);
  return debounceValue;
}
