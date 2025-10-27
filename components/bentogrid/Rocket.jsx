import React, { useEffect, useRef } from "react";
import RocketSvg from "../SVG/RocketSvg";
import gsap from "gsap";
import { Meteors } from "../ui/Meteors";

export function Rocket({isHovered}) {
    const rocketRef = useRef(null);
  
    useEffect(() => {
      if (!rocketRef.current) return;
      const ctx = gsap.context(() => {
        const rocket = rocketRef.current.querySelector("#Objects");
        const exhoster = rocketRef.current.querySelector("#exhoster");
  
        if (isHovered) {
          gsap.to(rocket, {
            y: -25,
            yoyo: true,
            repeat: -1,
            duration: 1.8,
            ease: "sine.inOut",
          });
          gsap.to(rocket, {
            rotation: 1,
            yoyo: true,
            repeat: -1,
            duration: 0.1,
            ease: "sine.inOut",
            transformOrigin: "50% 100%",
          });
  
          gsap.to(exhoster, {
            scaleY: 1.3,
            scaleX: 0.9,
            y: 3,
            opacity: 0.6,
            yoyo: true,
            repeat: -1,
            duration: 0.15,
            ease: "sine.inOut",
            transformOrigin: "50% 0%",
          });
        } else {
          // reset smooth
          gsap.to([rocket, exhoster], {
            y: 0,
            rotation: 0,
            scaleY: 1,
            scaleX: 1,
            opacity: 1,
            // clearProps: "all",
            duration: 2,
            ease: "sine.inOut",
          });
        }
      }, rocketRef);
  
      return () => ctx.revert(); // ✅ auto cleanup
    }, [isHovered]);
    
    return (
      <div className="w-full hfull relative  ">
          <Meteors isHovered={isHovered} number={50} />
          <div className="absolute size-40 bg-neutral-300/30 z-20 left-0 bottom-28 rounded-full blur-3xl "></div>
       <div ref={rocketRef}
        className="max-w-80 mx-auto relative"> 
         
        <RocketSvg/>
       </div>
      </div>
    )
  }