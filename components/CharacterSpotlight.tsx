'use client'

import Image from 'next/image';
import Link from 'next/link';
import { 
  useState,
  useEffect
} from 'react';

interface Character {
  id: number;
  name: string;
  alias: string;
  image: string;
  description: string;
  abilities: string[];
  story: string;
  TBENum?: string;
  popularity: number;
}

interface CharacterSpotlightProps {
  characters: Character[];
  autoRotateInterval?: number; // in milliseconds
  transitionDuration?: number; // in milliseconds
}

/**
 * CharacterSpotlight Component
 * 
 * A carousel component that showcases featured characters with auto-rotation,
 * manual navigation, and smooth transitions.
 * 
 * @example
 * ```tsx
 * import CharacterSpotlight from '@/components/CharacterSpotlight';
 * import { characters } from '@/data/characters';
 * 
 * function MyPage() {
 *   return (
 *     <div>
 *       <h1>Featured Characters</h1>
 *       <CharacterSpotlight 
 *         characters={characters.spotlightList}
 *         autoRotateInterval={10000} // 10 seconds
 *         transitionDuration={500}   // 500ms
 *       />
 *     </div>
 *   );
 * }
 * ```
 * 
 * @param characters - Array of character objects to display in the spotlight
 * @param autoRotateInterval - Time in milliseconds between auto-rotations (default: 8000)
 * @param transitionDuration - Duration of transition animations in milliseconds (default: 600)
 */
export default function CharacterSpotlight({ 
  characters, 
  autoRotateInterval = 8000,
  transitionDuration = 600 
}: CharacterSpotlightProps) {
  console.log('CharacterSpotlight characters:', characters);
  const [currentSpotlightIndex, setCurrentSpotlightIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-rotate spotlight characters
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setCurrentSpotlightIndex((prev) => (prev + 1) % characters.length);
      }
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [isTransitioning, characters.length, autoRotateInterval]);

  // Handle manual navigation
  const goToNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSpotlightIndex((prev) => (prev + 1) % characters.length);
      setTimeout(() => setIsTransitioning(false), transitionDuration);
    }
  };

  const goToPrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSpotlightIndex((prev) => 
        prev === 0 ? characters.length - 1 : prev - 1
      );
      setTimeout(() => setIsTransitioning(false), transitionDuration);
    }
  };

  const goToSlide = (index: number) => {
    if (!isTransitioning && index !== currentSpotlightIndex) {
      setIsTransitioning(true);
      setCurrentSpotlightIndex(index);
      setTimeout(() => setIsTransitioning(false), transitionDuration);
    }
  };

  return (
    <section className="spotlight-section">
      <div className="spotlight-bg"></div>
      <div className="spotlight-content">
        {/* Navigation Arrows */}
        <button 
          onClick={goToPrev}
          className="spotlight-nav-arrow prev"
          aria-label="Previous character"
        >
          ‹
        </button>
        <button 
          onClick={goToNext}
          className="spotlight-nav-arrow next"
          aria-label="Next character"
        >
          ›
        </button>

        {/* Carousel Slides */}
        {characters.map((character, index) => {
          const isActive = index === currentSpotlightIndex;
          const isPrev = index === (currentSpotlightIndex - 1 + characters.length) % characters.length;
          const isNext = index === (currentSpotlightIndex + 1) % characters.length;
          
          let slideClass = 'spotlight-slide';
          if (isActive) slideClass += ' active';
          else if (isPrev) slideClass += ' prev';
          else if (isNext) slideClass += ' next';
          else slideClass += ' hidden';

          return (
            <div key={character.id} className={slideClass}>
              <div className="spotlight-carousel-container">
                {/* Left Half - Image */}
                <div className="spotlight-image-half">
                  <div className="spotlight-image-container">
                    <Image
                      src={character.image}
                      alt={character.name}
                      fill
                      className="spotlight-image object-cover"
                    />
                  </div>
                </div>
                
                {/* Right Half - Description */}
                <div className="spotlight-content-half">
                  <div className="spotlight-info">
                    <div className="spotlight-info-content">
                      <h3 className="text-4xl font-bold mb-2 roboto-condensed-bold">{character.alias}</h3>
                      <p className="text-2xl text-gold-highlight mb-4">{character.name}</p>
                      <p className="text-sm text-gray-400">Debug: name="{character.name}", alias="{character.alias}"</p>
                      <div className="mb-6">
                        <h4 className="text-xl font-bold mb-3 roboto-condensed">Abilities</h4>
                        <div className="flex flex-wrap gap-2">
                          {character.abilities.map((ability, abilityIndex) => (
                            <span key={abilityIndex} className="bg-steel-dark rounded-full px-4 py-2 text-gold-highlight border border-ash/20 hover:border-blood/50 hover:bg-steel transition-all duration-300 cursor-default">
                              {ability}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="spotlight-description">{character.story}</p>
                    </div>
                    <div className="mt-auto">
                      <Link 
                        href={`/characters/${character.alias}`} 
                        className="spotlight-button"
                      >
                        View Full Profile
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Navigation Dots */}
        <div className="spotlight-nav">
          {characters.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`spotlight-nav-dot ${index === currentSpotlightIndex ? 'active' : ''}`}
              aria-label={`Go to character ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 