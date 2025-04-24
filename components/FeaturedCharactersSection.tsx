import Image from "next/image";
import Link from "next/link";
import '@/styles/FeaturedCharactersSection.css';

const characters = [
  {
    name: "Genesis",
    description: "NO ONE understands who or WHAT Genesis is. Her arrival will have consequences for all who cross her path.",
    image: "/images/genesis-campaign.png",
    link: "/characters/genesis"
  },
  {
    name: "VERDICT",
    description: "VERDCT COMETH!! NOTHING escapes the judgement of the red behemoth!!",
    image: "/images/verdict-poster.png",
    link: "/characters/verdict"
  },
  {
    name: "G.U.N. Sight",
    description: "Commander of the North American Division, G.U.N.Sight is a proven leader and a charter member of The World Coalition against T.B.E.'s.",
    image: "/images/gunsight-poster.png",
    link: "/characters/gun-sight"
  }
];

export default function FeaturedCharactersSection() {
  return (
    <section className="py-20 home--characters-section">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center section-title">Featured Characters</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {characters.map((character) => (
            <div key={character.name} className="home--character-card group">
              <div className="image-container">
                <Image
                  src={character.image}
                  alt={character.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="content">
                <h3 className="text-3xl font-bold mb-2 section-subtitle bg-red-dark text-center roboto-condensed-bold uppercase">{character.name}</h3>
                <p className="text-lg text-white mb-4">{character.description}</p>
                <div className="home--character-card-button">
                  <Link 
                    href={character.link} 
                    className="inline-block w-full px-6 py-3 bg-darkgray text-white hover:bg-blood-dark transition-colors duration-300 text-center font-bold"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/characters"
            className="inline-block px-8 py-3 bg-blood hover:bg-blood-dark text-white text-lg font-semibold transition-colors duration-300 shadow-lg shadow-blood/30"
          >
            View All Characters
          </Link>
        </div>
      </div>
    </section>
  );
} 