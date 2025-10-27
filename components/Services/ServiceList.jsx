"use client";
import React from "react";
import BaseComp from "../Util/BaseComp";
import NewButton from "../ui/NewButton";
import useAnimationEffects from "../Util/upAnimation";
import { TextContent } from "@/lib/Content";

const sections = new TextContent().services?.services

function ServiceList() {
    useAnimationEffects({
        upSelector: '.services',
        defaultUpAnimation: {
          opacity: 0,
          y: 60, 
        }
      });
  return (
    <BaseComp className='pb-28'>
      <div className="grid md:grid-cols-6 gap-16">
        <div className="md:col-span-2 w-full h-full ">
        <div className="w-full max-md:hidden max-w-64 border border-neutral-800 h-full max-h-[1000px] mx-auto overflow-hidden">
            <div className=" space-y-20  animate-move">
              <div className="grid grid-cols-2 grid-rows-2 w-full aspect-square border border-neutral-800">
                <div className="w-full aspect-square  border border-neutral-800"></div>
                <div className="w-full aspect-square  border border-neutral-800"></div>
                <div className="w-full aspect-square rounded-bl-full border border-neutral-800"></div>
                <div className="w-full aspect-square rounded-br-full border border-neutral-800"></div>
              </div>
              <div className="grid grid-cols-2   w-full ">
                <div className="w-full aspect-square rounded-tl-full border border-neutral-800"></div>
                <div className="w-full aspect-square rounded-tr-full border border-neutral-800"></div>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 w-full aspect-square border border-neutral-800">
                <div className="w-full aspect-square rounded-tl-full border border-neutral-800"></div>
                <div className="w-full aspect-square rounded-tr-full border border-neutral-800"></div>
                <div className="w-full aspect-square rounded-bl-full border border-neutral-800"></div>
                <div className="w-full aspect-square rounded-br-full border border-neutral-800"></div>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 w-full aspect-square border border-neutral-800">
                <div className="w-full aspect-square rounded-tl-full border border-neutral-800"></div>
                <div className="w-full aspect-square rounded-tr-full border border-neutral-800"></div>
                <div className="w-full aspect-square rounded-bl-full border border-neutral-800"></div>
                <div className="w-full aspect-square rounded-br-full border border-neutral-800"></div>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 w-full aspect-square border border-neutral-800">
                <div className="w-full aspect-square rounded-tl-full  border border-neutral-800"></div>
                <div className="w-full aspect-square  border border-neutral-800"></div>
                <div className="w-full aspect-square rounded-bl-full border border-neutral-800"></div>
                <div className="w-full aspect-square  border border-neutral-800"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 w-full grid md:grid-cols-2 gap-16">
         {sections.map((section, index) => {
          const isOdd = index % 2 !== 0;
           return (
            <div key={index} className={`${!isOdd && "md:mt-14"} space-y-8`}>
          <h1 className="text-3xl font-medium text-white services max-w-72 ">
          {section.title}
          </h1>
          <p className=" max-w-72 services">
          {section.description}
          </p>
          <div className="divide-y divide-neutral-800 border-y border-neutral-800">
            {section?.services?.map((service, index) => {
              return (
                <h1
                  key={index}
                  className="py-4 uppercase services text-sm font-medium text-neutral-500 hover:translate-x-3 transition-all duration-500"
                >
                  {service}
                </h1>
              );
            })}
          </div>
          <NewButton className='py-2.5 px-5 services'>Portfolio</NewButton>
        </div>
           )
         })
         }
        </div>

        
      </div>
      
    </BaseComp>
    // <BaseComp className='pb-28'>
    //   <div className="grid md:grid-cols-7 gap-16">
    //     <div className="md:col-end-3"></div>
    //     <div className="md:col-span-2 md:mt-14 space-y-8">
    //       <h1 className="text-3xl font-medium text-white services max-w-60 bg-amber-500">
    //         Branding and Identity Design
    //       </h1>
    //       <p className=" max-w-72 services">
    //         Our creative agency is a team of professionals focused on helping
    //         your brand grow.
    //       </p>
    //       <div className="divide-y divide-neutral-800 border-y border-neutral-800">
    //         {sections[0].services.map((service, index) => {
    //           return (
    //             <h1
    //               key={index}
    //               className="py-4 services text-sm font-medium text-neutral-500 hover:translate-x-3 transition-all duration-500"
    //             >
    //               {service}
    //             </h1>
    //           );
    //         })}
    //       </div>
    //       <NewButton className='py-2.5 px-5 services'>Portfolio</NewButton>
    //     </div>

    //     <div className="md:col-span-2  space-y-8">
    //       <h1 className="text-3xl font-medium text-white services">
    //       Website Design <br /> and Development
    //       </h1>
    //       <p className=" max-w-72 services">
    //         Our creative agency is a team of professionals focused on helping
    //         your brand grow.
    //       </p>
    //       <div className="divide-y divide-neutral-800 border-y border-neutral-800">
    //         {sections[1].services.map((service, index) => {
    //           return (
    //             <h1
    //               key={index}
    //               className="py-4 text-sm services font-medium text-neutral-500 hover:translate-x-3 transition-all duration-500"
    //             >
    //               {service}
    //             </h1>
    //           );
    //         })}
    //       </div>
    //       <NewButton className='py-2.5 px-5 services'>Portfolio</NewButton>
    //     </div>
    //   </div>
    //   <div className="grid md:grid-cols-7 gap-16 mt-9">
    //     <div className="md:col-end-3"></div>
    //     <div className="md:col-span-2 mt-14 space-y-8">
    //       <h1 className="text-3xl font-medium text-white services">
    //       Advertising and <br /> marketing campaigns
    //       </h1>
    //       <p className=" max-w-72 services">
    //         Our creative agency is a team of professionals focused on helping
    //         your brand grow.
    //       </p>
    //       <div className="divide-y divide-neutral-800 border-y border-neutral-800">
    //         {sections[0].services.map((service, index) => {
    //           return (
    //             <h1
    //               key={index}
    //               className="py-4 text-sm services font-medium text-neutral-500 hover:translate-x-3 transition-all duration-500"
    //             >
    //               {service}
    //             </h1>
    //           );
    //         })}
    //       </div>
    //       <NewButton className='py-2.5 px-5 services'>Portfolio</NewButton>
    //     </div>

    //     <div className="md:col-span-2  space-y-8">
    //       <h1 className="text-3xl font-medium text-white services">
    //       creative consulting and <br /> concept development
    //       </h1>
    //       <p className=" max-w-72 services">
    //         Our creative agency is a team of professionals focused on helping
    //         your brand grow.
    //       </p>
    //       <div className="divide-y divide-neutral-800 border-y border-neutral-800">
    //         {sections[1].services.map((service, index) => {
    //           return (
    //             <h1
    //               key={index}
    //               className="py-4 text-sm services font-medium text-neutral-500 hover:translate-x-3 transition-all duration-500"
    //             >
    //               {service}
    //             </h1>
    //           );
    //         })}
    //       </div>
    //       <NewButton className='py-2.5 px-5 services'>Portfolio</NewButton>
    //     </div>
    //   </div>
    // </BaseComp>
  );
}

export default ServiceList;
