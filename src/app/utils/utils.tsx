import { RefObject } from "react";

export const scrollCalc = (
  scrollTopParam: number,
  documentHeightParam: number,
  buttonUp: RefObject<HTMLButtonElement>,
  buttonDown: RefObject<HTMLButtonElement>
) => {
  const scrollMax = documentHeightParam - window.innerHeight; // !
  const veintePorciento = scrollMax * 0.2;
  const ochentaPorciento = scrollMax * 0.8;

  if (scrollTopParam > veintePorciento) {
    buttonUp.current.className = "button__show";
  } else {
    buttonUp.current.className = "button__hide";
  }
  if (scrollTopParam > ochentaPorciento) {
    buttonDown.current.className = "button__hide";
  } else {
    buttonDown.current.className = "button__show";
  }
};
