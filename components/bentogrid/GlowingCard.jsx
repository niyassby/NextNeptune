import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";


export const GlowingCard = ({ item, className, DesignComp = null, }) => {
  const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseMove = (e) => {
      const card = cardRef.current;
      if (!card) return;
  
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      // Directly update style, no re-render needed
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
    const handleMouseEnter = () => {
      setIsHovered(true)
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false)
    };
  
  
    
  
    return (
      <div  className={cn("w-full h-full",className,)}>
      <div
        ref={cardRef}
        className="glowing-card cursor-pointer group relative flex flex-col max-md:items-center w-full h-full py-6 px-6 bg-[#111111] transition-all rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[4.4px] border-1 border-[rgba(241,242,246,0.15)] overflow-hidden duration-500 hover:border-[rgba(241,242,246,0.4)]"
        // onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Glow effect */}
        {/* <div className={`glowing-card-gradient z-[300] ${isHovered ? "opacity-80" : "opacity-0"}`} /> */}
  
        {/* Card content */}
        <div className="relative z-10 flex flex-col justify-between h-full">
          <div className="absolute right-0 top-0 text-neutral-500">
          <div className="size-[60px] mb-3 flex items-center justify-center rounded-3xl relative z-10 overflow-hidden 
          after:content-[''] after:absolute after:size-[58px] after:rounded-3xl  after:bg-[#111] after:z-0  
          before:content-[''] before:absolute before:opacity-0 group-hover:before:opacity-100 before:transition-all before:duration-500
          before:size-36   before:z-0 animatespin2 text-neutral-400 ">
            <item.icon className="z-20" strokeWidth={1} size={30} /> 
          </div>
          </div>
          <div>
            {item.media && <img className="w-full h-60 object-contain opacity-60" src={item.media} />}
          {DesignComp && <DesignComp isHovered={isHovered} />}
          </div>
          <div>
          <div className="flex items-center  gap-2">
            <span className="size-2.5 bg-white rounded-tr-full  flex items-center justify-center"></span>
          <h4 className="font-medium text-sm text-white">{item.titel}</h4>
          </div>
          <p className="mt-1 text-sm text-neutral-400 max-w-lg"> 
            {item.text || "citationem placeat eaque sequi praesentium voluptas ad sunt, iusto sit debitis v"}
          </p>
          </div>
        </div>
      </div>
      </div>
    );
  };