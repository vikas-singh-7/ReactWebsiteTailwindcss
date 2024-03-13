import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { Power4 } from "gsap";
import { motion } from "framer-motion";
import Quotes from "./Quotes";

const FeaturedProjects = () => {
  const [isHoveringa, setHoveringa] = useState(false);
  const [isHovering, setHovering] = useState(false);
  return (
    <div className="w-full  py-20">
      <div className="w-full md:px-20 max-sm:px-5 border-b-[1px] border-zinc-700 md:pb-20">
        <h1 className="md:text-7xl font-[NeueMontreal] tracking-tight max-sm:text-[3rem]">
          Featured Project
        </h1>
      </div>

      <div className="md:px-20">
        <div className="flex mt-12 max-sm:px-5">
          <div className="w-full flex items-center">
            <div>
              <GoDotFill />
            </div>
            <p className="max-sm:text-xl">FYDE</p>
          </div>
          <div className="w-full ml-12 flex items-center">
            <div>
              <GoDotFill />
            </div>
            <p className="max-sm:text-xl">VISE</p>
          </div>
        </div>
        <div className="cards w-full md:flex md:gap-10 mt-10 max-sm:bg-lime-500 max-sm:rounded-md max-sm:grid max-sm:grid-cols-12 max-sm:gap-4 max-sm:p-5 max-sm:h-[50vh] max-sm:items-center">
          <div
            className=" relative cardContainer md:w-1/2 md:h-[75vh] max-sm:col-span-6 max-sm:h-[30vh]"
            onMouseEnter={() => setHoveringa(true)}
            onMouseLeave={() => setHoveringa(false)}
          >
            <h1
              className="absolute max-sm:hidden
            overflow-hidden text-8xl flex text-[#CDEA68] font-bold left-full -translate-x-[50%] z-[4] top-1/2 -translate-y-[50%] font-[NeueMontreal] rounded-xl "
            >
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHoveringa ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block translate-y-full "
                  key={item}
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="card  h-full w-full rounded-xl overflow-hidden  ">
              <img
                className="w-full h-full"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div
            className="cardContainer relative md:w-1/2 md:h-[75vh] max-sm:col-span-6 max-sm:h-[30vh] "
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <h1 className="absolute text-8xl max-sm:hidden text-[#CDEA68] font-bold right-full flex translate-x-[50%] z-[4] top-1/2 -translate-y-[50%] font-[NeueMontreal] rounded-xl ">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHovering ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block translate-y-full "
                  key={item}
                >
                  {isHovering && item}
                </motion.span>
              ))}
            </h1>
            <div className="card h-full w-full rounded-xl overflow-hidden ">
              <img
                className="w-full h-full"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <Quotes quote=" “You had me at ‘hello.’" text="center" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
