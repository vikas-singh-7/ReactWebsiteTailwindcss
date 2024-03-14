import React from "react";

import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FaArrowDownLong } from "react-icons/fa6";
import Quotes from "./Quotes";

const LandingPage = () => {
  const endparas = [
    "For public and private companies",
    "From the first pitch to IPO",
  ];
  const Headings = ["We Create", "Eye-Opening", "Presentations"];
  return (
    <div
      data-scroll
      data="true"
      data-scroll-speed="-.4"
      className="w-full relative h-screen bg-zinc-900 pt-1 flex flex-col"
    >
      <div className="textStructure md:mt-50 mt-[7rem] md:px-20 max-sm:px-6">
        {Headings.map((item, index) => {
          return (
            <div className="masker" key={item}>
              <div className=" w-full md:flex md:items-end overflow-hidden max-sm:grid  max-sm:grid-cols-12 ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9rem" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="md:w-[9vw] md:mb-2 w-[5rem] mr-2 bg-green-500 md:h-[6vw]  rounded-md h-[3rem] bg-[url('background.jpg')] bg-cover
                    relative max:sm-col-span-12 max-sm:h-[4rem] "
                  ></motion.div>
                )}
                <h1
                  className={`uppercase max-md:flex max-md:items-center md:text-[7.5vw] max-sm:text-[3rem] md:font-bold font-medium md:leading-[7vw] 
                leading-[3rem] tracking-tighter  max-sm:col-span-12 py-2 `}
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
        <Quotes quote={"What would you do if you weren't afraid"} />
      </div>
      {/* subparas part 2 under border */}
      <div className="border-t-[1px]  border-zinc-800 md:mt-32 max-sm:mt-14 md:flex md:justify-between md:items-center md:px-20   max-sm:grid grid-cols-12 gap-5 max-sm:p-5">
        {endparas.map((item) => (
          <p
            className="md:text-xl md:font-light md:leading-none md:tracking-tighter max-sm:col-span-6  rounded-md md:rounded-none bg-violet-500 md:bg-transparent p-4  max-sm:text-lg md:p-4"
            key={item}
          >
            {item}
          </p>
        ))}
        <div className="start md:flex md:items-center md-gap-2  md:gap-4 max-sm:col-span-12 max-sm:grid max-sm:grid-cols-12  max-sm:gap-6 ">
          <div className="px-5 py-2 border-[1px] rounded-full border-zinc-400 font-light text-md uppercase md:bg-transparent  bg-green-500 max-sm:text-black max-sm:font-semibold col-span-8 max-sm:p-3 max-sm:text-lg ">
            start the project
          </div>
          <div className=" rounded-full flex items-center justify-center md:h-10 md:w-10 max-sm:h-12 max-sm:w-12  border-[1px]  border-zinc-500 ">
            <span className="rotate-[45deg]">
              {" "}
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
      <div className="md:left-[48vw] md:absolute md:mt-4 md:top-[90vh] max-sm:w-full max-sm:flex max-sm:flex-col gap-5 max-sm:justify-center max-sm:h-[18vh] max-sm:items-center  ">
        {" "}
        <h1 className="md:text-lg max-sm:text-2xl  animate-bounce animate-infinite">
          Scroll down
        </h1>
        <span className="md:hidden max-sm:mt-6 max-sm:animate-pulse animate-infinite animate-ease-in">
          <FaArrowDownLong size={30} />
        </span>
      </div>
    </div>
  );
};

export default LandingPage;
