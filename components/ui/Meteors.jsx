"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

export const Meteors = ({ number = 20, className, isHovered }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
    const meteors = containerRef.current.querySelectorAll(".meteor");

    if(isHovered){
      // Fade in container
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" }
      );
  
      // Animate meteors individually
      meteors.forEach((meteor) => {
        const delay = Math.random() * 5;
        const duration = Math.random() * (10 - 5) + 5;
  
        gsap.fromTo(
          meteor,
          { y: -40, opacity: 0 },
          {
            y: 500,
            opacity: 1,
            duration,
            delay,
            repeat: -1,
            ease: "none",
            onRepeat: () => {
              // Reset random delay each loop for natural variation
              gsap.set(meteor, { delay: Math.random() * 5 });
            },
          }
        );
      });
    }
  }, containerRef);

    return () => ctx.revert();
  }, [isHovered]);

  const meteors = new Array(number).fill(true);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-52 overflow-hidden ">
      {meteors.map((_, idx) => {
        const position = idx * (800 / number) - 400;

        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "meteor absolute h-0.5 w-0.5 rotate-[-90deg] rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
              "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
              className
            )}
            style={{
              top: "-40px",
              left: position + "px",
            }}
          ></span>
        );
      })}
    </div>
  );
};
