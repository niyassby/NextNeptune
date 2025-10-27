"use client";
import React from "react";
import BaseComp from "../Util/BaseComp";
import { StaticContent } from "@/lib/Content";
import useAnimationEffects from "../Util/upAnimation";

const team = new StaticContent().team;

function TeamImgaes() {
  useAnimationEffects({
    upSelector: '.teamImg',
    defaultUpAnimation: {
      opacity: 0,
      y: 70,  
      duration: 0.6
    }
  });
  return (
    <BaseComp className="bg-neutral-100 pb-20">
      <div>
        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 grid-rows-1 grid-cols-1 sm:grid-rows-3 lg:grid-rows-2 gap- y-6">
          {team.map((item, index) => {
            return (
              <div
                key={index}
                className="teamImg w-full h-full max-md:h-[350px] flex flex-col items-center justify-center transition-all perFectIcons overflow-hidden group  relative  "
              >
                <img
                  className="w-full h-full object-cover grayscale-100 group-hover:scale-100 scale-105 transition-all duration-500"
                  src={item.image}
                  alt=""
                />

                <div className="inset-0  flex flex-col justify-end p-6 bg-black/60  absolute opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className=" font-semibold text-lg text-white group-hover:-translate-y-5 transition-all duration-500">
                    {item.name}
                  </h3>
                  <p className="text-sm text-neutral-300 group-hover:-translate-y-5 transition-all duration-500">
                    {item.desig}
                  </p>
                </div>
              </div>
            );
          })}

          <div className="w-full h-full max-md:h-[300px]   perFectIcons overflow-hidden  relative  bg-neutral-800">
            <div className=" flex flex-col justify-end p-6 pb-10 w-full h-full  transition-all duration-500">
              <h3 className=" font-semibold text-white  transition-all duration-500">
                Meet{" "}
                <span className="font-extralight text-neutral-300 ">
                  Our Team
                </span>
              </h3>
              <p className="text-xs font-light text-neutral-300 group-hover:-translate-y-5 transition-all duration-500">
                make a appoinment to meet with our team
              </p>
            </div>
          </div>
        </div>
      </div>
    </BaseComp>
  );
}

export default TeamImgaes;
