"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollProgress = () => {
  useEffect(() => {
    const tl = gsap.to(".mil-progress", {
      height: "100%", // grow to full height
      ease: "sine",
      scrollTrigger: {
        trigger: "body",      // scroll across the whole page
        start: "top top",     // start at top
        end: "bottom bottom", // end at bottom
        scrub: true,          // smooth scrubbing
      },
    });
    return () => {
      tl.kill()
    }
  }, []);

  return (
    <div className="fixed top-0 right-0 w-1 h-full z-50 bg-foreground">
      <div className="bg-theme-700 mil-progress h-0 w-full" />
    </div>
  );
};

export default ScrollProgress;
