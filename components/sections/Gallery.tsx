"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GalleryImage } from "@/lib/types";
import MotionSection from "@/components/ui/MotionSection";

interface GalleryProps {
  galleryImages: GalleryImage[];
}

export const Gallery: React.FC<GalleryProps> = ({ galleryImages }) => {
  const [isPaused, setIsPaused] = useState(false);

  if (!galleryImages || galleryImages.length === 0) return null;

  // Duplicate list to achieve continuous infinite marquee loop
  const marqueeImages = [...galleryImages, ...galleryImages];

  return (
    <section id="gallery" className="py-24 bg-cream overflow-hidden relative">
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center relative z-10">
        <MotionSection className="space-y-3">
          <span className="text-sage text-xs sm:text-sm font-bold uppercase tracking-[0.25em] block">
            Atmosphere & Moments
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brown-deep">
            Life at Cafe Manana
          </h2>
          <p className="font-body text-brown-mid text-base sm:text-lg max-w-xl mx-auto">
            A glimpse into our daily coffee craft, freshly baked goods, and warm community moments.
          </p>
        </MotionSection>
      </div>

      {/* Infinite Horizontal Marquee Strip */}
      <div
        className="relative w-full flex overflow-hidden py-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          animate={{
            x: isPaused ? undefined : ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
          className="flex gap-6 shrink-0"
        >
          {marqueeImages.map((item, index) => {
            const isLandscape = index % 2 === 0;
            return (
              <motion.div
                key={`${item._id}-${index}`}
                whileHover={{ scale: 1.06, rotate: 1, zIndex: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className={`relative rounded-2xl overflow-hidden shadow-lg border-2 border-white-soft shrink-0 group transition-shadow duration-300 hover:shadow-2xl cursor-pointer ${
                  isLandscape ? "w-[320px] sm:w-[400px] h-[260px]" : "w-[220px] sm:w-[280px] h-[260px]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.altText || "Cafe Manana Gallery"}
                  fill
                  sizes="400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brown-deep/90 via-brown-deep/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end">
                  <span className="text-terracotta text-xs font-bold uppercase tracking-wider block mb-1">
                    Cafe Life
                  </span>
                  <p className="font-display text-white text-lg font-bold">
                    {item.caption || item.altText}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
