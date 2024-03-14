import React from "react";

const Button = ({ text }) => {
  return (
    <button className="border-2 flex justify-center items-center p-1 rounded-3xl md:absolute md:top-[80%] md:left-[5%] px-2">
      {text}
    </button>
  );
};

export default Button;
