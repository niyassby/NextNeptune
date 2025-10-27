"use client";
import React from "react";
import BaseComp from "../Util/BaseComp";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/all";
import { SourceCodeIcon, PromotionIcon, SparklesIcon, StartUp02Icon } from "hugeicons-react";
import { Rocket } from "./Rocket";
import { GlowingCard } from "./GlowingCard";
import { Branding } from "./Branding";
import LightShape from "./LightShape";
import Webdev from "./Webdev";
import AIAutomation from "./AIAutomation";

if (!gsap.plugins.DrawSVGPlugin) gsap.registerPlugin(DrawSVGPlugin);


const data = [
  {
    titel: "Branding & Rebranding",
    text: "Building fresh identities and revitalizing existing brands to leave a lasting mark.",
    icon: StartUp02Icon,
    component:Branding,
    className: "md:col-span-4 md:row-span-3"
  },
  {
    titel: "Web & App Development",
    text: "Future-ready platforms crafted with precision and vision.",
    icon: SourceCodeIcon,
    component:Webdev,
    className: "md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-4"
  },
  {
    titel: "Digital Marketing & Growth",
    text: "SEO, social, and performance strategies tuned for impact.",
    icon: PromotionIcon,
    component:LightShape,
    className: "md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-4"
  },
  {
    titel: "Digital Trransformation",
    text: "Digital transformation solutions that propel businesses forward ",
    icon: SparklesIcon,
    component:AIAutomation,
    className: "md:col-span-2 md:row-span-2  md:col-start-5 md:row-start-1"
  },
  {
    titel: "AI & Automation Solutions",
    text: "Smart systems, chatbots, and workflows that tune efficiency",
    icon: SparklesIcon,
    component:Rocket,
    // media: "/assets/Icon_1-ezgif.com-optimize.gif",
    className: "md:col-span-2 md:row-span-3 md:col-start-5 md:row-start-3"
  },
]

export function BentoGrid()  {
  return (
    <BaseComp className='min-h-[120vh] py-20 flex items-center justify-center'>
          <div className="grid grid-cols-1 md:auto-rows-[7rem] md:grid-cols-6 gap-6 w-full min-h-[500px]  cursor-hide max-w- 5xl mx-auto ">
            {data.map((item, index) =>{
              return <GlowingCard  key={index} className={item.className} item={item} DesignComp={item.component} />
            })}
          </div>
    </BaseComp>
  )
}


