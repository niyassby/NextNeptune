"use client";
import React from "react";
import useAnimationEffects from "../Util/upAnimation";
import BaseComp from "../Util/BaseComp";
import NewButton from "../ui/NewButton";
import { Meteors } from "../ui/Meteors";
import { SecurityCheckIcon } from "hugeicons-react";
import Canvas3d from "./Canvas";
import { LaptopModel } from "../Laptop3d/LaptopModel";
import { useRouter } from "next/navigation";

function Section2() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/services');
  };
  useAnimationEffects({
    upSelector: ".sectionBg",
    defaultUpAnimation: {
      opacity: 0,
      y: 40,
    },
  });
  return (
    <BaseComp className="min-h-screen py-20 flex items-center ">
      <div className=" ">
        <div className="grid md:grid-cols-2 md:items-center md:gap-20 gap-6 ">
          <div className="w-full  h-full min-h-[450px] grid md:grid-cols-2 grid-rows-2 gap-4">
            
            <div   className="col-span-1 row-span-2 min-h-60 cursor-pointer group relative flex flex-col justify-end  w-full h-full py-6 px-6 bg-[#111111] transition-all rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[4.4px] border-1 border-[rgba(241,242,246,0.15)] overflow-hidden duration-500 hover:shadow-xl shadow-neutral-950">
              <div className="absolute  -left-20 rotate-45 -top-28 w-full h-full">
                <img className="scale-150 w-full h-full object-contain " src="./assets/backgroun-dot.png" alt="" />
              </div>
              
              <h1 className="font-bold relative text-lg leading-5 text-white cardhover">Future-Proof Technology</h1>
              <p className="text-neutral-400 relative mt-2 text-xs  cardhover">
              Scalable, robust architecture built with the latest MarTech, ready for tomorrow's growth.
              </p>
            </div>
            
            <div className="col-span-1 row-span-1 cursor-pointer group relative flex flex-col justify-center items-center text-center  w-full h-full py-6 px-6 bg-[#111111] transition-all rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[4.4px] border-1 border-[rgba(241,242,246,0.15)] overflow-hidden duration-500 hover:shadow-xl shadow-neutral-950">
              <SecurityCheckIcon size={40} strokeWidth={1} className="text-neutral-200 cardhover"/>
              <h1 className="font-bold text-xl leading-5 text-white  cardhover mt-4">Creative That Converts</h1>
              <p className="text-neutral-400 mt-2 text-xs  cardhover">
              Fresh, engaging designs and campaigns that turn attention into action.
              </p>
            </div>
            
            <div className="col-span-1 row-span-1 cursor-pointer group relative flex flex-col justify-end  w-full h-full py-6 px-6 bg-[#111111] transition-all rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[4.4px] border-1 border-[rgba(241,242,246,0.15)] overflow-hidden duration-500 hover:shadow-xl shadow-neutral-950">
             <Meteors number={30} isHovered={true} />
             <div className="space-y-1 cardhover">
             <h1 className="font-bold text-lg leading-5 text-white">True</h1>
              <h1 className="font-bold text-3xl leading-5 text-theme-500">360<span className="text-white font-light">-Degree</span></h1>
              <h1 className="font-bold text-lg leading-5 text-white">Integration</h1>
             </div>
              <p className="text-neutral-400 mt-5 text-xs cardhover">
              Unified teams for faster deployment, cleaner code, and campaigns aligned with UX.
              </p>
            </div>
          </div>

          <div className="">
            <div className="space-y-2 md:space-y-6">
              <h2 className="font-bold text-3xl lg:text-5xl text-white sectionBg">
              Why Partner with <br /><span className="font-light text-4xl text-neutral-400">Neptune Mark Digital Creators LLP?</span>
              </h2>
              <p className="text-neutral-500 sectionBg">
                We are not just a service provider; we are your integrated
                growth partner dedicated to building your brand's future.
                Neptune Mark excels by rejecting fragmented digital solutions.
                Our strength lies in the seamless, internal convergence of
                cutting-edge technology, bold creative vision, and rigorous
                performance marketing. This unique synergy ensures every project
                we undertake is not merely a task completed, but a cohesive
                digital ecosystem designed for scale and efficiency. 
              </p>
              <p className="text-neutral-500 sectionBg">
              We are committed to translating your vision into measurable reality,
                ensuring sustained growth and a lasting digital legacy that sets
                you apart from the competition.
              </p>
              <NewButton onClick={handleClick} className="sectionBg ">View More</NewButton>
            </div>
          </div>
        </div>
      </div>
    </BaseComp>
  );
}

export default Section2;
