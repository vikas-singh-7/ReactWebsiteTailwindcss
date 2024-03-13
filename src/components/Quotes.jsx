import React from "react";

const Quotes = ({ quote, text }) => {
  return (
    <div
      className={`animate-pulse  animate-infinite animate-ease-in md:hidden max-sm:text-2xl max-sm:mt-2 max-sm:h-[12vh] max-sm:rounded-lg max-sm:flex max-sm:px-2 max-sm:items-center max-sm:bg-orange-500 ${
        quote.includes("hello") && "justify-center"
      }`}
    >
      <h1>{quote}</h1>
    </div>
  );
};

export default Quotes;
