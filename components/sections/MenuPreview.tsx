"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Coffee, ArrowRight, Sparkles, Leaf } from "lucide-react";
import { MenuItem } from "@/lib/types";
import MotionSection from "@/components/ui/MotionSection";

interface MenuPreviewProps {
  featuredItems: MenuItem[];
}

export const MenuPreview: React.FC<MenuPreviewProps> = ({ featuredItems }) => {
  return (
    <section id="menu" className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative Glow Orb */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-0 w-96 h-96 bg-terracotta/10 rounded-full filter blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <MotionSection className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-sage text-xs sm:text-sm font-bold uppercase tracking-[0.25em] inline-flex items-center gap-2 block">
            <Sparkles className="w-4 h-4 text-sage animate-pulse" />
            <span>What We Serve</span>
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brown-deep">
            A Taste of Manana
          </h2>
          <p className="font-body text-brown-mid text-base sm:text-lg">
            Crafted with love, roasted to perfection, served with warmth.
          </p>
        </MotionSection>

        {/* Featured Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item, idx) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 35, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 14,
                delay: idx * 0.12,
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white-soft rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-cream-dark flex flex-col group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-dark">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                />
                {/* Category Badge */}
                {item.category?.name && (
                  <span className="absolute top-3 left-3 bg-sage/90 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    {item.category.name}
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-xl font-bold text-brown-deep group-hover:text-terracotta transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <p className="font-body text-brown-mid/80 text-sm leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer: Price & Dietary Tags */}
                <div className="pt-4 border-t border-cream-dark flex items-center justify-between">
                  <span className="font-body text-xl font-extrabold text-terracotta">
                    ₹{item.price}
                  </span>

                  {/* Dietary Tags */}
                  {item.dietaryTags && item.dietaryTags.length > 0 && (
                    <div className="flex items-center gap-1.5 flex-wrap justify-end">
                      {item.dietaryTags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-0.5 text-[10px] font-semibold bg-sage/10 text-sage px-2 py-0.5 rounded-md"
                          title={tag}
                        >
                          <Leaf className="w-3 h-3" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA to Full Menu Page */}
        <MotionSection delay={0.3} className="text-center pt-16">
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-block"
          >
            <Link
              href="/menu"
              className="inline-flex items-center gap-3 bg-terracotta hover:bg-terracotta-hover text-white font-body font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Coffee className="w-6 h-6 animate-[spin_10s_linear_infinite]" />
              <span>View Full Cafe Menu</span>
              <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </MotionSection>
      </div>
    </section>
  );
};

export default MenuPreview;
