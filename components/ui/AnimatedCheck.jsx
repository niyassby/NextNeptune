
import React, { useRef, useEffect, useCallback, useState } from "react";
import { gsap } from "gsap";


export function AnimatedCheck({ size = 120, stroke = '#16a34a', duration = 0.9, onComplete }) {
  const containerRef = useRef(null);
  const checkRef = useRef(null);
  const tlRef = useRef(null);

  const play = useCallback(() => {
    // kill previous timeline if exists
    if (tlRef.current) {
      tlRef.current.kill();
      tlRef.current = null;
    }

    const checkEl = checkRef.current;

    // get path lengths for smooth 'draw' effect
    const checkLength = checkEl.getTotalLength();


    gsap.set(checkEl, {
      strokeDasharray: checkLength,
      strokeDashoffset: checkLength,
      opacity: 1,
      display: 1
    });

    const tl = gsap.timeline({ defaults: { ease: 'power1.out' }, onComplete: onComplete });

    // draw circle quickly
    tl.to(checkEl, { strokeDashoffset: 0, duration: duration * 0.6 }, '-=0.05')

    tlRef.current = tl;
  }, [duration, onComplete]);

  useEffect(() => {
    // initial play
    play();

    return () => {
      if (tlRef.current) tlRef.current.kill();
    };
  }, [play]);

  const svgSize = size;
  const viewBox = "0 0 24 24"; // we use a 100x100 SVG coordinate system for easier math

  return (
    <div   ref={containerRef}>
      <svg
        width={svgSize}
        height={svgSize}
        viewBox={viewBox}
        role="img"
        aria-label="Success"
      > 
        <path
          ref={checkRef}
          d="M4,12l5,5L20,6"
          fill="none"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
