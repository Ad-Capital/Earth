"use client";

import { Map, Navbar, RoadmapContact, RoadmapHero } from "@/sections";
import { AnimatePresence } from 'framer-motion';
import React, { createContext, useState, useEffect } from 'react';
import Curve from "@/components/Curve";

export default function roadmap() {
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
        <main className="flex-col image-background">
            <AnimatePresence mode='wait'>
                {isLoading && <Curve />}
            </AnimatePresence>
            <div className="roadmapGradient">
                <Navbar />
                <RoadmapHero />
            </div>
            <Map />
            <RoadmapContact />

        </main>

    )
}