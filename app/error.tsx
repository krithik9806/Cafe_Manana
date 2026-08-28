"use client";

import React from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-cream py-20">
      <h1 className="font-display text-5xl font-bold text-brown-deep mb-4">Something Went Wrong</h1>
      <p className="font-body text-brown-mid max-w-md mb-8">
        We encountered an unexpected glitch while serving your request.
      </p>
      <div className="flex items-center gap-4">
        <button onClick={() => reset()} className="btn-primary">
          Try Again
        </button>
        <Link href="/" className="btn-outline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
