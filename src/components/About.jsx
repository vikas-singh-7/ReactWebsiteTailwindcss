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
          <p className="text-xl py-3 font-semibold max-sm:hidden">
            I know you are scared, scared of yourself, scared about "what will i
            do in life" , scared about "I never make my parents happy" , scared
            about "they dont deserve the kid like me" , scared about "they are
            doing their best for me , and i am not giving them something back
            from my side". But its okay , its okay to feel this way , this is
            not your fault , because I know you dont want this, you are not this
            , the surroundings , the environmental exposure you got , or the
            things you feel has made you to think like this.Remember if god sent
            you on 🌎 , then God must have a purpose , a good purpose that even
            God himslef can not do.So you were his choice to make that purpose
            done ! . Beleive in God , Give yourself to him , put your soul ,
            body all in front of him,and tell him that now you have to become
            the "Sails Of My Ship". Now i will be flowen to the direction ,
            where you will take me.{" "}
            <span className="text-xl text-violet-800">
              Bhagwaan Pe Bharosa Rakho Sab Sahi Hoga
            </span>
          </p>
        </div>
        <div
          className="md:w-1/2 md:h-[70vh] rounded-xl bg-cover bg-center bg-no-repeat max-sm:grid-col-span-6 max-sm:bg-teal-500 max-sm:col-span-8 max-sm:bg-[url('https://wallpapers.com/images/high/4k-bmw-e9-uuw2pbtdury3rjzz.webp')] max-sm:bg-center max-sm:bg-cover"
          style={{
            backgroundImage: "url('TRUST.jpg')",
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
