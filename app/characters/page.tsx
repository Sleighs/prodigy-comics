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
import CharacterSpotlight from '@/components/CharacterSpotlight';
import CharacterCard from '@/components/CharacterCard';

export default function CharactersPage() {
  const [sortBy, setSortBy] = useState<'name' | 'faction' | 'tbe' | 'popularity'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

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
      <PageHeader 
        title="Characters"
        backgroundImage="/images/prodigy-banner.png"
        subtitle="Meet the extraordinary individuals of the Prodigy universe"
      />
      {/* <MilitaryHeader 
        title="Characters" 
        backgroundImage="/images/prodigy-banner.png"
        subtitle="Meet the extraordinary individuals of the Prodigy universe"
        classification="CONFIDENTIAL"
        documentId="SUBJECT PROFILES"
        accessLevel="6"
        systemStatus="OPERATIONAL"
      /> */}

      {/* Featured Characters */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center section-title">Featured Characters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {characters.featured.map((character, index) => {
              if (index < 3) {
                return (
                  <CharacterCard 
                    key={character.id}
                    character={character}
                    showRole={false}
                  />
                )
              } else {
                return null;
              }})
            }
          </div>
        </div>
      </section>


      {/* Character Spotlight */}
      <CharacterSpotlight characters={characters.spotlightList} />


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

          {/* Character Grid/List */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sortedCharacters.map((character) => (
              <CharacterCard 
                key={character.id}
                character={character}
              />
            ))}
          </div>
        </div>
      </section>


      {/* Store CTA Section */}
      <AvailableNowSection
        imageSrc="/images/clan-bushido-campaign.png"
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
        className="bg-black "
        contentClassName="text-white"
        imageClassName=""
        backgroundColor=""
        // reverseLayout={true}
      />
    </main>
  );
}