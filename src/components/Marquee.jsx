import React from "react";
import { motion } from "framer-motion";
const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-.1"
      className="w-full md:mt-20 max-sm:mt-24 md:py-20 max-sm:py-14 bg-[#004D43] rounded-t-3xl"
    >
      <div className="text border-t-[1px] border-b-[1px] border-zinc-200 flex overflow-hidden  whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 6, repeat: Infinity }}
          className="md:text-[20vw] max-sm:text-[20vw] tracking-tight leading-none uppercase font-[FoundersGrotesk] font-semibold pr-20"
        >
          we are ochi
        </motion.h1>

        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 6, repeat: Infinity }}
          className="md:text-[20vw] max-sm:text-[22vw] tracking-tight leading-none uppercase font-[FoundersGrotesk] font-semibold pr-20"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
