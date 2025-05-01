'use client'

import Image from 'next/image';
import Link from 'next/link';
import { 
  useState
} from 'react';
import { characters } from '@/data/characters';
import PageHeader from '@/components/PageHeader';
import './characters.css';
import MilitaryHeader from '@/components/MilitaryHeader';
import AvailableNowSection from '@/components/AvailableNowSection';

export default function CharactersPage() {
  const [sortBy, setSortBy] = useState<'name' | 'faction' | 'tbe' | 'popularity'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentSpotlightIndex, setCurrentSpotlightIndex] = useState(Math.floor(Math.random() * characters.spotlightList.length));

  // Rotate spotlight character every 10 seconds

  // Get current spotlight character
  const currentSpotlight = characters.spotlightList[currentSpotlightIndex];

  // Get unique factions
  // const factions = Array.from(new Set(characters.list.map(char => char.category)));

  // Sort characters based on current sort settings
  const sortedCharacters = [...characters.list].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return sortOrder === 'asc' 
          ? a.alias.localeCompare(b.alias)
          : b.alias.localeCompare(a.alias);
      
      case 'faction':
        // Sort by faction, then by name within each faction
        const factionCompare = a.category.localeCompare(b.category);
        if (factionCompare === 0) {
          return a.alias.localeCompare(b.alias);
        }
        return sortOrder === 'asc' ? factionCompare : -factionCompare;
      
      case 'tbe':
        // Sort by TBE number, handling empty strings and non-numeric values
        const tbeA = a.TBENum || '999';
        const tbeB = b.TBENum || '999';
        return sortOrder === 'asc' 
          ? tbeA.localeCompare(tbeB, undefined, { numeric: true })
          : tbeB.localeCompare(tbeA, undefined, { numeric: true });
      
      case 'popularity':
        // For future use - currently sorts by name as fallback
        return sortOrder === 'asc'
          ? a.alias.localeCompare(b.alias)
          : b.alias.localeCompare(a.alias);
      
      default:
        return 0;
    }
  });

  return (
    <main className="min-h-screen bg-gradient-dark text-white pt-16">
      {/* <PageHeader 
        title="Characters"
        backgroundImage="/images/prodigy-banner.png"
        subtitle="Meet the extraordinary individuals of the Prodigy universe"
      /> */}
      <MilitaryHeader 
        title="Characters" 
        backgroundImage="/images/prodigy-banner.png"
        subtitle="Meet the extraordinary individuals of the Prodigy universe"
        classification="CONFIDENTIAL"
        documentId="SUBJECT PROFILES"
        accessLevel="6"
        systemStatus="OPERATIONAL"
      />

      {/* Featured Characters */}
      <section className="py-20 featured-section">
        <div className="featured-bg"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center section-title">Featured Characters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {characters.featured.map((character, index) => {
              if (index < 3) {
                return (
                <div key={character.id} className="characters--featured-characters-card backdrop-blur-sm overflow-hidden hover:transform transition-all duration-300 shadow-lg shadow-blood/10">
                  <div className= "characters--featured-characters-card-image-container relative h-64 group">
                    <div className="absolute inset-0 bg-blood opacity-0 group-hover:opacity-15 transition-opacity duration-300"></div>
                    <Image
                      src={character.image}
                      alt={character.name}
                      fill
                      className="characters--featured-characters-card-image object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 roboto-bold">{character.name}</h3>
                    <p className="text-blood mb-2">{character.alias}</p>
                    <p className="text-muted mb-4">{character.description}</p>
                    <div className="space-y-2">
                      {character.abilities.map((ability, index) => (
                        <span key={index} className="inline-block bg-steel-dark rounded-full px-3 py-1 text-sm mr-2 mb-2 shadow-md shadow-blood/5">
                          {ability}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="characters--featured-characters-card-button p-4 text-center">
                    <Link 
                      href={`/characters/${character.alias}`} 
                      className="inline-block w-full px-6 py-3 bg-steel-dark hover:bg-blood text-white bg-red-light transition-colors duration-300 shadow-lg shadow-blood/30 roboto-condensed-bold"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
                )
              } else {
                return null;
              }})
            }
          </div>
        </div>
      </section>


      {/* Character Spotlight */}
      <section className="py-20 spotlight-section">
        <div className="spotlight-bg"></div>
        <div className="spotlight-content">
          <div className="spotlight-image-container">
            <Image
              src={currentSpotlight.image}
              alt={currentSpotlight.name}
              fill
              className="spotlight-image object-cover"
            />
          </div>
          <div className="spotlight-info">
            <div className="spotlight-info-content">
              <h3 className="text-4xl font-bold mb-2 roboto-condensed-bold">{currentSpotlight.name}</h3>
              <p className="text-2xl text-gold-highlight mb-4">{currentSpotlight.alias}</p>
              <div className="mb-6">
                <h4 className="text-xl font-bold mb-3 roboto-condensed">Abilities</h4>
                <div className="flex flex-wrap gap-2">
                  {currentSpotlight.abilities.map((ability, index) => (
                    <span key={index} className="bg-steel-dark rounded-full px-4 py-2 text-gold-highlight border border-ash/20">
                      {ability}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-lg text-muted">{currentSpotlight.story}</p>
            </div>
            <div className="mt-auto">
              <Link 
                href={`/characters/${currentSpotlight.alias}`} 
                className="spotlight-button"
              >
                View Full Profile
              </Link>
              <p className="spotlight-description">
                {currentSpotlight.description}
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Character List */}
      <section className="character-list py-20 relative overflow-hidden">
        <div className="character-list-bg"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center section-title">Character List</h2>
          
          {/* Sort Controls */}
          <div className="sort-controls roboto">
            <div className="flex items-center gap-4">
              <label className="text-lg ">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'faction' | 'tbe' | 'popularity')}
                className="bg-steel-dark text-white px-4 py-2 shadow-lg shadow-blood/10 focus:outline-none focus:ring-2 focus:ring-blood"
              >
                <option value="name">Name</option>
                <option value="faction">Faction</option>
                <option value="tbe">TBE Number</option>
                <option value="popularity" disabled={true}>Popularity</option>
              </select>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
                className="sort-button"
              >
                <span className="text-gold">{sortOrder === 'asc' ? '↑' : '↓'}</span>
                <span>{sortOrder === 'asc' ? 'Ascending' : 'Descending'}</span>
              </button>
            </div>
          </div>

          {/* Character Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sortedCharacters.map((character) => (
              <Link 
                key={character.id}
                href={`/characters/${character.alias}`}
                className="character-card overflow-hidden"
              >
                <div className="character-card--image-container relative h-48 w-full group">
                  <div className="absolute inset-0 bg-blood opacity-0 group-hover:opacity-15 transition-opacity duration-300"></div>
                  <Image
                    src={character.image}
                    alt={character.alias}
                    fill
                    className="character-card--image object-cover"
                  />
                </div>
                <div className="p-4 transition-colors duration-300 group-hover:bg-[#EC1D24]">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold roboto-semibold">{character.alias}</h3>
                      <p className="text-blood group-hover:text-white transition-colors duration-300">{character.role}</p>
                      <p className="text-sm group-hover:text-white transition-colors duration-300">{character.category}</p>
                    </div>
                    {character.TBENum && (
                      <div className="tbe-number">
                        <span className="tbe-label group-hover:text-white">TBE</span>
                        <span className="tbe-value group-hover:text-white ">
                          {character.TBENum}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* Store CTA Section */}
      <AvailableNowSection
        imageSrc="/images/cybertech-logo.png"
        title="Collect Your Favorite Characters"
        subtitle="EXCLUSIVE MERCHANDISE"
        description="Discover exclusive character merchandise, including limited edition action figures, apparel, and collectibles. Each piece is crafted with premium quality and attention to detail."
        primaryButton={{
          text: "Shop Now",
          link: "/store",
          isExternal: false
        }}
        secondaryButton={{
          text: "View Character Collection",
          link: "/store/characters"
        }}
        badge="NEW RELEASES"
        slantDirection="right"
        className="bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-black/40"
        contentClassName="text-white"
        imageClassName="opacity-90"
        // reverseLayout={true}
      />
    </main>
  );
}