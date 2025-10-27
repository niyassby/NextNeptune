"use client";
import React from 'react'
import BaseComp from '../Util/BaseComp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const inmgs = [
    'https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg?cs=srgb&dl=pexels-pixabay-273209.jpg&fm=jpg',
    'https://www.shutterstock.com/image-photo/view-modern-glass-skyscrapers-including-600nw-2541575419.jpg',
    'https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg?cs=srgb&dl=pexels-pixabay-273209.jpg&fm=jpg',
    'https://images.unsplash.com/photo-1641760372370-1c86b2f38842?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29ycG9yYXRlJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D',
]

function AboutImg() {
    useGSAP(() => {
        gsap.to(".imgTrigger", {
          scrollTrigger: {
            trigger: ".scrollTriggerImg",
            start: "top bottom",   
            end: "bottom top",        
            scrub: true,           
            // markers: true        
          },
          scale: 1.5,                
          // y: 100,
          ease: "none"             
        });
      }, []);
      
  return (
    <BaseComp className="min-h-screen  scrollTriggerImg b g-neutral-100 py-20 flex flex-col items-center justify-center">
         <div className='servicesText relative max-md:before:content-none mb-10 before:content-[""] before:absolute before:top-[10px] before:right-[calc(100%+30px)] before:w-screen before:h-[1px] before:bg-neutral-400 '>
            <p className='  font-extralight tracking-wide text-neutral-400 text-nowrap md:text-left text-center'>Looking to make your mark? We'll help you turn <br />  your project into a success story.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full divide-x-2 divide-neutral-400/20 '>
            {inmgs.map((img, index) =>{
                return <div  key={index} className='w-full h-full min-h-[400px] overflow-hidden '>
                    <img src={img} alt="about" className='w-full   h-full cursor-hide  object-cover grayscale-100 imgTrigger ' />
                </div>
            })}
        </div>
        <div>
            <h1 className='text-6xl text-neutral-200 mt-20 font-medium'>Transforming Ambition into Digital Reality with Integrated Expertise</h1>
            <p className='text-neutral-400 mt-4 text-base font-light'>We are the convergence point where robust technology meets fearless creative vision. Neptune Mark Digital Creators LLP builds more than campaigns—we engineer digital legacies. Our integrated approach ensures that every pixel, line of code, and performance metric works in perfect harmony to deliver measurable ROI and transform your ambitious project into a lasting success story.</p>
        </div>
    </BaseComp>
  )
}

export default AboutImg