"use client";
import React from 'react'
import Link from 'next/link';


import useAnimationEffects from '../Util/upAnimation';
import Canvas3d from './Canvas';
import Mashroom3d from './Mashroom3d';

const contant = `Wahda Karak is a signature blend crafted by Mshkak General Trading (MGT), offering the authentic flavor of traditional Karak tea in a modern, convenient form. Developed after extensive research and refinement, Wahda Karak uses only 100% natural ingredients, no synthetic essence, no compromises.

Our unique premix allows you to prepare rich, aromatic Karak tea effortlessly, with consistent taste and quality in every cup. Whether for cafes, restaurants, offices, or home kitchens, Wahda Karak makes it easy to enjoy a timeless beverage with a 30% cost saving compared to conventional methods.
${<br/>}
Rooted in heritage, perfected for today; Wahda Karak is more than tea; it's an experience.`

function ImageSec() {
  useAnimationEffects({
    upSelector: '.imageUp',
    defaultUpAnimation: {
      opacity: 0,
      y: 40, 
    }
  });
  return (
    <div className='w-full h-screen  py-10 bg-foreground '>
            <Canvas3d  Model3D={<Mashroom3d scale={1} position={[0, 0, 0]} rotation={[0, 0, 0]} />}/>
      
    </div>
//     <div className='w-full min-h-[700px] py-32 flex items-center justify-center bg-foreground px-4'>
//       <div className='max-w-[80rem] 2xl:max-w-[85rem]   mx-auto grid md:grid-cols-2 gap-2   rounded-4xl  bg-cover bg-center'>
//         <div className=''>
//             <Canvas3d Model3D={<Mashroom3d scale={1} position={[0, 0, 0]} rotation={[0, 0, 0]} />}/>
//         </div>
//         <div className='flex flex-col gap-2 md:order-1 justify-center items-start md:px-10 px-6 py-10 md:py-16'>
//             <h1 className='md:text-6xl imageUp text-4xl font-bold mb-2 text-white'>Wahd Karak</h1>
//             <h1 className='text-2xl imageUp font-semibold leading-6 my-2 text-white'>Authentic, all-natural Karak tea premix</h1>
//             <p className='text-sm imageUp text-white/80'>Wahda Karak is a signature blend crafted by Mshkak General Trading (MGT), offering the authentic flavor of traditional Karak tea in a modern, convenient form. Developed after extensive research and refinement, Wahda Karak uses only 100% natural ingredients, no synthetic essence, no compromises.
//             <br/><br/>
// Our unique premix allows you to prepare rich, aromatic Karak tea effortlessly, with consistent taste and quality in every cup. Whether for cafes, restaurants, offices, or home kitchens, Wahda Karak makes it easy to enjoy a timeless beverage with a 30% cost saving compared to conventional methods.
// <br/>
// Rooted in heritage, perfected for today; Wahda Karak is more than tea; it's an experience.</p>
//             <Link href={'/about'} className='imageUp cursor-pointer text-white group inline-flex gap-1 items-center justify-center focus:text-white px-5 py-2 font-medium transition-all duration-500  hover:text-background border rounded-full sm:leading-8 mt-1 sm:text-lg relative btn overflow-hidden'>
//               <span className='z-10'>More about us</span>
//             </Link>
//         </div>
//       </div>
//     </div>
  )
}

export default ImageSec