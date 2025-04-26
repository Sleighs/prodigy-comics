'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { characters } from '@/data/characters';

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
  const normalizedAlias = normalizeString(params.alias as string);
  const character = characters.list.find(char => 
    normalizeString(char.alias) === normalizedAlias
  );

  if (!character) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-16">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-8">Character Not Found</h1>
          <p className="text-lg mb-4">We couldn't find a character matching: {params.alias}</p>
          <Link href="/characters" className="text-blue-400 hover:text-blue-300">
            ← Back to Characters
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70" />
          <Image
            src={character.image}
            alt={character.alias}
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{character.alias}</h1>
          <p className="text-2xl text-blue-400">{character.role}</p>
        </div>
      </section>

      {/* Character Details */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">About</h2>
              {character.description && (
                <p className="text-lg mb-8">{character.description}</p>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Faction</h3>
                <p className="text-lg text-blue-400">{character.category}</p>
              </div>

              {character.abilities && character.abilities.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Abilities</h3>
                  <div className="flex flex-wrap gap-2">
                    {character.abilities.map((ability, index) => (
                      <span key={index} className="bg-gray-800 rounded-full px-4 py-2">
                        {ability}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {character.TBENum && (
                <div>
                  <h3 className="text-xl font-bold mb-4">T.B.E. Number</h3>
                  <p className="text-lg">{character.TBENum}</p>
                </div>
              )}
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden">
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
              className="inline-flex items-center text-blue-400 hover:text-blue-300"
            >
              ← Back to Characters
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 