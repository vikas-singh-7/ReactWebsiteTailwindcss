import React, { useEffect, useState } from "react";

const Eyes = ({ image }) => {
  const [rotateLeft, setRotateLeft] = useState(0);
  const [rotateRight, setRotateRight] = useState(0);

  useEffect(() => {
    const handleMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaXLeft = mouseX - window.innerWidth / 2 - 50; // Adjusting for the eye's position
      let deltaYLeft = mouseY - window.innerHeight / 2;

      let deltaXRight = mouseX - window.innerWidth / 2 + 50; // Adjusting for the eye's position
      let deltaYRight = mouseY - window.innerHeight / 2;

      let angleLeft = Math.atan2(deltaYLeft, deltaXLeft) * (180 / Math.PI);
      let angleRight = Math.atan2(deltaYRight, deltaXRight) * (180 / Math.PI);

      // Adjusting the angle to make eyes follow the mouse
      setRotateLeft(angleLeft - 180);
      setRotateRight(angleRight - 180);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div className="eyes h-screen  w-full  overflow-hidden ">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className={` relative h-screen w-full  bg-center bg-cover `}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex justify-center items-center">
            <div className=" relative w-2/3 h-2/3 bg-black rounded-full">
              <div
                style={{
                  transform: `translate(-50% , -50%) rotate(${rotateLeft}deg)`,
                }}
                className=" absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]   w-full"
              >
                <div className="w-6  bg-zinc-100 h-6 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex justify-center items-center">
            <div className=" relative  w-2/3 h-2/3 bg-black rounded-full">
              <div
                style={{
                  transform: `translate(-50% , -50%) rotate(${rotateRight}deg)`,
                }}
                className=" w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] "
              >
                <div className="w-6  bg-zinc-100 h-6 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;

//
// Bilkul sahi samjha hai aapne! Aapne useEffect ke concept ko acche se samjha hai.

// Jab aapka component mount hota hai, useEffect ek baar chalta hai. Is waqt, useEffect ka callback function run hota hai aur wo hello first console message ko print karta hai, aur phir ek event listener window pe setup kar deta hai.

// Jab aap mouse ko move karte hain, tab wo event listener trigger hota hai aur uska associated callback function chala jata hai (jo handleMove function hai). Is function me, mouse ki position se angles calculate hote hain aur state variables update hote hain. Ye state update hone se component re-render hota hai.

// Phir, jab component unmount hota hai, useEffect ka cleanup function run hota hai. Is cleanup function me, event listener remove ho jata hai. Lekin state change hone ki wajah se component phir se re-render hota hai, aur useEffect fir se chalta hai, jisme naya event listener setup hota hai aur process dohraya jata hai.

// Aapne useEffect ke working ko bohot acche se explain kiya hai. Agar aapke aur koi sawaal ya clarification chahiye, toh mujhse poochiye!
