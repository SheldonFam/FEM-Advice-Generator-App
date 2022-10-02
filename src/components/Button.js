import React from "react";
import dice from "../images/icon-dice.svg";
const Button = (props) => {
  return (
    <div className="absolute bottom-[-32px] flex justify-center items-center">
      <button
        className="transition hover:shadow-shadow hover:shadow-neonGreen cursor-pointer rounded-full bg-neonGreen w-[64px] h-[64px] flex justify-center items-center"
        onClick={props.onClick}
      >
        <img src={dice} alt="dice" />
      </button>
    </div>
  );
};

export default Button;
