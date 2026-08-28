"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { fadeUp } from "@/lib/motion";

interface MotionSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variants?: Variants;
  threshold?: number;
  delay?: number;
}

export const MotionSection: React.FC<MotionSectionProps> = ({
  children,
  className = "",
  id,
  variants = fadeUp,
  threshold = 0.15,
  delay = 0,
}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    amount: threshold,
    once: true,
  });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default MotionSection;
