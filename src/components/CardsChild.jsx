import React from "react";
import Button from "./Button";

const CardsChild = ({ image, text }) => {
  return (
    <div className="md:h-[55vh]    max-sm:items-center  max-sm:h-[20vh] max-sm:w-[90vw] relative md:flex  justify-center items-center rounded-xl md:w-[22vw] bg-[#212121]   ">
      <div className="max-sm:h-[50%]  max-sm:flex max-sm:justify-center max-sm:items-center ">
        <img src={image} alt="" className="max-sm:w-[70px] max-h-[70px]" />
      </div>

      <div className="max-sm:h-[50%]  max-sm:flex  max-sm:items-end max-sm:px-3 max-sm:py-2 ">
        <Button text={text} />
      </div>
    </div>
  );
};

export default CardsChild;
