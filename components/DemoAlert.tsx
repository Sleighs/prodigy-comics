'use client';

import { useState } from 'react';

export default function DemoAlert() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed top-16 w-full bg-yellow-500 text-black py-2 px-4 z-50 cursor-pointer"
      onClick={() => setIsVisible(false)}
    >
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-sm font-medium">
          Demo website. Some features may be limited or simulated.
        </p>
      </div>
    </div>
  );
} 