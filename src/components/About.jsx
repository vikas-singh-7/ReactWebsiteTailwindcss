import React from "react";

import { GoDotFill } from "react-icons/go";
const About = () => {
  return (
    <div className="w-full py-20 bg-[#CDEA68] rounded-t-3xl text-black">
      <h1 className=" text-[4.5vw] font-[NeueMontreal] leading-[4.5vw] p-3 tracking-tight">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="w-full flex gap-5 border-t-2 mt-20 border-[#99AD53] p-10">
        <div className="w-1/2">
          <h1 className="text-6xl">Our approach:</h1>
          <button className="bg-[#000000] mt-10 px-10 py-4 rounded-full text-[#D1D1D1] flex gap-10  items-center ">
            Read More
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </button>
        </div>
        <div
          className="w-1/2 h-[70vh] rounded-xl bg-cover bg-no-repeat "
          style={{
            backgroundImage:
              "url('https://wallpapers.com/images/high/4k-bmw-e9-uuw2pbtdury3rjzz.webp')",
          }}
        ></div>
      </div>
    </div>
  );
};

export default About;
