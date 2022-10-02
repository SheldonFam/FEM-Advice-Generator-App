import React, { useEffect, useState } from "react";
import destopdivider from "../images/pattern-divider-desktop.svg";
import mobiledivider from "../images/pattern-divider-mobile.svg";
import Button from "./Button";

const Advicecontainer = () => {
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
    <div className="flex flex-col items-center justify-center h-screen bg-darkBlue font-manrope font-bold text-lightCyan ">
      <main className="flex flex-col items-center justify-center p-5 bg-darkGrayishBlue rounded-[10px] w-[343px] h-[316px] relative md:w-[540px]">
        <h1 className="text-neonGreen text-headingS md:text-heading uppercase mb-6">
          Advice # {quote.id}
        </h1>
        <p className="text-quoteS md:text-quote md:h-[150px] px-5 mb-5 text-center">
          “{quote.advice}”
        </p>
        <div className="md:hidden mb-5">
          <img className="inline" src={mobiledivider} alt="divider" />
        </div>
        <div className="hidden md:block mb-5">
          <img className="inline" src={destopdivider} alt="destopdivider" />
        </div>
        <Button onClick={fetchAdvice} />
      </main>
    </div>
  );
};

export default Advicecontainer;
