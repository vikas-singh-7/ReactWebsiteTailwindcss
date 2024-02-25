import React from "react";

const LandingPage = () => {
  const endparas = [
    "For public and private companies",
    "From the first pitch to IPO",
  ];
  const Headings = ["We Create", "Eye-Opening", "Presentations"];
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1 ">
      {/* headings part one  */}
      <div className="textStructure md:mt-52 mt-[7rem] md:px-20 px-10">
        {Headings.map((item) => {
          return (
            <div className="  masker " key={item}>
              <h1 className="uppercase md:text-[7.5vw] text-3xl font-medium md:leading-[6vw] leading-8 tracking-tighter ">
                {item}
              </h1>
            </div>
          );
        })}
      </div>
      {/* subparas part 2 under border */}
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center px-20 py-5">
        {endparas.map((item) => (
          <p className="text-md font-light leading-none tracking-tighter ">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
