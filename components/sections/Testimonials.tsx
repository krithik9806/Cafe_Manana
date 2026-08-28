"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Testimonial } from "@/lib/types";
import MotionSection from "@/components/ui/MotionSection";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || testimonials.length === 0) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  if (!testimonials || testimonials.length === 0) return null;

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 60 : -60,
      opacity: 0,
      scale: 0.96,
    }),
  };

  return (
    <section id="testimonials" className="py-24 bg-brown-deep text-cream relative overflow-hidden">
      {/* Decorative Glow Orb */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-terracotta/10 rounded-full filter blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <MotionSection className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-terracotta text-xs sm:text-sm font-bold uppercase tracking-[0.25em] inline-flex items-center gap-2 block">
            <Sparkles className="w-4 h-4 text-terracotta animate-pulse" />
            <span>Guest Experiences</span>
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-cream">
            What Our Guests Say
          </h2>
          <p className="font-body text-cream/70 text-base sm:text-lg">
            Real stories from coffee lovers who make Cafe Manana their morning ritual.
          </p>
        </MotionSection>

        {/* Carousel Container */}
        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative min-h-[260px] sm:min-h-[240px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45 }}
                className="w-full bg-cream text-brown-deep p-8 sm:p-10 rounded-3xl shadow-2xl relative border border-cream-dark/20"
              >
                {/* Quote Icon with Glow */}
                <Quote className="absolute top-6 right-6 w-12 h-12 text-terracotta/20 pointer-events-none animate-pulse" />

                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <Star
                        className={`w-5 h-5 ${
                          i < testimonials[currentIndex].rating
                            ? "fill-gold text-gold"
                            : "text-brown-mid/20"
                        }`}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-display italic text-lg sm:text-xl md:text-2xl text-brown-deep leading-relaxed mb-6">
                  "{testimonials[currentIndex].review}"
                </p>

                {/* Customer Details */}
                <div className="flex items-center justify-between pt-4 border-t border-brown-mid/10">
                  <div>
                    <h4 className="font-body font-bold text-base text-brown-deep">
                      {testimonials[currentIndex].customerName}
                    </h4>
                    <span className="font-body text-xs text-sage font-medium">
                      Verified Guest
                    </span>
                  </div>

                  {testimonials[currentIndex].date && (
                    <span className="text-xs text-brown-mid/60 font-body">
                      {testimonials[currentIndex].date}
                    </span>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls & Dots */}
          <div className="flex items-center justify-between mt-8 px-4">
            <motion.button
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="p-3 rounded-full bg-cream/10 text-cream hover:bg-terracotta transition-colors focus:outline-none shadow-md"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-8 bg-terracotta shadow-md"
                      : "w-2.5 bg-cream/40 hover:bg-cream/70"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="p-3 rounded-full bg-cream/10 text-cream hover:bg-terracotta transition-colors focus:outline-none shadow-md"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
