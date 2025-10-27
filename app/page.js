import { BentoGrid } from "@/components/bentogrid/Grids";
import Hero from "@/components/home/Hero";
import OurTeam from "@/components/home/OurTeam";
import Testimonial from "@/components/home/Testimonial";
import TextBanner from "@/components/home/TextBanner";
import Section2 from "@/components/home/section2";

export default function Home() {
  return (
    <div>
      <Hero/>
      <TextBanner/>
      <BentoGrid/>
      <OurTeam/>
      <Section2/>
      <Testimonial/>
    </div>
  );
}
