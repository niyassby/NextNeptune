"use client";
import React from 'react'
import BaseComp from '../Util/BaseComp'
import NewButton from '../ui/NewButton'
import useAnimationEffects from '../Util/upAnimation';
import { useRouter } from 'next/navigation';

function ServiceText() {
    useAnimationEffects({
        upSelector: '.servicesText',
        defaultUpAnimation: {
          opacity: 0,
          y: 50, 
        }
      });

      const navigate = useRouter()
  return (
    <BaseComp className='bg-neutral-100 py-20 min-h-[700px] flex items-center relative'>
        <div className='servicesText relative max-md:before:content-none mb-6 before:content-[""] before:absolute before:top-[10px] before:left-[calc(100%+30px)] before:w-screen before:h-[1px] before:bg-neutral-400 '>
            <p className='  font-extralight tracking-wide text-neutral-400 text-nowrap md:text-right text-center'>Looking to make your mark? We'll help you turn <br />  your project into a success story.</p>
        </div>
        <div className='mt-10 md:mt-20 flex items-center flex-col justify-center text-center'>
            <h1 className='text-4xl servicesText md:text-7xl font-bold text-neutral-900 mb-6'>Ready to <span className='font-extralight'>bring your</span> ideas to life?<br /> <span className='font-extralight'>We're here</span> to help</h1>
            <NewButton onClick={()=>navigate.push('/contact')} className='servicesText'>Contact Now</NewButton>
        </div>
    </BaseComp>
  )
}

export default ServiceText