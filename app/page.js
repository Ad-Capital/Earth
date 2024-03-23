"use client";

import { AnimatePresence } from 'framer-motion';
import React, { createContext, useState, useEffect } from 'react';
import { Cards, Navbar, Preloader } from "@/components";
import { Hero, YoutubeVideo, About, Explore, Values, Marketplace, FAQ } from "@/sections";
import Contact from "@/sections/Contact/Contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])
  return (
    <main className="flex min-h-screen flex-col body">
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Navbar />
      <Hero />
      <Cards />
      <About />
      <YoutubeVideo />
      <div className="Gradient">
        <Explore />
        <Values />
      </div>
      <Marketplace />
      <FAQ />
      <Contact />
    </main>
  );
}
