"use client";
import RotatingShape from "@/components/Services/Shape";
import BaseComp from "@/components/Util/BaseComp";
import React from "react";
import "./404.css";
import NewButton from "@/components/ui/NewButton";
import Link from "next/link";

function ErrorPage() {
  return (
    <BaseComp className="w-full h-screen flex flex-col items-center justify-center">
      <RotatingShape
        className="absolute  right-20 -top-60"
        animation
        detail={0}
        size={2.5}
      />
      <RotatingShape
        className="absolute -left-20 -bottom-20 md:bottom-20"
        animation={false}
        detail={0}
        size={1.5}
      />
      <div className="w-full h-screen flex flex-col items-center justify-center bg-black">
        <div className="scale-100 md:scale-200">
        <h1 data-text="404" className="mil-404 text-neutral-100   text-center relative ">
          404
        </h1>
        </div>
        <h1 className="text-xl tracking-widest font-light text-gray-100 mt-5 text-center mb-5">Oops! Something went wrong!</h1>
        <Link href='/'>
        <NewButton>Back to home</NewButton>
        </Link>
      </div>
    </BaseComp>
  );
}

export default ErrorPage;
