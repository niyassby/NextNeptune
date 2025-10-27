"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";  
import NavLinks from "./NavLink";

function Navbar() {
  const [isScroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div
        className={`w-full bg-b lack borde r-b border-neutral-600/30 fixed top-0 z-50 transition-all duration-1000   ${
          isScroll ? "md:py-7 py-5 max-md:bg-black" : "md:py-9 py-6"
        }`}
      >
        <div className="w-full h-full max-w-[80rem] 2xl:max-w-[85rem]  mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="z-10">
            <img src="/assets/Logo.svg" className="w-32 " alt="" />
          </Link>

          <NavLinks />
        </div>
      </div>
    </>
  );
}

export default Navbar;
