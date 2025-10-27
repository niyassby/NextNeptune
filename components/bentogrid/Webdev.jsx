import React from 'react'

function Webdev({isHovered = false}) {
  return (
    <div className='w-full h-full min-h-36 flex relative'>
        <div className={`text-neutral-400 absolute top-10 left-5  transition-all duration-300 origin-top-left ${isHovered ? "-rotate-6":"-rotate-3"} font-light text-[10px]  font-mono border inline py-1.5 border-neutral-800 px-2 rounded-lg bg-[#1a1a1a]`}>
        <span>
        {`import { cn } from "@/lib/utils";`} <br/>
        {`import React, { useRef, useState } from "react";`}
        </span>
        </div>
        <div className={`text-neutral-400 absolute top-20 right-10 transition-all duration-300 origin-bottom-right ${isHovered ? "rotate-[9deg]":"rotate-3"} font-light text-[10px]  font-mono border inline py-1.5 border-neutral-800 px-2 rounded-lg bg-[#1a1a1a]`}>
        <span>
        {`const x = e.clientX - rect.left;`} <br/>
        {`const y = e.clientY - rect.top;`} <br/>
        </span>
        </div>
    </div>
  )
}

export default Webdev