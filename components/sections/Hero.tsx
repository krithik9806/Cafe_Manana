"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf, Coffee, Star, Clock, MapPin, ChevronDown, Sparkles } from "lucide-react";
import { SiteSettings } from "@/lib/types";

interface HeroProps {
  siteSettings: SiteSettings;
}

export const Hero: React.FC<HeroProps> = ({ siteSettings }) => {
  const headingWords = siteSettings.heroHeading ? siteSettings.heroHeading.split(" ") : [];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-12 overflow-hidden bg-gradient-to-br from-cream-dark/60 via-cream to-cream"
    >
      {/* Dynamic Animated Ambient Glows */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-96 h-96 bg-terracotta/10 rounded-full filter blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-gold/10 rounded-full filter blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          {/* Mobile Order 2 / Desktop Order 1: Text Content (55% = 7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 order-2 lg:order-1">
            {/* Est. Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.04, y: -2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage/15 text-sage text-xs sm:text-sm font-semibold tracking-wide border border-sage/20 shadow-sm cursor-default"
            >
              <Leaf className="w-4 h-4 text-sage animate-spin-slow" />
              <span>Anna Nagar East, Chennai • Two-Floor Pastel Cafe</span>
            </motion.div>

            {/* Official Instagram Caption Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              whileHover={{ scale: 1.02, rotate: -1 }}
              className="font-logo-script text-3xl sm:text-4xl md:text-5xl text-terracotta -mb-3 select-none tracking-wide transition-transform cursor-default"
            >
              Celebrate the everyday.
            </motion.p>

            {/* Word-by-word Reveal Heading with Spring Physics */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-brown-deep leading-[1.1] tracking-tight">
              {headingWords.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 35, rotateX: -20 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 12,
                    delay: 0.3 + index * 0.07,
                  }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="font-body text-base sm:text-lg text-brown-mid max-w-xl leading-relaxed"
            >
              {siteSettings.heroSubtext}
            </motion.p>

            {/* CTA Buttons with Elevated Motion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link href="/menu" className="btn-primary w-full sm:w-auto shadow-lg hover:shadow-xl flex items-center justify-center gap-2.5">
                  <Coffee className="w-5 h-5 animate-pulse" />
                  <span>Explore Menu</span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link href="#contact" className="btn-outline w-full sm:w-auto flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 text-terracotta" />
                  <span>Reserve Table</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust Signals with Hover Micro-Springs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="pt-6 border-t border-brown-mid/10 w-full grid grid-cols-3 gap-2 sm:gap-6 text-brown-deep text-xs sm:text-sm font-medium"
            >
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                className="flex items-center gap-1.5 cursor-default p-1.5 rounded-lg hover:bg-cream-dark/50 transition-colors"
              >
                <Star className="w-4 h-4 fill-gold text-gold shrink-0 animate-bounce" />
                <span>
                  <strong>4.4 ★</strong> (1,488+ Reviews)
                </span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                className="flex items-center gap-1.5 cursor-default p-1.5 rounded-lg hover:bg-cream-dark/50 transition-colors"
                title="Mon–Thu: 11 AM – 11 PM | Fri–Sun: 11 AM – 2 AM"
              >
                <Clock className="w-4 h-4 text-terracotta shrink-0" />
                <span>Fri–Sun Till 2 AM</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                className="flex items-center gap-1.5 cursor-default p-1.5 rounded-lg hover:bg-cream-dark/50 transition-colors"
              >
                <MapPin className="w-4 h-4 text-sage shrink-0" />
                <span>Anna Nagar East</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile Order 1 / Desktop Order 2: Image Hero Card (45% = 5 cols) */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full max-w-md lg:max-w-none h-[380px] sm:h-[480px] lg:h-[540px]"
            >
              {/* Main Image with Gentle Float */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white-soft group"
              >
                <Image
                  src={siteSettings.heroImage}
                  alt="Cafe Manana Coffee"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-deep/30 via-transparent to-transparent" />
              </motion.div>

              {/* Floating Today's Special Card Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -8, 0],
                }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.8 },
                  scale: { duration: 0.6, delay: 0.8 },
                  y: {
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 bg-white/90 backdrop-blur-xl p-4 sm:p-5 rounded-2xl shadow-2xl border border-white/80 max-w-[260px] sm:max-w-[290px] cursor-pointer transition-all hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] hover:bg-white/95 z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-terracotta/10 text-terracotta flex items-center justify-center shrink-0 border border-terracotta/20">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-terracotta block">
                      Indulge Feature • ₹325
                    </span>
                    <h4 className="font-display text-sm sm:text-base font-bold text-brown-deep leading-tight">
                      Not Tom Yum Cold Brew
                    </h4>
                    <p className="text-[11px] text-brown-mid/80 line-clamp-1 mt-0.5">
                      Kaffir Lime, Galangal & Popsicle
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down Chevron */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:flex justify-center pt-8 pb-2 text-brown-mid/60"
      >
        <Link href="#about" aria-label="Scroll down to About section">
          <ChevronDown className="w-8 h-8 cursor-pointer hover:text-terracotta transition-colors" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
