"use client";
import ContactDetails from '@/components/Contact/ContactDetails';
import ContactForm from '@/components/Contact/ContactForm'
import RotatingShape from '@/components/Services/Shape';
import BaseComp from '@/components/Util/BaseComp';
import useAnimationEffects from '@/components/Util/upAnimation';
import React from 'react'

function Contact() {
  useAnimationEffects({
    upSelector: '.contact',
    defaultUpAnimation: {
      opacity: 0,
      y: 50,
    }
  });
  return (
    <BaseComp className='bg-neutral-50 relative overflow-hidden'>
       <RotatingShape className="top-0 max-md:hidden -left-10" detail={0} size={1.8}/>
       <RotatingShape className="top-1/3 md:-right-20 -right-40"  size={1}/>
        <div className='w-full md:h-[40vh] relative'>
            <div className='relative w-full h-full  flex flex-col items-center justify-center pt-40'>
              <h1 className='text-4xl md:text-7xl font-bold text-neutral-900 contact'>Get in <span className='font-extralight'> touch!</span></h1>
              <p className=' contact text-center mt-4 text-neutral-500'>Whatever your goal - we will get you there.</p>
            </div>
          </div>
            <ContactForm/>
            <ContactDetails/>
    </BaseComp>
  )
}

export default Contact