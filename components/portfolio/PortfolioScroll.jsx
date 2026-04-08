"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BaseComp from "../Util/BaseComp";
import { HiArrowUpRight } from "react-icons/hi2";

gsap.registerPlugin(ScrollTrigger);

const portfolio = [
  {
    name: "Branding",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    link: "/",
    img: "/assets/portfolio/package.jpg"
  },
  {
    name: "Web Devlopment",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    link: "/",
    img: "/assets/portfolio/web.jpg"
  },
  {
    name: "Marketting",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    link: "/",
    img: 'https://www.shutterstock.com/image-photo/view-modern-glass-skyscrapers-including-600nw-2541575419.jpg'
  },
  {
    name: "Social Media",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    link: "/",
    img: "/assets/logoPre.jpg"
  },
  
]

function PortfolioScroll() {
  useGSAP(() => {
    let sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container1",
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,  
        anticipatePin: 1,
        end: () =>
          "+=" +
          document.querySelector(".container1").scrollWidth,  
      },
    } , );
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        style={{ width: `${portfolio.length * 100}vw` }}
        className="container1 relative  flex h-screen "
      >
        {portfolio.map((item, index) => (
          <div key={index} className="panel w-screen h-screen   od d:bg-neutral-200 ev en:bg-neutral-100">
           <BaseComp className='bg- p-20'>
           <img
              className="w-full border aspect-[5/2.5] object-cover grayscale hover:grayscale-0 transition-all duration-300"
              src={item.img}
              alt=""
            />
              <div className="flex items-center gap-2 mt-5">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              </div>
            <div className="flex items-center justify-between gap-2 mt-5">
              <div className="">
                <h1 className=" text-2xl font-bold text-neutral-800">{item.name}</h1>
                <p className="text-xs mt-1 text-neutral-500 max-w-2xl">{item.description}</p>
              </div>
              <div className="bg-black text-neutral-50 cursor-pointer size-20 hover:scale-110 transition-all duration-300  grid place-content-center aspect-square rounded-full ">
              <HiArrowUpRight size={24} />
              </div>

            </div>
           </BaseComp>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioScroll;
