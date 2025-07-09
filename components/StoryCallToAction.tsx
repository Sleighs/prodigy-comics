'use client';

import Link from 'next/link';

interface StoryCallToActionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  className?: string;
}

export default function StoryCallToAction({
  title = "Ready to Dive Deeper?",
  subtitle = "Explore the characters, their abilities, and the world they inhabit.",
  primaryButtonText = "Meet the Characters",
  primaryButtonHref = "/characters",
  secondaryButtonText = "Explore the World",
  secondaryButtonHref = "/world",
  className = ""
}: StoryCallToActionProps) {
  return (
    <section className={`py-16 text-center bg-black/90 border-t border-red-900/50 relative overflow-hidden ${className}`}>
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Animated scanline effect */}
      <div className="absolute inset-0 scanline"></div>
      
      {/* Modern gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
      <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-red-500/30 to-transparent"></div>
      <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-red-500/30 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4 uppercase">
            {title}
          </h2>
          <p className="text-xl mb-8 text-filesystemYellow font-mono">
            {subtitle}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link 
            href={primaryButtonHref}
            className="group relative px-8 py-4 bg-red-900/50 hover:bg-red-800/50 rounded border border-red-700/50 hover:text-red-300 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
          >
            <span className="relative z-10">{primaryButtonText}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-red-800/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          <Link 
            href={secondaryButtonHref}
            className="group relative px-8 py-4 bg-black/50 hover:bg-gray-900/50 rounded border border-red-900/50 text-white hover:text-red-300 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
          >
            <span className="relative z-10">{secondaryButtonText}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 to-red-900/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
        
      </div>
    </section>
  );
} 