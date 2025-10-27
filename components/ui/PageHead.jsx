"use client";
import React from "react";
import RotatingShape from "../Services/Shape";
import BaseComp from "../Util/BaseComp";
import { ArrowDown } from "lucide-react";
import useAnimationEffects from "../Util/upAnimation";
import Link from "next/link";
import { usePathname } from "next/navigation";

function PageHead({
  children,
  isShape = true,
  isArrow = true,
  arrowText = "Scroll to bottom",
  detail = 1,
  color = "bg-neutral-100",
}) {
  const router = usePathname();
  const pathSegments = router.split("/")
  useAnimationEffects({
    upSelector: '.head',
    defaultUpAnimation: {
      opacity: 0,
      y: 40, 
    }
  });
  return (
    <BaseComp className={`md:min-h-[700px] min-h-[400px] ${color}  flex md:items-center items-end justify-center relative`}>
      {isShape && (
        <RotatingShape
          className="-top-40 max-md:hidden right-28"
          detail={detail}
          size={2.2}
        />
      )}
      <div className='relative max-md:before:content-none mb-10 before:content-[""] before:absolute before:top-[10px] before:right-[calc(100%+30px)] before:w-screen before:h-[1px] before:bg-neutral-400 '>
        <div className="font-medium head text-neutral-400 text-nowrap flex items-center gap-2">
          <Link href='/' className="capitalize text-neutral-900 ">{"Home"}</Link>
          <h1 className="capitalize text-neutral-900 ">/</h1>
          <h1 className="capitalize font-light pointer-events-none cursor-none">
            {pathSegments}
          </h1>
        </div>
      </div>
      <div className="">
        {children ? (
          children
        ) : (
          <h1 className="text-5xl head font-semibold md:text-7xl text-neutral-900">
            Portfolio <span className="font-extralight">us</span> <br />{" "}
            Creative <span className="font-extralight">team</span>
          </h1>
        )}
        {isArrow && (
          <h1 className="md:mt-10 head mt-4 capitalize font-medium group text-neutral-500 flex items-center gap-3">
            <span>{arrowText}</span>
            <div className="text-neutral-800 group-hover:scale-110 transition-all duration-300  bg-neutral-300 rounded-full p-1">
              <ArrowDown />
            </div>
          </h1>
        )}
      </div>
    </BaseComp>
  );
}

export default PageHead;
