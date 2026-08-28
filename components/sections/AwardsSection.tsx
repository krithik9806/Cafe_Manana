"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Trophy, Star, Sparkles, X, ZoomIn, CheckCircle2, ShieldCheck } from "lucide-react";
import MotionSection from "@/components/ui/MotionSection";

export const AwardsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    subtitle: string;
    tag: string;
  } | null>(null);

  const awards = [
    {
      id: "cert",
      src: "/images/awards/eazydiner-best-cafe-certificate.jpg",
      title: "The Best Cafe Award",
      subtitle: "Official Certificate — EazyDiner Foodie Awards (Chennai Edition)",
      tag: "Official Citation",
    },
    {
      id: "stage",
      src: "/images/awards/eazydiner-award-ceremony.jpg",
      title: "Award Presentation Ceremony",
      subtitle: "Cafe Manana Team Receiving 'The Best Cafe' Award on Stage",
      tag: "Live Ceremony",
    },
  ];

  // Auto swap front and back every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === 0 ? 1 : 0));
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="awards"
      className="py-16 sm:py-24 bg-brown-deep text-cream relative overflow-hidden border-y border-gold/20"
    >
      {/* Ambient Radial Spotlight Orbs */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-gold/15 via-terracotta/20 to-gold/10 rounded-full filter blur-[110px] pointer-events-none animate-pulse" />

      {/* Floating Decorative Sparkles */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 10, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 text-gold/40 pointer-events-none hidden sm:block"
      >
        <Sparkles className="w-8 h-8" />
      </motion.div>
      <motion.div
        animate={{
          y: [0, 14, 0],
          rotate: [0, -10, 0],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 right-10 text-gold/40 pointer-events-none hidden sm:block"
      >
        <Trophy className="w-9 h-9" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT SIDE: Narrative Content */}
          <MotionSection className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 text-gold border border-gold/30 text-xs font-bold uppercase tracking-widest shadow-md">
              <Trophy className="w-4 h-4 text-gold animate-pulse" />
              <span>Award-Winning Distinction</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold text-cream leading-tight">
              Voted <span className="text-gold italic font-serif">"The Best Cafe"</span> in Chennai
            </h2>

            <p className="font-body text-cream/90 text-base sm:text-lg leading-relaxed border-l-2 border-gold/40 pl-4 py-1">
              Cafe Manana, Anna Nagar, was honoured at the EazyDiner Foodie Awards – Chennai Edition, receiving the prestigious <strong className="text-gold font-semibold">“The Best Cafe”</strong> award, celebrating its outstanding ambience, dining experience, cafe culture, and memorable hospitality in Chennai.
            </p>

            {/* Highlights List */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-cream/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>EazyDiner Foodie Awards Winner</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-gold fill-gold shrink-0" />
                <span>Chennai Edition Winner</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                <span>Anna Nagar East Landmark</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>Outstanding Hospitality</span>
              </div>
            </div>
          </MotionSection>

          {/* RIGHT SIDE: 3D Front & Back Rotating Award Cards */}
          <MotionSection delay={0.2} className="lg:col-span-6 relative h-[480px] sm:h-[520px] flex items-center justify-center">
            {awards.map((award, index) => {
              const isFront = index === activeIndex;

              // 3D Front and Back Motion Coordinates
              const variants = {
                front: {
                  x: "-8%",
                  y: "0%",
                  scale: 1,
                  rotateZ: -3,
                  rotateY: 0,
                  zIndex: 20,
                  opacity: 1,
                  filter: "brightness(100%)",
                },
                back: {
                  x: "14%",
                  y: "4%",
                  scale: 0.86,
                  rotateZ: 6,
                  rotateY: 12,
                  zIndex: 10,
                  opacity: 0.75,
                  filter: "brightness(75%)",
                },
              };

              return (
                <motion.div
                  key={award.id}
                  initial={false}
                  animate={isFront ? "front" : "back"}
                  variants={variants}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 22,
                    mass: 0.9,
                  }}
                  onClick={() => {
                    if (!isFront) {
                      setActiveIndex(index);
                    } else {
                      setSelectedImage(award);
                    }
                  }}
                  className="absolute w-[260px] sm:w-[320px] cursor-pointer group select-none"
                >
                  {/* Solid Opaque Card Container */}
                  <div className="relative rounded-2xl overflow-hidden bg-[#2B170D] border border-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(212,168,71,0.4)]">
                    {/* Image Viewport */}
                    <div className="relative aspect-[3/4] w-full bg-black/60">
                      <Image
                        src={award.src}
                        alt={award.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 360px"
                        priority
                        className="object-contain"
                      />

                      {/* Tag Badge */}
                      <div className="absolute top-3 left-3 bg-[#2B170D] border border-gold/40 text-gold text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5 z-10">
                        <Award className="w-3.5 h-3.5" />
                        <span>{award.tag}</span>
                      </div>

                      {/* Zoom Icon on Hover */}
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gold/30 backdrop-blur-md text-gold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        <ZoomIn className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Solid Opaque Caption Bar — Only Visible when Active/Front */}
                    <motion.div
                      animate={{ opacity: isFront ? 1 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="bg-[#2B170D] p-4 border-t border-gold/30 text-left min-h-[82px]"
                    >
                      <h3 className="font-display text-lg font-bold text-cream group-hover:text-gold transition-colors">
                        {award.title}
                      </h3>
                      <p className="font-body text-xs text-cream/70 line-clamp-1 mt-0.5">
                        {award.subtitle}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}

            {/* Bottom Dots Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
              {awards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === i ? "w-8 bg-gold" : "w-2 bg-cream/30 hover:bg-cream/50"
                  }`}
                  aria-label={`Go to award ${i + 1}`}
                />
              ))}
            </div>
          </MotionSection>
        </div>
      </div>

      {/* Lightbox Modal for Uncropped Full Screen HD View */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl p-4 sm:p-8 flex items-center justify-center cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] w-full bg-brown-deep rounded-3xl overflow-hidden border-2 border-gold/40 shadow-2xl p-4 sm:p-6 flex flex-col items-center cursor-default"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-cream/10 text-cream hover:bg-gold hover:text-brown-deep transition-all duration-200 flex items-center justify-center"
                aria-label="Close image modal"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Container */}
              <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden bg-black/80">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Modal Text */}
              <div className="mt-4 text-center space-y-1">
                <h4 className="font-display text-xl sm:text-2xl font-bold text-gold">
                  {selectedImage.title}
                </h4>
                <p className="font-body text-xs sm:text-sm text-cream/80">
                  {selectedImage.subtitle}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AwardsSection;
