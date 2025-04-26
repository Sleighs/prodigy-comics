import Image from "next/image";
import Link from "next/link";
import '@/styles/FeaturedCharactersSection.css';
import { CharacterCard } from "./CharacterCard";

const characters = [
  {
    name: "Genesis",
    description: "NO ONE understands who or WHAT Genesis is. Her arrival will have consequences for all who cross her path.",
    image: "/images/characters/genesis2.png",
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
    description: "Commander of the North American Division, G.U.N. Sight is a proven leader and a charter member of The World Coalition against T.B.E.'s.",
    image: "/images/gunsight-poster.png",
    link: "/characters/gun-sight"
  },
  {
    name: "Arrowhead",
    description: "A mysterious warrior with unparalleled archery skills. His unlocked ancestral powers and modern precision make him a formidable force.",
    image: "/images/characters/arrowhead.png",
    link: "/characters/arrowhead"
  },
  {
    name: "Nicodemus",
    description: "Master of Clan Bushido, his mastery of ancient martial arts and strategic mind has shaped one of the most feared organizations.",
    image: "/images/characters/nicodemus3.png",
    link: "/characters/nicodemus"
  },
  {
    name: "Black Jack",
    description: "A deadly assassin whose true motives remain hidden. Her precision and ruthlessness make her one of the most dangerous operatives.",
    image: "/images/characters/blackjack.png",
    link: "/characters/black-jack"
  },
  {
    name: "Evil Gunn",
    description: "A feared bounty killer whose reputation precedes him. His methods are as brutal as they are effective.",
    image: "/images/characters/evil-gunn.png",
    link: "/characters/evil-gunn"
  },
  {
    name: "Impulse",
    description: "As Ember's gestalt, her fire abilities make her unpredictably dangerous.",
    image: "/images/characters/impulse.png",
    link: "/characters/impulse"
  }
];

export default function FeaturedCharactersSection() {
  return (
    <section className="featured-characters-section py-20">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center section-title">Featured Characters</h2>
        <div className="featured-characters-cards-grid">
          {characters.map((character) => (
            <CharacterCard key={character.name} character={character} />
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