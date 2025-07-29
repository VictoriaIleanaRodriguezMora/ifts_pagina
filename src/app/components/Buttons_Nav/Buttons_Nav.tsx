import React from "react";
import { useScrollButtons } from "../../hooks/useScrollButtons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowDown, faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';


const Buttons_Nav = () => {
  const { buttonUpRef, buttonDownRef } = useScrollButtons();

  return (
    <>
      <div id="navegacion">
        <a
          href="#header"
          className=" button__hide"
          ref={buttonUpRef}
          role="button"
          aria-label="Ir arriba"
        >
          <FontAwesomeIcon
            icon={faCircleArrowUp}
            className="navegacion__items"
          />
        </a>

        <a
          href="#footer"
          ref={buttonDownRef}
          role="button"
          aria-label="Ir abajo"
        >
          <FontAwesomeIcon
            icon={faCircleArrowDown}
            className="navegacion__items"
          />
        </a>
      </div>
    </>
  );
};

export default Buttons_Nav;
