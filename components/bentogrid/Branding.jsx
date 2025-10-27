"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/all";
import SVGComponent from "../SVG/GridSvg";

if (!gsap.plugins.DrawSVGPlugin) gsap.registerPlugin(DrawSVGPlugin);

export function Branding({ isHovered = false }) {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // ✅ use gsap.context for scoped animations
    const ctx = gsap.context(() => {
      const svg = svgRef.current;
      const lines = svg.querySelectorAll("line, path, rect");
      const rects = svg.querySelectorAll(".fillSelector");

      if (isHovered) {
        // Animate on hover
        gsap.set(lines, { drawSVG: "10% 80%" });
        gsap.set(rects, { fill: "transparent", });
        gsap.to(lines, {
          drawSVG: "-10% -70%",
          opacity: 1,
          duration: 1.5,
          stagger: 0.05,
          ease: "power2.out",
        });

        gsap.to(lines, {
          drawSVG: "100%",
          opacity: 1,
          duration: 1.5,
          delay: 1.2,
          stagger: 0.05,
          ease: "power2.out",
        });

        gsap.to(rects, {
          fill: "var(--color-theme-500)",
          opacity: 1,
          duration: 0.8,
          delay: 0.5,
          ease: "power2.inOut",
        });
      } else {
        // Reset when hover ends
        
        gsap.to(lines, {
          drawSVG: "10% 80%",
          opacity: 0.6,
          duration: 0.8,
          ease: "power2.inOut",
        });

        gsap.to(rects, {
          fill: "transparent",
          opacity: 0,
          duration: 0.5,
          ease: "power1.out",
        });
      }
    }, svgRef);

    // ✅ Cleanup automatically on unmount or dependency change
    return () => ctx.revert();
  }, [isHovered]);

  return (
    <div className="w-full h-full relative">
      <div className="absolute size-40 bg-neutral-300/30 z-20 left-0 bottom-28 rounded-full blur-3xl" />
      <div ref={svgRef} className="max-w-lg mx-auto relative bg-am ber-200">
        <SVGComponent />
      </div>
    </div>
  );
}
