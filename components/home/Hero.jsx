"use client";
import React, { useEffect, useState } from "react";
import Canvas3d from "./Canvas";
import Model3D from "./Model3D";
import BaseComp from "../Util/BaseComp";
import RotatingShape from "../Services/Shape";
import { StaticContent, TextContent } from "@/lib/Content";

const content = new TextContent().homepage?.hero

function Hero() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [index]);

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + content.length) % content.length);
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % content.length);
  };
  return (
    <>
      <BaseComp className="h-svh overflow-hidden relative ">
        <RotatingShape className=" z-50 md:-left-52 -left-36 top-60  opacity-30" size={1.5}/>
        <div className="absolute w-full h-full inset-0 bg-[linear-gradient(to_right,rgba(23,23,23,0.7),_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,23,23,0.7),_1px,transparent_1px)] animate dark:bg-[linear-gradient(to_right,#171717,_1px,transparent_1px),linear-gradient(to_bottom,#171717,_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black dark:from-neutral-950 dark:via-transparent dark:to-neutral-950"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black dark:from-neutral-950 dark:via-transparent dark:to-neutral-950"></div>
        <div className="absolute size-40 bg-neutral-800 left-0 bottom-28 rounded-full blur-3xl "></div>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 h-full  z-10  ">
          <div
            className={`w-full h-full relative  md:order-2 col-span-1 row-span-1`}
          >
            <div className="absolute md:size-60 size-48 bg-neutral-800 right-0 top-40 rounded-full blur-3xl "></div>
            <Canvas3d
              Model3D={
                <Model3D scale={1} position={[0, 0, 0]} rotation={[0, 0, 0]} />
              }
              
            />
          </div>
          <div className="relative w-full flex md:items-center justify-center  h-full col-span-1 row-span-1">
            {content.map((item, i) => {
              return (
                <div
                  key={i}
                  className={`absolute  w-full  ${
                    index === i ? "visible" : "invisible"
                  }`}
                >
                  <div className="relative">
                    <div className=" h-full flex flex-col md:justify-center">
                      <div className="w-full">
                        <div className="md:mt-6 tracking-tighter text-main-color-950 flex flex-col text-background">
                          <span
                            className={`font-sans font-normal text-2xl md:text-6xl transition-all duration-[2.3s] delay-75
              ${
                index === i
                  ? "opacity-100 translate-y-0 visible"
                  : "invisible opacity-0 translate-y-20"
              }
              `}
                          >
                            {item.title}
                          </span>

                          <span
                            className={`abril-fatface-regular text-theme-600 font-bold text-5xl md:text-9xl transition-all duration-[2s] delay-150
              ${
                index === i
                  ? "opacity-100 translate-y-0 visible"
                  : "invisible opacity-0 translate-y-20"
              }
              `}
                          >
                            {item.title2}
                          </span>
                        </div>
                        <p
                          className={` font-sans text-sm md:text-base font-normal md:leading-7 text-muted-foreground transition-all duration-[2s]
            ${
              index === i
                ? "opacity-100 translate-y-0 visible"
                : "invisible opacity-0 translate-y-20"
            }
            `}
                        >
                          {item.description}
                        </p>

                        <div
                          className={`flex items-center mt-5 space-x-3 sm:space-x-4  transition-all duration-[2s]
            ${
              index === i
                ? "opacity-100 translate-y-0 visible"
                : "invisible opacity-0 translate-y-20"
            }
            `}
                        >
                          <SocialIcons />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="absolute md:bottom-16 bottom-5 z-30 left-0 right-0 flex flex-col justify-center items-center">
            <div className="flex items-center justify-center gap-2 mt-5 md:mt-10">
              {content.map((_item, i) => {
                return (
                  <div
                    onClick={() => setIndex(i)}
                    key={i}
                    className={`h-1  cursor-pointer transition-all duration-300  bg-gray-400 ${
                      i === index ? "opacity-80 w-4" : "opacity-15 w-2"
                    }`}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </BaseComp>
    </>
  );
}

export default Hero;

const socilMedia = new StaticContent().socialLinks
const SocialIcons = () => {
  return (
    <div className="flex items-center justify-center gap-2 text-neutral-300">
      {socilMedia?.map((item, i) => {
        return (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className=""
          >
            <div className="relative flex items-center justify-center group">
              <div className="absolute h-full text-xs py-0.5 px-2 -top-5 rounded-full bg-neutral-900 text-neutral-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:-translate-y-2 scale-90  transition-all duration-500 ">
                {item.name}
              </div>
              {<item.icon size={20} />}
            </div>
          </a>
        );
      })}
    </div>
  );
};
