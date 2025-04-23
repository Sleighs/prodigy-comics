'use client';

import React from 'react';

export default function CarouselLoading() {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden bg-gray-900">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="space-y-8 w-full max-w-6xl px-4 md:px-8">
          {/* Animated loading elements */}
          <div className="w-1/3 h-8 bg-gray-800 animate-pulse rounded"></div>
          <div className="w-2/3 h-16 bg-gray-800 animate-pulse rounded"></div>
          <div className="w-1/2 h-24 bg-gray-800 animate-pulse rounded"></div>
          <div className="w-48 h-12 bg-gray-800 animate-pulse rounded"></div>
        </div>
      </div>
    </div>
  );
}