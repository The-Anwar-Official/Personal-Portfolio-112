"use client";

import { useState } from "react";
import CinematicIntro from "@/components/CinematicIntro";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <main className="min-h-screen">
      {showIntro && <CinematicIntro onComplete={() => setShowIntro(false)} />}
      
      <div className={showIntro ? "blur-sm pointer-events-none opacity-50 transition-all duration-1000" : "transition-all duration-1000"}>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}