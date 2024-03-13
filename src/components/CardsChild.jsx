import React from "react";
import Button from "./Button";

const CardsChild = ({ image, text }) => {
  return (
    <div className="md:h-[55vh]   max-sm:h-[20vh] max-sm:w-[90vw] relative flex  justify-center items-center rounded-xl md:w-[22vw] bg-[#212121]   max-sm:overflow-hidden">
      <img src={image} alt="" className="max-sm:w-[100px] max-h-[100px]" />

      <Button text={text} />
    </div>
  );
};

export default CardsChild;
