import Image from 'next/image';
import { useState } from 'react';

interface FeaturedSectionProps {
  onImageSelect: (image: { src: string; alt: string }) => void;
}

export default function FeaturedSection({ onImageSelect }: FeaturedSectionProps) {
  return (
    <section className="store--featured-section py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="hidden text-3xl font-bold mb-8 text-center military-title">Featured Items</h2>
        <h2 className="section-header text-3xl roboto-condensed-bold mb-8 border-l-4 border-red-600 pl-4">
          FEATURED COLLECTIONS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 military-grid">
          {/* Stuffed Box */}
          <div className="military-card">
            <div 
              className="relative h-64 cursor-zoom-in military-image-container"
              onClick={() => onImageSelect({ src: "/images/stuffed-box1.png", alt: "PRODIGY New Age STUFFED box" })}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/stuffed-box1.png"
                  alt="PRODIGY New Age STUFFED box"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 military-title">PRODIGY New Age STUFFED box</h3>
              <p className="text-gray-300 mb-4 military-description">The ultimate PRODIGY collection! Get EVERYTHING that this campaign generates for one SUPER low price!!</p>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-2xl font-bold military-price">$250.00</span>
              </div>
              <div className="flex flex-col space-y-4">
                <button className="military-button">
                  Add to Cart
                </button>
                <a
                  href="https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="military-button text-center"
                >
                  View Campaign
                </a>
              </div>
            </div>
          </div>

          {/* Book 0 */}
          <div className="military-card">
            <div 
              className="relative h-64 cursor-zoom-in military-image-container"
              onClick={() => onImageSelect({ src: "/images/book0-preview1.png", alt: "PRODIGY : Hell on Earth Book 0" })}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/book0-preview1.png"
                  alt="PRODIGY : Hell on Earth Book 0"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 military-title">PRODIGY : Hell on Earth Book 0</h3>
              <p className="text-gray-300 mb-4 military-description">Book #0 of the PRODIGY New Age series is now LIVE!!</p>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-2xl font-bold military-price">$28.00</span>
              </div>
              <div className="flex flex-col space-y-4">
                <button className="military-button">
                  Add to Cart
                </button>
                <a
                  href="https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="military-button text-center"
                >
                  View Campaign
                </a>
              </div>
            </div>
          </div>

          {/* Ember Poster */}
          <div className="military-card">
            <div 
              className="relative h-64 cursor-zoom-in military-image-container"
              onClick={() => onImageSelect({ src: "/images/ember-promo.png", alt: "Ember / Sister of fire" })}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/ember-promo.png"
                  alt="Ember / Sister of fire"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 military-title">Ember / Sister of fire</h3>
              <p className="text-gray-300 mb-4 military-description">Ember and Impulse are the sisters of fire. They are GESTALTS to one another. They BOTH possess power and prowess but TOGETHER (as Gestalts) they are extremely powerful.</p>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-2xl font-bold military-price">$25.00</span>
              </div>
              <div className="flex flex-col space-y-4">
                <button className="military-button">
                  Add to Cart
                </button>
                <a
                  href="https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="military-button text-center"
                >
                  View Campaign
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 