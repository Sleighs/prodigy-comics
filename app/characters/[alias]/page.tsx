'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { characters } from '@/data/characters';
import '../characters.css';

// Helper function to normalize strings for comparison
const normalizeString = (str: string) => {
  // First decode any URL-encoded characters
  const decodedStr = decodeURIComponent(str);
  return decodedStr
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^a-z0-9-]/g, ''); // Remove any special characters
};

export default function CharacterPage() {
  const params = useParams();
  const [scanComplete, setScanComplete] = useState(false);
  const normalizedAlias = normalizeString(params.alias as string);
  const character = characters.list.find(char => 
    normalizeString(char.alias) === normalizedAlias
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setScanComplete(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  if (!character) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-16 character-blue-theme">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-8">Character Not Found</h1>
          <p className="text-lg mb-4">We couldn&apos;t find a character matching: {decodeURIComponent(params.alias as string)}</p>
          <Link href="/characters" className="text-blue-400 hover:text-blue-300">
            ← Back to Characters
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-16 character-blue-theme">
      {/* Hero Section */}
      <section className="character-page-header relative h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-black bg-grid-pattern-blue">
        {/* Enhanced Security Scanner Effect */}
        <div className={`security-scanner security-scanner-blue ${scanComplete ? 'complete' : ''}`}>
          <div className="security-scanline scanline-blue"></div>
          <div className="security-status">SCANNING...</div>
        </div>
        
        <div className="absolute inset-0 z-0">
          <Image
            src={character.image}
            alt={character.alias}
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-black/80 z-10" />
        </div>
        {/* Blue scanline overlay */}
        <div className="absolute inset-0 scanline-blue pointer-events-none z-20" />
        <div className="relative z-40 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 page-title text-blue-400">{character.alias}</h1>
          <p className="text-2xl text-blue-400">{character.role}</p>
        </div>
      </section>

      {/* Character Details */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto blue-military-section">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 blue-military-title">About</h2>
              {character.description && (
                <p className="text-lg mb-8 blue-military-description">{character.description}</p>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 blue-military-section-title">Faction</h3>
                <p className="text-lg blue-military-terminal-text">{character.category}</p>
              </div>
              {character.abilities && character.abilities.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 blue-military-section-title">Abilities</h3>
                  <div className="flex flex-wrap gap-2">
                    {character.abilities.map((ability, index) => (
                      <span key={index} className="blue-military-card rounded-full px-4 py-2 blue-military-terminal-text">
                        {ability}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {character.TBENum && (
                <div>
                  <h3 className="text-xl font-bold mb-4 blue-military-section-title">T.B.E. Number</h3>
                  <p className="text-lg blue-military-terminal-text">{character.TBENum}</p>
                </div>
              )}
            </div>
            <div className="relative h-[500px] overflow-hidden blue-military-card">
              <Image
                src={character.image}
                alt={character.alias}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="mt-12">
            <Link 
              href="/characters" 
              className="inline-flex items-center blue-military-button"
            >
              ← Back to Characters
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 