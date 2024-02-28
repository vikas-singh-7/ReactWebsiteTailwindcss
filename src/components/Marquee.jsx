import React from "react";
import { motion } from "framer-motion";
const Marquee = () => {
  return (
    <div className="w-full md:py-20 py-14 bg-[#004D43] rounded-t-3xl">
      <div className="text border-t-2 border-b-2 flex overflow-hidden gap-10 whitespace-nowrap">
        <h1 className="md:text-[20vw] text-[22vw] tracking-tighter leading-none uppercase font-[FoundersGrotesk] font-semibold">
          we are ochi
        </h1>
        <h1 className="md:text-[20vw] text-[22vw] tracking-tighter leading-none uppercase font-[FoundersGrotesk] font-semibold">
          we are ochi
        </h1>
      </div>
    </div>
  );
};

export default Marquee;
