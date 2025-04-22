import Image from 'next/image';
import Link from 'next/link';
import { lore } from '@/data/lore';

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70" />
          {/* <Image
            src="/images/story-hero.jpg"
            alt="Prodigy Story"
            fill
            className="object-cover"
            priority
          /> */}
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            PRODIGY: New Age
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            The story of power, evolution, and the rise of T.B.E.'s
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">The World of PRODIGY</h2>
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg">
              In the wake of a groundbreaking discovery - the existence of T.B.E.'s (Terrestrial Biological Entities) - the world's power structure has been forever altered. The revelation began with T.B.E. 16 on Russian soil, triggering an international crisis that would reshape global alliances and military strategies.
            </p>
            
            <p className="text-lg">
              Coalition governments, led by the United States, the Soviet Union, the British Empire, and Israel, launched secret programs to identify and develop their own enhanced individuals. Their mission: to counter the emerging T.B.E. threat with equally powerful forces.
            </p>

            <p className="text-lg">
              At the heart of this new arms race lies the GODSTRAND - a mysterious genetic sequence that holds the key to extraordinary human potential. As different factions vie for control and understanding of this power, the line between human and superhuman becomes increasingly blurred.
            </p>

            <div className="flex justify-center pt-6">
              <Link 
                href="https://www.youtube.com/watch?v=E7jsNUBGatQ"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full text-lg font-semibold transition-colors"
              >
                Watch the Official Trailer
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Factions Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">The Major Factions</h2>
          
          <div className="space-y-16">
            {/* CYBERTECH */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-96">
                <Image
                  src="/images/cybertech-logo.png"
                  alt="CYBERTECH Global Security Solutions"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">CYBERTECH - Global Security Solutions</h3>
                <p className="text-lg mb-4">
                  A shadow corporation whose existence is barely known, even to world leaders. With nearly limitless funding and a partial genetic map of "The GODSTRAND," they operate with the blessing of coalition governments to create enhanced operatives from the world's deadliest fighting forces.
                </p>
                <p className="text-blue-400 italic">"Money... Power... Fear..."</p>
                <Link 
                  href="https://www.youtube.com/watch?v=RJMAyMY1sGM"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mt-4"
                >
                  Watch Faction Trailer
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* WOLFPAK */}
            <div className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
              <div className="relative h-64 md:h-96">
                <Image
                  src="/images/wolfpak-logo.png"
                  alt="WOLFPAK"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">WOLFPAK</h3>
                <p className="text-lg mb-4">
                  Born from a desperate joint task force of the KGB, CIA, and Mossad, WOLFPAK emerged as the response to the T.B.E. threat. Those who survived the augmentations became the most dangerous men on the planet, with questionable allegiance even to their governments.
                </p>
                <p className="text-blue-400 italic">"We are no longer men."</p>
                <Link 
                  href="https://www.youtube.com/watch?v=lR5oC7eqi2M"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mt-4"
                >
                  Watch Faction Trailer
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Clan Bushido */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 md:h-96">
                <Image
                  src="/images/clan-bushido-promo.png"
                  alt="The Clan Bushido"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">The Clan Bushido</h3>
                <p className="text-lg mb-4">
                  An ancient clan existing since the dawn of the samurai, operating independently to protect Japan's culture. With the emergence of T.B.E.s, they face their greatest challenge yet in defending their homeland.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Integrity", "Respect", "Heroic & Courage", "Honor", "Compassion", "Honesty & Sincerity", "Duty & Loyalty"].map((virtue) => (
                    <span key={virtue} className="text-sm bg-gray-700 px-3 py-1 rounded-full">
                      {virtue}
                    </span>
                  ))}
                </div>
                <Link 
                  href="https://www.youtube.com/watch?v=WspFlodCY9Y"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mt-4"
                >
                  Watch Faction Trailer
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* D.O.A. */}
            <div className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
              <div className="relative h-64 md:h-96">
                <Image
                  src="/images/doa-emblem.png"
                  alt="D.O.A."
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">D.O.A.</h3>
                <p className="text-lg mb-4">
                  Formed from the remnants of failed hero programs, D.O.A. consists of augmented individuals who survived but were forever changed. They now operate as mercenaries, selling their services to the highest bidder on the world stage.
                </p>
                <p className="text-blue-400 italic">{`"Getting men to work for me is the easy part. They're like dogs, they do as they are told too." — Sammantha Halsey`}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Concepts Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">The Lore</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">The GODSTRAND</h3>
              <p className="text-gray-300">
                A previously unknown piece of human DNA that enables extraordinary abilities. Its discovery has changed our understanding of human potential.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">T.B.E.'s</h3>
              <p className="text-gray-300">
                Terrestrial Biological Entities - humans who have evolved beyond normal capabilities through exposure to the GODSTRAND.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">The World Council</h3>
              <p className="text-gray-300">
                A coalition of nations working together to understand and manage the implications of human evolution and the GODSTRAND phenomenon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lore Details Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">The World of PRODIGY</h2>
          
          {/* Locations */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8">Key Locations</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {lore.locations.map((location) => (
                <div key={location.id} className="bg-gray-800/50 p-6 rounded-lg group hover:bg-gray-800 transition-colors">
                  <h4 className="text-2xl font-bold mb-3">{location.name}</h4>
                  <p className="text-gray-300 mb-4">{location.description}</p>
                  <p className="text-blue-400 text-sm mb-4">{location.significance}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {location.factions.map((faction) => (
                      <span key={faction} className="text-sm bg-gray-700 px-3 py-1 rounded-full">
                        {faction}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={`/story/wiki/${location.id}`}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Events */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8">Major Events</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {lore.events.map((event) => (
                <div key={event.id} className="bg-gray-800/50 p-6 rounded-lg group hover:bg-gray-800 transition-colors">
                  <h4 className="text-2xl font-bold mb-3">{event.name}</h4>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  {event.outcomes && (
                    <div className="mb-4">
                      <h5 className="text-lg font-semibold mb-2">Outcomes:</h5>
                      <ul className="list-disc list-inside text-gray-300">
                        {event.outcomes.map((outcome, index) => (
                          <li key={index}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <Link 
                    href={`/story/wiki/${event.id}`}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Artifacts */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8">Artifacts</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {lore.artifacts.map((artifact) => (
                <div key={artifact.id} className="bg-gray-800/50 p-6 rounded-lg group hover:bg-gray-800 transition-colors">
                  <h4 className="text-2xl font-bold mb-3">{artifact.name}</h4>
                  <p className="text-gray-300 mb-4">{artifact.description}</p>
                  <p className="text-blue-400 text-sm mb-4">Controlled by: {artifact.controlledBy}</p>
                  <Link 
                    href={`/story/wiki/${artifact.id}`}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Organizations */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Organizations</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {lore.organizations.map((org) => (
                <div key={org.id} className="bg-gray-800/50 p-6 rounded-lg group hover:bg-gray-800 transition-colors">
                  <h4 className="text-2xl font-bold mb-3">{org.name}</h4>
                  <p className="text-gray-300 mb-4">{org.description}</p>
                  {org.members && (
                    <div className="mb-4">
                      <h5 className="text-lg font-semibold mb-2">Members:</h5>
                      <div className="flex flex-wrap gap-2">
                        {org.members.map((member) => (
                          <span key={member} className="text-sm bg-gray-700 px-3 py-1 rounded-full">
                            {member}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <Link 
                    href={`/story/wiki/${org.id}`}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Ready to Dive Deeper?</h2>
          <p className="text-xl mb-8">
            Explore the characters, their abilities, and the world they inhabit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/characters"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition-colors"
            >
              Meet the Characters
            </Link>
            <Link 
              href="/world"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full text-lg font-semibold transition-colors"
            >
              Explore the World
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}