/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react";

export default function useLinkNewTab() {
    const linkNewRef = useRef(null)
    useEffect(() => {
        if (linkNewRef.current) {
          const aTags = linkNewRef.current.querySelectorAll("a");
          aTags.length > 0 &&
            aTags.forEach((item) => {
              item.setAttribute("target", "_blank");
            });
        }
    }, [])
    return { linkNewRef };
}