"use client";
import React, { useEffect, useMemo, useState } from "react";
// import logo from "../../assets/Logo.svg";
import { usePathname } from "next/navigation";
import useAnimationEffects from "../Util/upAnimation";
import BaseComp from "../Util/BaseComp";
import { ArrowRight, Loader2 } from "lucide-react";
import { AnimatedCheck } from "../ui/AnimatedCheck";
import { StaticContent } from "@/lib/Content";
import Link from "next/link";
import Image from "next/image";
import ActiveLink from "../ui/ActiveLink";



const links = new StaticContent().mainNavLinks

const links2 = new StaticContent().secondaryNavLinks
const adress = new StaticContent().companyInfo
const Footer = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = usePathname()

  const options = useMemo(
    () => ({
      upSelector: ".footer",
      defaultUpAnimation: { opacity: 0, y: 70, scale: 0.95 },
      defaultUpTo: { opacity: 1, y: 0, scale: 1, duration: 0.5 },
    }),
    [location.pathname]
  );

  useAnimationEffects(options);

  useEffect(() => {
    let timer;
    let timer2;

    if (isLoading) {
      timer = setTimeout(() => {
        setLoading("Check"); // Show a success state
        setEmail(""); // Clear the input
      }, 3000); // After 3 seconds

      timer2 = setTimeout(() => {
        setLoading(null);
      }, 4000);
    }

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, [isLoading]);

  const handleSubmit = () => {
    if (email === "") {
      setError(true);
      return;
    }
    setError(false)
    setLoading("loading")
  }
  return (
    <BaseComp className="md:py-20  min-h-[600px]">
      <div className="mt-20">
        <div className="grid  md:grid-cols-4  gap-y-6 md:gap-y-16 gap-x-12">
          <div className="md:col-span-2">
            <Image src="/assets/Logo.svg" width={128} height={40} className="w-auto h-10 footer" alt="Logo" />
            <p className="footer text-sm tracking-widest text-neutral-400 mt-10">
              Subscribe to newsletter
            </p>

            <div className="mt-6">
              <div className="flex footer items-center gap-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={`${error ? " border-theme-600" : "border-transparent"} border block w-full max-w-[400px] px-8 py-4 bg-neutral-900 hover:bg-neutral-300 focus:bg-neutral-300 placeholder:text-neutral-600   transition-all duration-300    rounded-full focus:outline-none "`}
                />
                <button
                  onClick={handleSubmit}
                  className="mil-scale p-4 rounded-full hover:bg-theme-700 transition-all duration-300 cursor-pointer hover:-rotate-45 text-neutral-300 bg-theme-600"
                >
                  {isLoading && isLoading === "loading" ? (
                    <Loader2
                      strokeWidth={1.5}
                      size={20}
                      className="animate-spin"
                    />
                  ) : isLoading === "Check" ? (
                    <AnimatedCheck
                      key={'key'}
                      size={20}
                      stroke="#fff"
                      duration={0.9}
                    // onComplete={() => setLoading(null)}
                    />
                  ) : (
                    <ArrowRight strokeWidth={1.5} size={20} />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div>
            <ul className="footer space-y-4 navLink">
              {links.map((item, index) => {
                return (
                  <li key={index}>
                    <div
                      className="foot er text-xl md:text-2xl font-bold text-neutral-300 hover:text-theme-600  transition-all duration-300  "
                    >
                      <ActiveLink href={item.link}>{item.name}</ActiveLink>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <ul className="footer space-y-4">
              {links2.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="fo oter flex  text-neutral-500 transition-all duration-300 hover:text-theme-600 font-medium"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid  md:grid-cols-4 gap-y-6 md:gap-y-16 gap-x-12 mt-20">
          <div className="md:col-span-2">
            <p className="footer text-sm tracking-widest text-neutral-400 ">
              Connect with us
            </p>
            <p className="footer text-2xl md:text-4xl font-extrabold text-neutral-300 mt-6">
              {adress?.phone || '965352332'}
            </p>
            <p className="text-xs font-medium  text-neutral-500 footer mt-2">
              © Copyright {new Date().getFullYear()}, All Rights Reserved by
              <span className="hover:underline"> Neptune Mark</span>
            </p>
          </div>

          <div className="footer">
            <h1 className="text-xl font-bold text-neutral-300">India</h1>
            <div className="flex flex-col gap-1 mt-6">
              <p className="text-neutral-500 font-semibold">
                {adress?.address?.India}
              </p>
            </div>
          </div>

          <div className="footer">
            <h1 className="text-xl font-bold text-neutral-300">Qatar</h1>
            <div className="flex flex-col gap-1 mt-6">
              <p className="text-neutral-500 font-semibold">
                {adress?.address?.Qatar}
              </p>
            </div>
          </div>
        </div>
      </div>
    </BaseComp>
  );
};
export default Footer;
