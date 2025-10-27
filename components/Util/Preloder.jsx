"use client";
import React, {  useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

function Preloader() {
  const [isFinish, setFinish] = useState(false);
  

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    const isMobile = window.innerWidth < 768;
  
    // SplitText for words
    document.querySelectorAll(".split2").forEach((el) => {
      const spitText = SplitText.create(el, {
        type: "chars,words,lines",
        mask: "lines",
      });
  
      // In
      tl.from(spitText.words, {
        opacity: 0,
        y: isMobile ? 60 : 120,
        stagger: 0.08,
        duration: 1,
        ease: "power4.out",
      }, "+=0.5");
  
      // Out
      tl.to(spitText.words, {
        opacity: 0,
        y: isMobile ? -40 : -80,
        stagger: 0.08,
        duration: 0.9,
        ease: "expo.in",
      }, "+=0.3");
    });
  
    // Box effect (like a reveal bar)
    tl.fromTo(".box",
      { scaleX: 0, x: "60", transformOrigin: "center", },
      { scaleX: 1.2, x: "0", duration: 0.6, ease: "expo.out" },
      "-=0.3"
    )
      .to(".box", { scaleX: 1,x: 0, duration: 0.4, ease: "power2.inOut" });
  
    // Split3 (site name)
    const spitText3 = SplitText.create('.split3', {
      type: "chars,words,lines",
      mask: "lines",
    });
  
    tl.from(spitText3.chars, {
      opacity: 0,
      y: 40,
      stagger: 0.06,
      duration: 0.7,
      ease: "back.out(2)",
    }, "-=0.2");
  
    tl.to(spitText3.chars, {
      opacity: 0,
      y: -40,
      stagger: 0.06,
      duration: 0.6,
      ease: "power3.in",
    }, "+=0.6");
  
    // Box close
    tl.to(".box", {
      scaleX: 0,
      transformOrigin: "center",
      duration: 0.4,
      ease: "expo.inOut",
    }, "-=0.2");
  
    // Preloader fade out with scale shrink
    tl.to(".preloader", {
      opacity: 0,
      scale: 0.98,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => setFinish(true),
    });
  }, []);
  

  if (isFinish) return null;

  return (
    <div className="fixed z-[99999] top-0 left-0 w-full h-screen bg-black preloader">
      <div className="flex flex-col relative w-full h-full items-center justify-center text-zinc-100 bg-zinc-950 ">
        <div className="text-center split2 absolute">
          <p className="text-4xl md:text-7xl">Reliability </p>
          <p className="text-4xl md:text-7xl">Expertise </p>
          <p className="text-4xl md:text-7xl">Dedication</p>
        </div>
        <div className="text-center box absolute md:max-w-[300px] max-w-[250px] w-full h-10 border bg-theme-6 00 mt-1">
        </div>
        <div className="text-center split3 absolute">
          <p className="text-2xl font-light">neptunemark.com</p>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
