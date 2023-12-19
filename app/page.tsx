"use client";

import ArchASCII from "@/components/ArchASCII";
import HeroSection from "@/components/Sections/HeroSection";


export default function Home() {
  return (
    <>
      <div
        id="container"
        className="bg-white text-gunmetal dark:bg-gunmetal-200 dark:text-french-gray scroll-smooth h-screen overflow-y-auto snap-mandatory snap-y"
      >
        <HeroSection />
        <div className="scollable h-screen snap-start snap-always text-3xl flex justify-center items-center">
          Skills Section
        </div>
        <div className="scollable h-screen snap-start snap-always text-3xl flex justify-center items-center">
          <ArchASCII />
        </div>
        <div className="scollable h-screen snap-start snap-always text-3xl flex justify-center items-center">
          About Me
        </div>
        <div className="scollable h-screen snap-start snap-always text-3xl flex justify-center items-center">
          Contact Section
        </div>
      </div>
    </>
  );
}
