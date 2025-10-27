"use client";
import AboutImg from "@/components/About/AboutImg";
import Vision from "@/components/About/Vision";
import ServiceText from "@/components/Services/ServiceText";
import PageHead from "@/components/ui/PageHead";
import React from "react";

function About() {
  return (
    <div>
      <PageHead arrowText="Read more about us" detail={2}>
        <h1 className="text-5xl head servicesText font-semibold md:text-7xl text-black">
          Our Createve <br />{" "}
          <span className="font-extralight">Vission and Mission</span>
        </h1>
      </PageHead>
      <Vision />
      <AboutImg />
      <ServiceText />
    </div>
  );
}

export default About;
