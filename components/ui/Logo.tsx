"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark" | "image-only";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "dark",
  size = "md",
  className = "",
}) => {
  const isLight = variant === "light";

  if (variant === "image-only") {
    const width = size === "sm" ? 110 : size === "lg" ? 180 : 140;
    const height = size === "sm" ? 44 : size === "lg" ? 72 : 56;
    return (
      <Link href="/" className={`inline-block rounded-xl overflow-hidden ${className}`}>
        <Image
          src="/images/logo.jpg"
          alt="Cafe Manana Official Logo"
          width={width}
          height={height}
          priority
          className="object-contain hover:opacity-90 transition-opacity"
        />
      </Link>
    );
  }

  // Exact Font Style & Layout matching the official logo image:
  // Delicate cursive "Cafe" floating over uppercase wide-tracked "MANANA" in terracotta
  return (
    <Link href="/" className={`group inline-flex items-center gap-3 focus:outline-none ${className}`}>
      {/* Official Logo Image Thumbnail */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-brown-mid/20 shadow-sm shrink-0 bg-white">
        <Image
          src="/images/logo.jpg"
          alt="Cafe Manana Official Logo"
          fill
          priority
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Official Typography Match */}
      <div className="relative flex flex-col items-start leading-none select-none py-1">
        {/* Floating Cursive Script "Cafe" */}
        <span
          className={`font-logo-script text-2xl sm:text-3xl -mb-2.5 ml-0.5 z-10 font-normal ${
            isLight ? "text-cream/90" : "text-brown-deep"
          }`}
        >
          Cafe
        </span>
        {/* Uppercase Wide-Tracked "MANANA" */}
        <span
          className="font-body font-bold text-lg sm:text-xl tracking-[0.24em] uppercase text-terracotta"
        >
          MANANA
        </span>
      </div>
    </Link>
  );
};

export default Logo;
