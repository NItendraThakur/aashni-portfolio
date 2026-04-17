"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import ImpactStrip from "@/components/ImpactStrip";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!splashDone && (
          <SplashScreen key="splash" onComplete={() => setSplashDone(true)} />
        )}
      </AnimatePresence>

      {splashDone && (
        <>
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <ImpactStrip />
            <Experience />
            <Achievements />
            <Skills />
            <Education />
            <Contact />
          </main>
        </>
      )}
    </>
  );
}
