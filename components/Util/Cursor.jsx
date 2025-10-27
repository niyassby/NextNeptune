"use client";
import { usePathname } from "next/navigation";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

//  class for usage

//  mil-drag => drag icon
//  mil-more = more text
//  mil-choose => Click text
//  mil-scale => scale only
//  cursor-hide => hide cursor

function Cursor() {
  const cursorRef = useRef();
  const location = usePathname();
  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Initial cursor setup
      gsap.set(cursorRef.current, {
        xPercent: -50,
        yPercent: -50,
      });

      // Cursor follow
      const moveCursor = (e) => {
        gsap.to(cursorRef.current, {
          duration: 0.6,
          ease: "sine",
          x: e.clientX,
          y: e.clientY,
        });
      };
      document.addEventListener("pointermove", moveCursor);

      // Utility: hover effect
      const addHoverEffect = (selector, onEnter, onLeave) => {
        document.querySelectorAll(selector).forEach((el) => {
          el.addEventListener("mouseenter", onEnter);
          el.addEventListener("mouseleave", onLeave);
          el.addEventListener("click", onLeave);
        });
      };

      // Resize on big targets
      addHoverEffect(
        ".mil-drag, .mil-more, .mil-choose",
        () =>
          gsap.to(cursorRef.current, {
            width: 90,
            height: 90,
            opacity: 1,
            backgroundColor: "#0e0e0e",
            ease: "sine",
          }),
        () =>
          gsap.to(cursorRef.current, {
            width: 25,
            height: 25,
            opacity: 0.5,
            backgroundColor: "rgb(105, 105, 105)",
            ease: "sine",
          })
      );

      // mil-drag icon
      addHoverEffect(
        ".mil-drag",
        () => gsap.to(".mil-ball .mil-icon-1", { scale: 1, ease: "sine" }),
        () => gsap.to(".mil-ball .mil-icon-1", { scale: 0, ease: "sine" })
      );

      // mil-drag icon
      addHoverEffect(
        ".mil-scale",
        () =>
          gsap.to(".mil-ball", {
            width: 90,
            height: 90,
            opacity: 0.4,
            ease: "sine",
          }),
        () =>
          gsap.to(".mil-ball", {
            width: 25,
            height: 25,
            opacity: 0.5,
            ease: "sine",
          })
      );

      // mil-more text
      addHoverEffect(
        ".mil-more",
        () => gsap.to(".mil-ball .mil-more-text", { scale: 1, ease: "sine" }),
        () => gsap.to(".mil-ball .mil-more-text", { scale: 0, ease: "sine" })
      );

      // mil-choose text
      addHoverEffect(
        ".mil-choose",
        () => gsap.to(".mil-ball .mil-choose-text", { scale: 1, ease: "sine" }),
        () => gsap.to(".mil-ball .mil-choose-text", { scale: 0, ease: "sine" })
      );

      // Hide cursor on links/inputs
      addHoverEffect(
        "a:not(.mil-choose, .mil-more, .mil-drag, .mil-scale), input, textarea, .cursor-hide",
        () => {
          gsap.to(cursorRef.current, {  width: 0, height: 0, ease: "sine" });
        },
        () => {
          gsap.to(cursorRef.current, {  width: 25, height: 25, ease: "sine" });
        }
      );

      // Click effect
      document.body.addEventListener("mousedown", () =>
        gsap.to(cursorRef.current, { scale: 0.1, ease: "back" })
      );
      document.body.addEventListener("mouseup", () =>
        gsap.to(cursorRef.current, { scale: 1, ease: "back" })
      );

      // Cleanup
      return () => {
        document.removeEventListener("pointermove", moveCursor);
      };
    });

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <div
      ref={cursorRef}
      className="mil-ball max-sm:hidden size-[25px] fixed z-[999] bg-neutral-600 rounded-full pointer-events-none flex items-center justify-center opacity-[0.5]"
    >
      <span className="mil-icon-1 absolute size-[40px] scale-0">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255, 255, 255, 0.9)"
          strokeWidth="1"
        >
          <path d="m9 7-5 5 5 5" />
          <path d="m15 7 5 5-5 5" />
        </svg>
      </span>
      <div className="mil-more-text absolute w-full text-center block text-neutral-50/90 text-xs font-medium uppercase scale-0">
        More
      </div>
      <div className="mil-choose-text absolute w-full text-center block text-neutral-50/90 text-xs font-medium uppercase scale-0">
        Click
      </div>
    </div>
  );
}

export default Cursor;


