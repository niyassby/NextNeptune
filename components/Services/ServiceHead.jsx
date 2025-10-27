"use client";
import React from 'react'
import BaseComp from '../Util/BaseComp'
import { ArrowDown } from 'lucide-react'
import RotatingShape from './Shape'
import useAnimationEffects from '../Util/upAnimation';

function ServiceHead() {
  useAnimationEffects({
    upSelector: '.servicesText',
    defaultUpAnimation: {
      opacity: 0,
      y: 50, 
    }
  });
  return (
    <BaseComp className='md:min-h-[700px] min-h-[300px]  flex md:items-center items-end justify-center relative'>
        
        <RotatingShape className='absolute max-md:left-40 md:right-20 -top-60' animation detail={1}  size={2.2}/>
        <div className='relative max-md:before:content-none mb-6 before:content-[""] before:absolute before:top-[10px] before:right-[calc(100%+30px)] before:w-screen before:h-[1px] before:bg-neutral-400 '>
            <p className='team font-extralight tracking-wide text-neutral-400 text-nowrap '>Meet our Team</p>
        </div>
      <div className=''>
        <h1 className="text-5xl servicesText font-semibold md:text-8xl text-neutral-100">
            This is <span className='font-extralight'>what</span> <br /> we do <span className='font-extralight'>best</span>
        </h1>
        <h1 className='md:mt-10 servicesText mt-4 text-xl font-light group text-neutral-600 flex items-center gap-3'>
            <span>Our services </span>
            <div className='text-neutral-400 group-hover:scale-110 transition-all duration-300  bg-neutral-800 rounded-full p-1'><ArrowDown/></div>
        </h1>
      </div>
    </BaseComp>
  )
}

export default ServiceHead