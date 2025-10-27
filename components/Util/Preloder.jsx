"use client";
import React, { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

function Preloader() {
  const [isFinish, setFinish] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    const isMobile = window.innerWidth < 768;

    // Make all elements invisible before animation
    gsap.set([".split2", ".split3", ".box"], { opacity: 0 });

    // SplitText for words
    document.querySelectorAll(".split2").forEach((el) => {
      const spitText = SplitText.create(el, {
        type: "chars,words,lines",
        mask: "lines",
      });

      // Animate In
      tl.to(el, { opacity: 1, duration: 0.1 }, 0); // show container first
      tl.from(
        spitText.words,
        {
          opacity: 0,
          y: isMobile ? 60 : 120,
          stagger: 0.08,
          duration: 1,
          ease: "power4.out",
        },
        "+=0.2"
      );

      // Animate Out
      tl.to(
        spitText.words,
        {
          opacity: 0,
          y: isMobile ? -40 : -80,
          stagger: 0.08,
          duration: 0.9,
          ease: "expo.in",
        },
        "+=0.3"
      );
    });

    // Box effect (reveal bar)
    tl.to(".box", { opacity: 1, scaleX: 1.2, x: 0, duration: 0.6, ease: "expo.out" }, "-=0.3")
      .to(".box", { scaleX: 1, duration: 0.4, ease: "power2.inOut" });

    // Split3 (site name)
    const spitText3 = SplitText.create(".split3", {
      type: "chars,words,lines",
      mask: "lines",
    });

    tl.to(".split3", { opacity: 1, duration: 0.1 }, "-=0.2");
    tl.from(
      spitText3.chars,
      {
        opacity: 0,
        y: 40,
        stagger: 0.06,
        duration: 0.7,
        ease: "back.out(2)",
      },
      "-=0.2"
    );

    tl.to(
      spitText3.chars,
      {
        opacity: 0,
        y: -40,
        stagger: 0.06,
        duration: 0.6,
        ease: "power3.in",
      },
      "+=0.6"
    );

    // Box close
    tl.to(
      ".box",
      {
        scaleX: 0,
        transformOrigin: "center",
        duration: 0.4,
        ease: "expo.inOut",
      },
      "-=0.2"
    );

    // Fade out preloader
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
      <div className="flex flex-col relative w-full h-full items-center justify-center text-zinc-100 bg-zinc-950">
        <div className="text-center split2 absolute opacity-0">
          <p className="text-4xl md:text-7xl">Reliability</p>
          <p className="text-4xl md:text-7xl">Expertise</p>
          <p className="text-4xl md:text-7xl">Dedication</p>
        </div>
        <div className="text-center box absolute md:max-w-[270px] max-w-[250px] w-full h-10 bg-theme-600 mt-1 opacity-0" />
        <div className="text-center split3 absolute opacity-0">
          <p className="text-2xl font-light">neptunemark.com</p>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
