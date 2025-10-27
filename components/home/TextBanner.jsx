"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import React from "react";
import BaseComp from "../Util/BaseComp";
import NewButton from "../ui/NewButton";
import { DotPattern } from "../magicui/dot-pattern";
import { DrawSVGPlugin } from "gsap/all";
import { useRouter } from "next/navigation";

gsap.registerPlugin(SplitText, ScrollTrigger, DrawSVGPlugin );

function TextBanner() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/about');
  };
  useGSAP(() => {
    document.querySelectorAll(".heroHead").forEach((el) => {
      const texts = new SplitText(el, {
        type: "chars, words, lines",
        mask: "lines",
      });

      gsap.from(texts.words, {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          toggleActions: "play none none reverse", 
          start: "top 70%",
          // markers:true, 
          // end: "bottom 70%",
        },
      });
    });

    // extra scroll effect (moving entire text down)
    gsap.to(".heroHead", {
      y: 130,
      scrollTrigger: {
        trigger: ".text-conta",
        start: "top 0%",
        end: "bottom 50%",
        scrub: 1,
        // markers: true,
      },
    });
  }, []);

  return (
    <BaseComp className="md:h-screen h-[500px] relative z-0 flex flex-col justify-center bg-neutral-200 items-center text-conta">
      <div className="absolute w-full h-full inset-0 opacity-55 z-0">
        <DotPattern/>
      </div>
      <div className="flex text-black text-center flex-col items-center font-light justify-center h-full w-full relative ">
        <h1 className="heroHead mil-scale text-4xl md:text-8xl xl:text-9xl">mark the moment</h1>
        <h1 className="heroHead mil-scale text-4xl md:text-8xl xl:text-9xl">
          <span className="text-theme-600 font-semibold">tune</span> the future
        </h1>
      </div>
        <NewButton onClick={handleClick} className='heroHead2 relative'>More about us</NewButton>
    </BaseComp>
  );
}

export default TextBanner;
