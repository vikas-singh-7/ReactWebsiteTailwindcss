import React from "react";

import { GoDotFill } from "react-icons/go";
const About = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-.1"
      className="w-full py-20 bg-[#CDEA68] rounded-t-3xl text-black"
    >
      <h1 className="md:text-[4.5vw] font-[NeueMontreal] md:leading-[4.5vw] p-3 md:tracking-tight max-sm:text-[2rem]">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="w-full md:flex md:gap-5 border-t-2 md:mt-20 max-sm:gap-2 max-sm:py-9 border-[#99AD53] md:p-10 max-sm:grid max-sm:grid-cols-12  max-sm:mt-[3rem] max-sm:h-1/2 ">
        <div className="md:w-1/2 max-sm:col-span-4  max-sm:h-[40vh] max-sm:w-full max-sm:grid max-sm:grid-cols-12 max-sm:gap-4">
          <h1 className="md:text-6xl max-sm:text-[2rem] max-sm:col-span-12 max-sm:rounded-md  max-sm:flex max-sm:justify-center max-sm:items-center">
            Our approach:
          </h1>
          <button className="bg-[#000000] md:mt-10 md:px-10 md:py-4 rounded-full text-[#D1D1D1] md:flex md:gap-10  md:items-center  max-sm:col-span-12 max-sm:h-[50%] max-sm:w-[70%]   max-sm:hidden ">
            Read More
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </button>
        </div>
        <div
          className="md:w-1/2 md:h-[70vh] rounded-xl bg-cover bg-no-repeat max-sm:grid-col-span-6 max-sm:bg-teal-500 max-sm:col-span-8 max-sm:bg-[url('https://wallpapers.com/images/high/4k-bmw-e9-uuw2pbtdury3rjzz.webp')] max-sm:bg-center"
          style={{
            backgroundImage:
              "url('https://wallpapers.com/images/high/4k-bmw-e9-uuw2pbtdury3rjzz.webp')",
          }}
        ></div>
      </div>
      <h1 className=" md:hidden max-sm:p-2 max-sm:text-xl max-sm:font-semibold max-sm:flex  items-center ">
        <GoDotFill size={20} /> We care for peoples , We Care for you
      </h1>
    </div>
  );
};

export default About;
