"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/all";

if (!gsap.plugins.DrawSVGPlugin) gsap.registerPlugin(DrawSVGPlugin);

const NEON_COLOR_PRIMARY = "#ff0066";
const NEON_COLOR_FADE = "#cc0052";

const LightShape = ({ isHovered = false }) => {
  const pathRef = useRef(null);
  const loopRef = useRef(null); // store loop animation

  useEffect(() => {
    if (!pathRef.current) return;

    const ctx = gsap.context(() => {
      const path = pathRef.current;

      // Kill any previous looping animation before creating a new one
      if (loopRef.current) loopRef.current.kill();

      if (isHovered) {
        // --- ON HOVER: continuous running light effect ---
        gsap.set(path, { drawSVG: "0% 25%", opacity: 0 });

        loopRef.current = gsap.to(path, {
          drawSVG: "100% 125%",
          duration: 4,
          ease: "none",
          repeat: -1,
          modifiers: {
            drawSVG: gsap.utils.wrap(0, 100), // makes it loop seamlessly
          },
        });

        // make it glow stronger
        gsap.to(path, {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        //   filter: `drop-shadow(0 0 15px ${NEON_COLOR_PRIMARY}) drop-shadow(0 0 40px ${NEON_COLOR_PRIMARY})`,
        });
      } else {
        // --- ON LEAVE: stop running, fade to dim glow ---
        if (loopRef.current) loopRef.current.kill();

        gsap.to(path, {
          drawSVG: "0% 100%",
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        //   filter: `drop-shadow(0 0 6px ${NEON_COLOR_FADE})`,
        });
      }
    }, pathRef);

    return () => {
      ctx.revert();
      if (loopRef.current) loopRef.current.kill();
    };
  }, [isHovered]);

  return (
    <div className="flex items-center justify-center w-32 aspect-square mx-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1080 1080"
        xmlSpace="preserve"
      >
        <style>
          {`
            .linepath {
              fill: none;
              stroke: #ffffff;
              stroke-width: 1.4517;
              stroke-miterlimit: 10;
            }
            .neon-glow {
              filter:
                drop-shadow(0 0 5px ${NEON_COLOR_PRIMARY})
                drop-shadow(0 0 15px ${NEON_COLOR_PRIMARY})
                drop-shadow(0 0 25px ${NEON_COLOR_PRIMARY}aa)
                drop-shadow(0 0 45px ${NEON_COLOR_PRIMARY}aa)
                drop-shadow(0 0 65px ${NEON_COLOR_PRIMARY}77);
            }
          `}
        </style>

        {/* base outline */}
        <path
          className="linepath"
          d="M815.3,524.9c-3.6-12-14.4-21.5-26.3-23.9l-172.3-35.9l51.4-321.9
          c2.4-15.6-6-31.1-20.3-38.3c-14.4-7.2-32.3-2.4-41.9,9.6L270.9,513
          c-7.2,9.6-10.8,21.5-7.2,32.3c3.6,12,12,20.3,22.7,23.9l167.5,56.2
          l-67,309.9c-3.6,15.6,4.8,32.3,19.1,39.5c4.8,2.4,10.8,3.6,16.8,3.6
          c9.6,0,20.3-4.8,26.3-12l360.1-408C817.7,550.1,820.1,536.9,815.3,524.9z"
        />

        {/* animated running light path */}
        <path
          ref={pathRef}
          className="linepath neon-glow"
          d="M815.3,524.9c-3.6-12-14.4-21.5-26.3-23.9l-172.3-35.9l51.4-321.9
          c2.4-15.6-6-31.1-20.3-38.3c-14.4-7.2-32.3-2.4-41.9,9.6L270.9,513
          c-7.2,9.6-10.8,21.5-7.2,32.3c3.6,12,12,20.3,22.7,23.9l167.5,56.2
          l-67,309.9c-3.6,15.6,4.8,32.3,19.1,39.5c4.8,2.4,10.8,3.6,16.8,3.6
          c9.6,0,20.3-4.8,26.3-12l360.1-408C817.7,550.1,820.1,536.9,815.3,524.9z"
        />
      </svg>
    </div>
  );
};

export default LightShape;
