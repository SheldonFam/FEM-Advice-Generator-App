import React, { useEffect, useState } from "react";
import dice from "../images/icon-dice.svg";
import destopdivider from "../images/pattern-divider-desktop.svg";
import mobiledivider from "../images/pattern-divider-mobile.svg";

const Advicecontainer = (props) => {
  const URL = "https://api.adviceslip.com/advice";
  const [quote, setQuote] = useState({
    id: 117,
    advice: `It is easy to sit up and take notice, what's difficult is getting
    up and taking action.`,
  });

  useEffect(() => {
    console.log(`quote genereate`);
  }, [quote]);

  const fetchAdvice = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setQuote(data.slip);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-darkBlue font-manrope font-bold text-lightCyan">
      <main className="flex flex-col items-center justify-center p-5 bg-darkGrayishBlue rounded-[10px] w-[343px] h-[316px] relative md:w-[540px]">
        <div className="text-center items-center">
          <h1 className="text-neonGreen text-headingS md:text-heading uppercase mb-6">
            Advice # {quote.id}
          </h1>
          <p className="text-quoteS md:text-quote md:h-[150px] pb-5 px-5 mb-5">
            “{quote.advice}”
          </p>
          <div className="md:hidden mb-5">
            <img className="inline" src={mobiledivider} alt="divider" />
          </div>
          <div className="hidden md:block mb-10">
            <img className="inline" src={destopdivider} alt="destopdivider" />
          </div>
        </div>
        <button
          className="transition hover:shadow-shadow hover:shadow-neonGreen cursor-pointer absolute bottom-[-32px] rounded-full bg-neonGreen w-[64px] h-[64px] flex justify-center items-center "
          onClick={fetchAdvice}
        >
          <img src={dice} alt="dice" />
        </button>
      </main>
    </div>
  );
};

export default Advicecontainer;
