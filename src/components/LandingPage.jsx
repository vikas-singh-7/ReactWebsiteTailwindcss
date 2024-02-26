import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  const endparas = [
    "For public and private companies",
    "From the first pitch to IPO",
  ];
  const Headings = ["We Create", "Eye-Opening", "Presentations"];
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1 ">
      {/* headings part one  */}
      <div className="textStructure md:mt-52 mt-[7rem] md:px-20 px-6">
        {Headings.map((item) => {
          return (
            <div className="  masker " key={item}>
              <h1
                className="uppercase md:text-[7.5vw] text-[3rem] font-medium md:leading-[6vw] 
              leading-[60px] tracking-tighter "
              >
                {item}
              </h1>
            </div>
          );
        })}
      </div>
      {/* subparas part 2 under border */}
      <div
        className="border-t-[1px] border-zinc-800 md:mt-32 mt-32 md:flex md:justify-between md:items-center md:px-20 py-5 px-5
     grid grid-cols-12 gap-5 "
      >
        {endparas.map((item) => (
          <p
            className="text-md font-light leading-none md:tracking-tighter col-span-6  rounded-md md:rounded-none bg-violet-500 md:bg-transparent p-4 md:p-0"
            key={item}
          >
            {item}
          </p>
        ))}
        <div className="start md:flex md:items-center gap-2 grid grid-cols-12 col-span-12">
          <div className="px-5 py-2 border-[1px] rounded-full border-zinc-400 font-light text-md uppercase md:bg-transparent  bg-red-500 col-span-8">
            start the project
          </div>
          <div className=" rounded-full flex items-center justify-center h-10 w-10  border-[1px]  border-zinc-500">
            <span className="rotate-[45deg]">
              {" "}
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
