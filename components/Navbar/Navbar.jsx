"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLink";

function Navbar() {
  const [isScroll, setScroll] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY >= 100) {
            setScroll(true);
          } else {
            setScroll(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`w-full border-neutral-600/30 fixed top-0 z-[500] transition-all duration-1000   ${
          isScroll ? "md:py-7 py-5 max-md:bg-black" : "md:py-9 py-6"
          }`}
      >
        <div className="w-full h-full max-w-[80rem] 2xl:max-w-[85rem]  mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="z-10">
            <Image src="/assets/Logo.svg" width={128} height={40} className="w-32 h-auto" alt="Logo" priority />
          </Link>

          <NavLinks />
        </div>
      </div>
    </>
  );
}

export default Navbar;
