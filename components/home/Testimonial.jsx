"use client";
import React from "react";
import Image from "next/image";
import useAnimationEffects from "../Util/upAnimation";
import BaseComp from "../Util/BaseComp";
import { QuoteDownIcon } from "hugeicons-react";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from "lucide-react";
import RotatingShape from "../Services/Shape";
import { TextContent } from "@/lib/Content";

const content = new TextContent().homepage?.testimonial


function Testimonial() {
  useAnimationEffects({
    upSelector: '.qsection',
    defaultUpAnimation: {
      opacity: 0,
      y: 50,
    }
  });
  return (
    <BaseComp className="py-20 bg-neutral-100 min-h-screen flex items-center relative">
      <RotatingShape className="top-1/3 max-md:hidden -right-28" size={1.5} />
      <div className="">
        <div className="w-full flex flex-col items-center justify-center gap-3">
          <h2 className="text-3xl font-bold text-center text-neutral-900 sm:text-6xl qsection">
            <span className="font-extralight ">Customer </span>Voices  <br />
            <span className="font-extralight ">Hear What </span>They Say!
          </h2>
          {/* <p className="mb-7 mt-3 max-w-3xl text-sm text-center text-gray-500 qsection">
            Wahd Karak is dedicated to quality, safety, and excellence, with certifications and recognition that reflect our commitment to industry standards and exceeding customer expectations.
          </p> */}
        </div>
        <div className="  mt-20">
          <Swiper
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            modules={[Autoplay, Pagination, Navigation]}
          >

            {content.map((item, index) => {
              return (
                <SwiperSlide className="pb-10 " key={index}>
                  <div >
                    <div className="flex flex-col items-center justify-center mil-drag">
                      <div className="relative qsection mt-3">
                        <Image src={item.image} alt={item.name || "Testimonial Avatar"} width={96} height={96} className="size-24 rounded-full outline-4 object-top outline-neutral-50 object-cover" />
                        <div className="absolute -right-3 text-gray-800 top-0">
                          <QuoteDownIcon size={20} />
                        </div>
                      </div>
                      <h3 className="qsection text-lg font-semibold text-center text-neutral-900 mt-2">{item.name}</h3>
                      <h3 className="qsection text-sm text-center text-neutral-600">{item.designation}</h3>
                      <p className="qsection text-lg mt-5 text-center max-w-2xl text-gray-500">{item.text}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="flex items-center justify-center gap-5 mt-10 qsection">
            <button className="swiper-button-prev-custom border rounded-full size-10 grid place-content-center text-neutral-600 bg-neutral-200 cursor-pointer hover:bg-neutral-300 hover:text-neutral-700 transition-all duration-300">
              <ArrowLeft size={18} strokeWidth={1.5} />
            </button>
            <button className="swiper-button-next-custom border rounded-full size-10 grid place-content-center text-neutral-600 bg-neutral-200 cursor-pointer hover:bg-neutral-300 hover:text-neutral-700 transition-all duration-300">
              <ArrowRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </BaseComp>
  );
}

export default Testimonial;
