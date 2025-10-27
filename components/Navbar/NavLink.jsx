"use client";
import { StaticContent } from "@/lib/Content";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import Link from "next/link"; 
import ActiveLink from "../ui/ActiveLink";
 
const socialMedia = new StaticContent().socialLinks
const links = new StaticContent().mainNavLinks
const secondaryNavLinks = new StaticContent().secondaryNavLinks
const adress = new StaticContent().companyInfo

export default function NavLinks() {
  const [isActive, setActive] = useState(false);
  const container = useRef();
  const splitTextRef = useRef(null);
  const tl = useRef();
  const tl2 = useRef();

  // Initialize GSAP animations
  useGSAP(() => {
    // Create SplitText instance
    splitTextRef.current = new SplitText(".nav-text", {
      type: "words,chars,lines",
      mask: "lines",
      linesClass: "line-child"
    });

    // Set initial state (hidden)
    gsap.set(".line-child", {
      opacity: 0,
      y: 100
    });
    gsap.set(".element", {
      opacity: 0,
      y: 50
    });

    // Create timeline for the menu items
    tl.current = gsap.timeline({ paused: true });
    tl2.current = gsap.timeline({ paused: true });
    
    tl.current.to(".line-child", {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      ease: "power4.out",
      duration: 0.8
    });
    tl2.current.to(".element", {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      ease: "power4.out",
      duration: 0.8
    });

    // Create animation for the menu background
    gsap.to(container.current, {
      height: "100%",
      duration: 0.6,
      ease: "power4.inOut",
      paused: true,
      reversed: true
    });

    return () => {
      if (splitTextRef.current) {
        splitTextRef.current.revert();
      }
    };
  }, []);

  // Handle menu toggle
  useGSAP(() => {
    if (isActive) {
      // Open menu
      gsap.to(container.current, {
        height: "100%",
        duration: 0.6,
        ease: "power4.inOut"
      }).then(() => {
        tl.current.play();
        tl2.current.play();
      })
      
    } else {
      // Close menu
      tl2.current.reverse();
      tl.current.reverse().then(() => {
        gsap.to(container.current, {
          height: 0,
          duration: 0.6,
          ease: "power4.inOut"
        });
      });
    }
  }, [isActive]);

  return (
    <div>
      <div className="p-1  mil-scale">
        <div
          onClick={() => setActive(!isActive)}
          className="relative w-7 overflow-hidden cursor-pointer h-5 z-10 flex flex-col justify-between  "
        >
          <div className={`w-full h-0.5 toggle-btn  transition-all duration-300 origin-top-right ${isActive && "-rotate-45 -translate-x-1"}`}></div>
          <div className={`w-full h-0.5 toggle-btn  transition-all duration-300 origin-center ${isActive && "rotate-45"}`}></div>
          <div className={`w-full max-w-5 h-0.5 toggle-btn  transition-all duration-300 origin-bottom-left ${isActive && "-rotate-45 translate-x-2 opacity-0"}`}></div>
        </div>
      </div>
      
      <div
        ref={container}
        className="fixed w-full inset-0  bg-neutral-950 z-0 overflow-hidden h-0"
      >
        <div className="w-full h-full max-w-[80rem] 2xl:max-w-[85rem]  mx-auto px-4 sm:px-6 lg:px-8 md:grid  md:grid-cols-2 gap-4">
          <div className="flex navLink flex-col max-md:items-center w-full h-full justify-center gap-4  ">
            {links.map((link, index) => (
              <div key={index} className=" relative">
                <button 
                  onClick={() => setActive(false)}
                  className={`text-4xl mil-choose md:text-7xl font-bold inline-flex hover:translate-x-5 transition-all duration-500  text-white nav-text relative `}
                >
                  <ActiveLink href={link.link} >{link.name}</ActiveLink>
                  
                </button>
              </div>
            ))}
          </div>
          <div className="max-lg:hidden w-full h-full  border-l border-neutral-800 flex flex-col items-center justify-center px-20 text-white">
              <div className={`grid grid-cols-2 w-full gap-10 pb-10  border-b transition-all duration-700 delay-500 ${isActive ?"border-neutral-800":"border-transparent"}`}>
                <div className="element">
                  <h1>Usefull Links</h1>
                  <div className="flex flex-col gap-1 mt-6">
                    {secondaryNavLinks.map((link, index) =>
                      <Link onClick={() => setActive(false)} key={index} href={link.link} className=" text-muted-foreground hover:translate-x-3 hover:text-neutral-400 transition-all duration-300">{">"} {link.title} </Link>
                    )}
                  </div>
                </div>
                <div className="element">
                  <h1>Visit and follow</h1>
                  <div className="flex flex-col gap-1 mt-6">
                    {socialMedia.map((link, index) =>
                      <a key={index} href={link.link} className=" text-muted-foreground hover:translate-x-3 hover:text-neutral-400 transition-all duration-300"> - {link.name} </a>
                    )}
                  </div>
                </div>
              </div>


              <div className="grid grid-cols-2 w-full gap-10  mt-20">
                <div className="element">
                  <h1 className="text-lg font-medium">India</h1>
                  <div className="flex flex-col gap-1 mt-6">
                   <p className="text-sm text-neutral-400">{adress?.address?.India}</p>
                  </div>
                </div>
                <div className="element">
                  <h1 className="text-lg font-medium">Qatar</h1>
                  <div className="flex flex-col gap-1 mt-6">
                  <p className="text-sm text-neutral-400">{adress?.address?.Qatar}</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}