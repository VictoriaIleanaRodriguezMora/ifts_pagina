import { useEffect, useRef } from "react";
import { scrollCalc } from "../utils/utils";

export const useScrollButtons = () => {

  const buttonUpRef = useRef(null);
  const buttonDownRef = useRef(null);

   useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      scrollCalc(scrollTop, scrollHeight, buttonUpRef, buttonDownRef);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { buttonUpRef, buttonDownRef };

}
