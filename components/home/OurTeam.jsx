"use client";
import React from "react";
import useAnimationEffects from "../Util/upAnimation";
import BaseComp from "../Util/BaseComp";
import NewButton from "../ui/NewButton";
import { StaticContent, TextContent } from "@/lib/Content";
import { useRouter } from "next/navigation";

const team = new StaticContent().team
const content = new TextContent().homepage?.ourTeam

function OurTeam() {
  const navigate = useRouter()
  useAnimationEffects({
    upSelector: '.perFectIcons',
    defaultUpAnimation: {
      opacity: 0,
      y: 50, 
    } 
  });

  return (
    <BaseComp className="w-full bg-neutral-200 py-20  min-h-[900px] flex relative items-center">
      
      {/* Card Blog */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5   ">
        {/* name */}
        <div className=" mb-10 lg:mb-14">
          <h2 className="text-4xl  font-bold md:text-7xl perFectIcons">
          Meet <br /> <span className="font-extralight text-neutral-800 ">Our Team</span>
          </h2>
          <p className="mt-6 max-w-sm  text-gray-600 perFectIcons">
          {content?.description} <br />{content?.description2}
          </p>
          <NewButton onClick={()=>navigate.push('/team')} className='perFectIcons text-lg mt-8 py-5 px-12'>Read More</NewButton>
          <div className="perFectIcons mt-6 text-2xl text-neutral-800">
            <p className="font-extralight">
              We <span className="font-semibold"> delivering</span>
            </p>
            <p className="font-extralight">
            exceptional <span className="font-semibold"> results.</span>
            </p>
          </div>
        </div>

        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 grid-rows-1 grid-cols-1 sm:grid-rows-3 lg:grid-rows-2 gap- y-6">
          {team?.map((item, index) =>{
            return (
              <div key={index} className="w-full h-full max-md:h-[350px] flex flex-col items-center justify-center transition-all perFectIcons overflow-hidden group  relative  " >
              <img className="w-full h-full object-cover grayscale-100  group-hover:scale-105 transition-all duration-500" src={item.image} alt="" />
  
              <div className="inset-0  flex flex-col justify-end p-6 bg-black/60  absolute opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className=" font-semibold text-lg text-white opacity-0 group-hover:opacity-100 group-hover:-translate-y-5 transition-all duration-500">
                {item.name}
                </h3>
                <p className="text-sm text-neutral-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-5 delay-150 transition-all duration-500">{item.desig}</p>
                
              </div>
            </div>
            )
          })}

          <div  className="w-full h-full max-md:h-[300px]   perFectIcons overflow-hidden  relative  bg-neutral-800" >

            <div className=" flex flex-col justify-end p-6 pb-10 w-full h-full  transition-all duration-500">
              <h3 className=" font-semibold text-white  transition-all duration-500">
                Meet <span className="font-extralight text-neutral-300 ">Our Team</span>
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

export default OurTeam;
