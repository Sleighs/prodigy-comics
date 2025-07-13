'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { characters } from '@/data/characters';
import CharacterGallery from '@/components/CharacterGallery';
import CharacterAbilities from '@/components/CharacterAbilities';
import CharacterHistory from '@/components/CharacterHistory';
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
  const [showEncrypted, setShowEncrypted] = useState(false);
  const normalizedAlias = normalizeString(params.alias as string);
  const character = characters.list.find(char => 
    normalizeString(char.alias) === normalizedAlias
  );

  useEffect(() => {
    // Scan completes after 2.5 seconds
    const scanTimer = setTimeout(() => {
      setScanComplete(true);
    }, 2500);

    // Show encrypted message after scan completes
    const encryptedTimer = setTimeout(() => {
      setShowEncrypted(true);
    }, 3000);

    return () => {
      clearTimeout(scanTimer);
      clearTimeout(encryptedTimer);
    };
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
        
        {/* Encrypted Message */}
        {showEncrypted && (
          <div className="encrypted-message">
            <span className="encrypted-text">ENCRYPTED</span>
            {/* <span className="encrypted-subtitle">Always a price to pay</span> */}
          </div>
        )}
        
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
          <h1 className="text-5xl md:text-7xl font-bold mb-4 page-title text-white roboto-condensed">{character.alias}</h1>
          <p className="text-2xl text-white">{character.role}</p>
        </div>
      </section>

      {/* Character Details */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto blue-military-section">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-bold mb-6 blue-military-title">About</h2>
              {character.description && (
                <p className="text-lg mb-8 blue-military-description">{character.description}</p>
              )}
              
              {/* Subject Overview */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 blue-military-section-title">Subject Overview</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-400 font-mono">CODENAME</span>
                    <span className="text-blue-200 font-mono">{character.alias}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-400 font-mono">ROLE</span>
                    <span className="text-blue-200 font-mono">{character.role || 'CLASSIFIED'}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-400 font-mono">FACTION</span>
                    <span className="text-blue-200 font-mono">{character.category || 'UNKNOWN'}</span>
                  </div>
                  {character.TBENum && (
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-gray-400 font-mono">T.B.E. NUMBER</span>
                      <span className="text-blue-200 font-mono">{character.TBENum}</span>
                    </div>
                  )}
                </div>
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
            </div>
            <div className="relative h-[500px] overflow-hidden">
              <Image
                src={character.image}
                alt={character.alias}
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Character Abilities */}
          {character.abilities && character.abilities.length > 0 && (
            <CharacterAbilities 
              abilities={character.abilities} 
              characterName={character.alias}
            />
          )}
          
          {/* Character History */}
          <CharacterHistory character={character} />
          
          {/* Character Gallery */}
          {character.gallery && character.gallery.length > 0 && (
            <CharacterGallery 
              images={character.gallery} 
              characterName={character.alias}
            />
          )}
          
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