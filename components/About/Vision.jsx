"use client";
import { Target02Icon, VisionIcon } from "hugeicons-react";
import React from "react";
import useAnimationEffects from "../Util/upAnimation";
import BaseComp from "../Util/BaseComp";
import RotatingShape from "../Services/Shape";

function Vision() {
  useAnimationEffects({
    upSelector: ".Mission",
    defaultUpAnimation: {
      opacity: 0,
      y: 40,
    },
  });
  return (
    <BaseComp className="bg-neutral-50 py-20 min-h-screen flex items-center justify-center ">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
        <div className="col-span-2 w-full h-full relative">
          <div className="w-full max-md:hidden max-w-72 border border-neutral-300 h-full max-h-[550px] mx-auto overflow-hidden">
            <div className=" space-y-20  animate-move">
              <div className="grid grid-cols-2 grid-rows-2 w-full aspect-square border border-neutral-300">
                <div className="w-full aspect-square  border border-neutral-300"></div>
                <div className="w-full aspect-square  border border-neutral-300"></div>
                <div className="w-full aspect-square rounded-bl-full border border-neutral-300"></div>
                <div className="w-full aspect-square rounded-br-full border border-neutral-300"></div>
              </div>
              <div className="grid grid-cols-2   w-full ">
                <div className="w-full aspect-square rounded-tl-full border border-neutral-300"></div>
                <div className="w-full aspect-square rounded-tr-full border border-neutral-300"></div>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 w-full aspect-square border border-neutral-300">
                <div className="w-full aspect-square rounded-tl-full border border-neutral-300"></div>
                <div className="w-full aspect-square rounded-tr-full border border-neutral-300"></div>
                <div className="w-full aspect-square rounded-bl-full border border-neutral-300"></div>
                <div className="w-full aspect-square rounded-br-full border border-neutral-300"></div>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 w-full aspect-square border border-neutral-300">
                <div className="w-full aspect-square rounded-tl-full border border-neutral-300"></div>
                <div className="w-full aspect-square rounded-tr-full border border-neutral-300"></div>
                <div className="w-full aspect-square rounded-bl-full border border-neutral-300"></div>
                <div className="w-full aspect-square rounded-br-full border border-neutral-300"></div>
              </div>
            </div>
          </div>
          {/* <RotatingShape className=" max-md:hidden " size={1.5} /> */}
        </div>
        <div className="col-span-4">
          <h1 className="text-2xl md:text-3xl font-bold Mission">
            Neptune Mark <span className="font-light">Digital Creators</span>
          </h1>
          <p className="mt-6  font-light max-w-3xl text-neutral-700 Mission">
            Neptune Mark Digital Creators LLP is where innovation, artistry, and
            technology converge to drive measurable success in the digital
            landscape. We are a dynamic and passionate collective specializing
            in a comprehensive suite of services: robust Tech solutions,
            high-impact Digital and Performance Marketing, and stunning,
            effective Creatives.
            <br />
            <br /> Our philosophy centers on the seamless integration of these
            disciplines; we don't just execute individual tasks, we engineer
            complete digital ecosystems. We pride ourselves on moving beyond
            mere visibility to deliver tangible results—from custom-built
            platforms and data-driven campaigns to compelling visual
            storytelling—ensuring our partners not only keep pace with the
            market but actively redefine it. We are dedicated to translating
            ambitious business goals into digital reality, making us the
            essential force behind your brand's next wave of growth.
            <br />
          </p>

          <div>
            <h1 className="text-2xl md:text-3xl font-bold mt-10 Mission flex items-center  gap-2">
              <Target02Icon className="text-neutral-500"/> Our Vision and <span className="font-light">Mission</span>
            </h1>
            <p className="mt-6  font-light max-w-3xl text-neutral-700 Mission">
              Building upon our foundation as Neptune Mark Digital Creators LLP,
              our Vision is to be the global benchmark for digital creation and
              performance, transforming businesses through the seamless fusion
              of innovative technology and compelling artistry; <br /> and our
              encompassing Mission is to engineer and deploy full-spectrum
              digital solutions—from cutting-edge technology and data-driven
              performance marketing to stunning creatives—that drive measurable
              growth and establish lasting brand legacies for our partners.
            </p>
          </div>
        </div>
      </div>
    </BaseComp>
  );
}

export default Vision;
