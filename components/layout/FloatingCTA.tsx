"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface FloatingCTAProps {
  phone?: string;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({
  phone = "+15553492821",
}) => {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    "Hi! I'd like to reserve a table at Cafe Manana."
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      animate={{
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      aria-label="Reserve via WhatsApp"
      title="Reserve a table on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-current" />
      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-terracotta rounded-full border-2 border-white animate-ping" />
      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-terracotta rounded-full border-2 border-white" />
    </motion.a>
  );
};

export default FloatingCTA;
