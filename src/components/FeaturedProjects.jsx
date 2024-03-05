import React from "react";
import { GoDotFill } from "react-icons/go";

const FeaturedProjects = () => {
  return (
    <div className="w-full  py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-7xl font-[NeueMontreal] tracking-tight">
          Featured Project
        </h1>
      </div>

      <div className="px-20">
        <div className="flex mt-12">
          <div className="w-full flex items-center">
            <div>
              <GoDotFill />
            </div>
            <p>FYDE</p>
          </div>
          <div className="w-full ml-12 flex items-center">
            <div>
              <GoDotFill />
            </div>
            <p>VISE</p>
          </div>
        </div>
        <div className="cards w-full flex gap-10 mt-10">
          <div className=" relative cardContainer w-1/2 h-[75vh] ">
            <h1 className="absolute text-8xl text-[#CDEA68] font-bold left-full -translate-x-[50%] z-[4] top-1/2 -translate-y-[50%] font-[NeueMontreal] rounded-xl ">
              {"FYDE".split("").map((item, index) => (
                <span key={item}>{item}</span>
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
          <div className="cardContainer relative w-1/2 h-[75vh] ">
            <h1 className="absolute text-8xl text-[#CDEA68] font-bold right-full translate-x-[50%] z-[4] top-1/2 -translate-y-[50%] font-[NeueMontreal] rounded-xl ">
              {"VISE".split("").map((item, index) => (
                <span key={item}>{item}</span>
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
      </div>
    </div>
  );
};

export default FeaturedProjects;
