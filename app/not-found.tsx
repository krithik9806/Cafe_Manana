import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-cream py-20">
      <h1 className="font-display text-6xl font-bold text-brown-deep mb-4">404</h1>
      <h2 className="font-display text-2xl font-bold text-terracotta mb-2">Page Not Found</h2>
      <p className="font-body text-brown-mid max-w-md mb-8">
        The page you are looking for might have been moved or doesn't exist.
      </p>
      <Link href="/" className="btn-primary">
        Return to Home
      </Link>
    </div>
  );
}
