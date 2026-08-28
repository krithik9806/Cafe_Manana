"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { SiteSettings } from "@/lib/types";
import MotionSection from "@/components/ui/MotionSection";

interface AboutProps {
  siteSettings: SiteSettings;
}

export const About: React.FC<AboutProps> = ({ siteSettings }) => {
  return (
    <section id="about" className="py-20 bg-cream-dark relative overflow-hidden">
      {/* Decorative Separator Line at Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-5xl h-[1px] bg-brown-mid/10" />

      {/* Subtle Background Particle Accent */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -right-20 w-80 h-80 bg-sage/10 rounded-full filter blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Asymmetric Framed Image (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <MotionSection className="relative w-full max-w-md lg:max-w-none">
              {/* Decorative Terracotta Offset Backdrop with Pulse */}
              <motion.div
                animate={{ rotate: [2, 3, 2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 w-full h-full bg-terracotta/20 rounded-[40px_0_40px_0] transform"
              />

              {/* Asymmetric Frame Container */}
              <motion.div
                whileHover={{ rotate: 0, scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-full h-[400px] sm:h-[480px] rounded-[40px_0_40px_0] overflow-hidden shadow-xl border-4 border-white-soft transform -rotate-1 cursor-pointer group"
              >
                <Image
                  src={siteSettings.aboutImage}
                  alt="Cafe Manana Ambiance"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-deep/30 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
              </motion.div>
            </MotionSection>
          </div>

          {/* Right Column: Text & Story (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <MotionSection delay={0.2}>
              {/* Overline */}
              <span className="text-sage text-xs sm:text-sm font-bold uppercase tracking-[0.25em] inline-flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-sage animate-pulse" />
                <span>Our Story & Vision</span>
              </span>

              {/* H2 Heading */}
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brown-deep leading-tight">
                {siteSettings.aboutHeading}
              </h2>
            </MotionSection>

            {/* Story Text */}
            <MotionSection delay={0.3} className="prose prose-brown text-brown-mid font-body text-base leading-relaxed space-y-4">
              <p>{siteSettings.aboutText}</p>
            </MotionSection>

            {/* Stat Pills Row with Hover Springs */}
            <MotionSection delay={0.4} className="pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ type: "spring", stiffness: 350, damping: 18 }}
                  className="bg-cream/90 backdrop-blur-sm p-4 rounded-xl border border-brown-mid/10 text-center shadow-sm hover:shadow-md cursor-default transition-shadow"
                >
                  <span className="block text-lg font-bold text-terracotta">🍕 Wood-Fired</span>
                  <span className="text-xs font-medium text-brown-mid">12" Sourdough Pizzas</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ type: "spring", stiffness: 350, damping: 18 }}
                  className="bg-cream/90 backdrop-blur-sm p-4 rounded-xl border border-brown-mid/10 text-center shadow-sm hover:shadow-md cursor-default transition-shadow"
                >
                  <span className="block text-lg font-bold text-gold">⭐ 4.4 / 5</span>
                  <span className="text-xs font-medium text-brown-mid">1,488+ Diner Reviews</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ type: "spring", stiffness: 350, damping: 18 }}
                  className="bg-cream/90 backdrop-blur-sm p-4 rounded-xl border border-brown-mid/10 text-center shadow-sm hover:shadow-md cursor-default transition-shadow"
                >
                  <span className="block text-lg font-bold text-sage">📶 Wi-Fi & Valet</span>
                  <span className="text-xs font-medium text-brown-mid">2-Floor Work Friendly</span>
                </motion.div>
              </div>
            </MotionSection>

            {/* CTA Link */}
            <MotionSection delay={0.5} className="pt-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 font-body font-semibold text-brown-deep hover:text-terracotta transition-colors group text-base"
              >
                <span>Meet Our Barista & Culinary Team</span>
                <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-2 text-terracotta" />
              </Link>
            </MotionSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
