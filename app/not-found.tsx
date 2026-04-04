"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface p-6">
      <div className="max-w-md w-full text-center">
        <h1 className="text-9xl font-black text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold text-secondary mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8 text-lg">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="btn btn-primary px-8 py-3 inline-flex items-center justify-center"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn btn-accent px-8 py-3 inline-flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
