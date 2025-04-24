'use client'
import Link from 'next/link';
import { useState } from 'react';
import { lore } from '@/data/lore'; 
import { characters } from '@/data/characters';

/* 

Copy

## T.B.E. Sightings: The Threat is Real
*Terrestrial Biological Entities*—beings of unimaginable power—are among us. From the ashes of Stalingrad to the neon streets of Japan, their sightings spark fear and chaos. Explore classified reports of T.B.E. activity and uncover the truth behind the *GODSTRAND*.

**T.B.E. 16 Incident**  
*Location*: Stalingrad  
*Status*: Contained (WOLFPAK Deployed)  
A devastating encounter with T.B.E. 16 left Stalingrad in ruins. CYBERTECH and WOLFPAK operatives were dispatched, but the cost was catastrophic. *“We are no longer men.”* —WOLFPAK Operative

## The T.B.E. 16 Catastrophe
*Stalingrad, Date Classified*  
It began with a tremor, then a scream that shattered steel. T.B.E. 16 emerged, a force of raw destruction, leveling Stalingrad’s core. The Soviet Union’s defenses crumbled, and the world watched in horror. CYBERTECH deployed G.U.N. Sight, but it was WOLFPAK’s brutal intervention that contained the threat—at a cost. This was the spark that birthed the *Counter Measures Team*.  
*“A blind faith move made in desperation rewards no man.”* —WOLFPAK Leader, Rune

**G.U.N. Sight**  
*Commander, CYBERTECH*  
Leading CYBERTECH’s North American Division, G.U.N. Sight was on the front lines of the T.B.E. 16 Incident. His tactical brilliance saved countless lives, but the scars of Stalingrad linger.  
*T.B.E. Num: 77*

## Join the Fight Against T.B.E.s
The world is changing, and the T.B.E. threat grows. Sign up for classified updates, sneak peeks of [Writer’s Name]’s three upcoming books, and exclusive *PRODIGY: New Age* content.  
*“Knowledge is the only true currency in this new world.”* —Proteus
*/


const TBESightingsHeader: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-red-900 py-12 text-center text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 comic-font">T.B.E. Sightings: The Threat is Real</h2>
      <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
        <em>Terrestrial Biological Entities</em>—beings of unimaginable power—are among us. From the ashes of Stalingrad to the neon streets of Japan, their sightings spark fear and chaos. Explore classified reports of T.B.E. activity and uncover the truth behind the <em>GODSTRAND</em>.
      </p>
      <Link href="#sightings-timeline">
        View Latest Sightings
      </Link>
    </section>
  );
};


interface Sighting {
  id: string;
  name: string;
  location: string;
  date: string;
  description: string;
  factions: string[];
  significance: string;
}

const TBESightingsTimeline: React.FC = () => {
  const [selectedFaction, setSelectedFaction] = useState<string>('All');
  const sightings: Sighting[] = lore.events.map(eventItem => ({
    id: eventItem.id,
    name: eventItem.name,
    location: lore.locations.find(loc => loc.id === eventItem?.location?.toLowerCase())?.name || 'Unknown',
    date: 'Unknown',
    description: eventItem.description,
    factions: lore.locations.find(loc => loc.id === eventItem?.location?.toLowerCase())?.factions || [],
    significance: eventItem.significance || ''
  }));

  const filteredSightings = selectedFaction === 'All'
    ? sightings
    : sightings.filter(sighting => sighting.factions.includes(selectedFaction));

  return (
    <section id="sightings-timeline" className="py-12 bg-gray-800">
      <h3 className="text-3xl font-bold text-center text-white mb-6 comic-font">T.B.E. Incident Reports</h3>
      <div className="flex justify-center mb-6">
        <select
          className="bg-gray-900 text-white p-2 rounded"
          onChange={(e) => setSelectedFaction(e.target.value)}
        >
          <option value="All">All Factions</option>
          {lore.factions.map(faction => (
            <option key={faction.id} value={faction.name}>{faction.name}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredSightings.map(sighting => (
          <div
            key={sighting.id}
            className="bg-gray-900 text-white p-6 rounded-lg border-4 border-black shadow-lg hover:bg-gray-700 transition"
          >
            <h4 className="text-xl font-bold comic-font">{sighting.name}</h4>
            <p><strong>Location:</strong> {sighting.location}</p>
            <p><strong>Status:</strong> {sighting.factions.includes('WOLFPAK') ? 'Contained' : 'Active'}</p>
            <p className="mt-2">{sighting.description}</p>
            <p className="italic mt-2">“{sighting.significance}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};


const FeaturedSighting: React.FC = () => {
  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-6">
          <h3 className="text-3xl font-bold comic-font mb-4">The T.B.E. 16 Catastrophe</h3>
          <p className="mb-2"><strong>Stalingrad, Date Classified</strong></p>
          <p className="mb-4">
            It began with a tremor, then a scream that shattered steel. T.B.E. 16 emerged, a force of raw destruction, leveling Stalingrad’s core. The Soviet Union’s defenses crumbled, and the world watched in horror. CYBERTECH deployed G.U.N. Sight, but it was WOLFPAK’s brutal intervention that contained the threat—at a cost. This was the spark that birthed the <em>Counter Measures Team</em>.
          </p>
          <p className="italic mb-4">“A blind faith move made in desperation rewards no man.” —WOLFPAK Leader, Rune</p>
          <Link href="https://www.youtube.com/watch?v=lR5oC7eqi2M">
            Watch the WOLFPAK Trailer
          </Link>
        </div>
        <div className="md:w-1/2">
          <img src="/images/cybertech-1.jpg" alt="T.B.E. 16 Incident" className="w-full rounded-lg border-4 border-black" />
        </div>
      </div>
    </section>
  );
};


const TBECharacterConnections: React.FC = () => {
  const featuredCharacters = characters.featured.filter(char =>
    ['G.U.N. Sight', 'Genesis', 'Arrowhead'].includes(char.name)
  );

  return (
    <section className="py-12 bg-gray-800 text-white">
      <h3 className="text-3xl font-bold text-center comic-font mb-6">Heroes of the T.B.E. Crisis</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {featuredCharacters.map(char => (
          <div
            key={char.id}
            className="bg-gray-900 p-6 rounded-lg border-4 border-black shadow-lg hover:bg-gray-700 transition"
          >
            <img src={char.image} alt={char.name} className="w-full h-48 object-cover rounded mb-4" />
            <h4 className="text-xl font-bold comic-font">{char.name}</h4>
            <p className="italic">{char.alias}, {char.category}</p>
            <p className="mt-2">{char.description}</p>
            <p className="mt-2"><strong>T.B.E. Num:</strong> {char.TBENum}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link href="/characters">
          Meet the Heroes
        </Link>
      </div>
    </section>
  );
};



const TBECallToAction: React.FC = () => {
  return (
    <section className="py-12 bg-red-600 text-white text-center">
      <h3 className="text-3xl font-bold comic-font mb-4">Join the Fight Against T.B.E.s</h3>
      <p className="max-w-3xl mx-auto mb-6">
        The world is changing, and the T.B.E. threat grows. Sign up for classified updates, sneak peeks of [Writer’s Name]’s three upcoming books, and exclusive <em>PRODIGY: New Age</em> content.
      </p>
      <p className="italic mb-6">“Knowledge is the only true currency in this new world.” —Proteus</p>
      <form className="flex justify-center mb-6">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded-l text-black"
        />
        <button type="submit" className="bg-gray-900 p-2 rounded-r">Subscribe</button>
      </form>
      <div className="flex justify-center gap-4">
        <a href="https://x.com/yourprofile" className="text-2xl">X</a>
        <a href="https://instagram.com/yourprofile" className="text-2xl">Instagram</a>
      </div>
    </section>
  );
};




export default function TBESightings() {
  return (
    <div className="bg-steel-dark text-white py-12">
      <TBESightingsHeader />
      <TBESightingsTimeline />
      <FeaturedSighting />
      <TBECharacterConnections />
      <TBECallToAction />
    </div>
  );
}