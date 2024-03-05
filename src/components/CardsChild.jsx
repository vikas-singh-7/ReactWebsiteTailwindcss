import React from "react";
import Button from "./Button";

const CardsChild = ({ image ,text}) => {
  return (
    <button>
      <div className="h-[55vh] relative flex  justify-center items-center rounded-xl w-[22vw] bg-[#212121]">
        <img src={image} alt="" />
        <Button text={text} />
      </div>
    </button>
  );
};

export default CardsChild;
