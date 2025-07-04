import Image from "next/image";
import Link from "next/link";
import '@/styles/FeaturedCharactersSection.css';
import CharacterCard from "./CharacterCard";

const characters = [
  {
    id: 1,
    name: "Genesis",
    alias: "Genesis",
    description: "Her arrival has had consequences for all who cross her path.",
    image: "/images/characters/genesis2.png",
    category: "Unaffiliated"
  },
  {
    id: 2,
    name: "VERDICT",
    alias: "VERDICT",
    description: "NOTHING escapes the judgement of the red behemoth!!",
    image: "/images/verdict-poster.png",
    category: "Unaffiliated"
  },
  {
    id: 3,
    name: "Arrowhead",
    alias: "Arrowhead",
    description: "A brutal warrior with self-proclaimed unlocked ancestral powers.",
    image: "/images/characters/arrowhead.png",
    category: "Unaffiliated"
  },
  {
    id: 4,
    name: "Black Jack",
    alias: "Black Jack",
    description: "A ruthless executive managing most dangerous operatives.",
    image: "/images/characters/blackjack.png",
    category: "Unaffiliated"
  },
  {
    id: 5,
    name: "Treagor",
    alias: "Treagor",
    description: "A formidable warrior with enhanced physical abilities and combat expertise.",
    image: "/images/characters/treagor.png",
    category: "Unaffiliated"
  },
  {
    id: 6,
    name: "Impulse",
    alias: "Impulse",
    description: "As Ember's gestalt, her fire abilities make her unpredictably dangerous.",
    image: "/images/characters/impulse.png",
    category: "Unaffiliated"
  },
  {
    id: 7,
    name: "Surge",
    alias: "Surge",
    description: "A mysterious figure with the ability to manipulate electrical energy and technology.",
    image: "/images/characters/surge3.png",
    category: "Unaffiliated"
  },
  {
    id: 8,
    name: "Allegra Black",
    alias: "Allegra Black",
    description: "A skilled operative with a mysterious past and exceptional combat abilities.",
    image: "/images/characters/allegra-black.png",
    category: "Unaffiliated"
  },
  {
    id: 9,
    name: "Sight",
    alias: "Sight",
    description: "A mysterious figure with enhanced perception and tactical abilities.",
    image: "/images/characters/sight.png",
    category: "Unaffiliated"
  },
  {
    id: 10,
    name: "Nicodemus",
    alias: "Nicodemus",
    description: "Master of Clan Bushido",
    image: "/images/characters/nicodemus.png",
    category: "Clan Bushido"
  },
  {
    id: 11,
    name: "The Great Wall",
    alias: "The Great Wall",
    description: "A massive warrior with impenetrable defense and overwhelming strength.",
    image: "/images/characters/the-great-wall.png",
    category: "Unaffiliated"
  },
  {
    id: 12,
    name: "Shimmer",
    alias: "Shimmer",
    description: "A mysterious figure with the ability to manipulate light and create illusions.",
    image: "/images/characters/shimmer5.png",
    category: "Unaffiliated"
  },
  {
    id: 13,
    name: "Evil Gunn",
    alias: "Evil Gunn",
    description: "A feared bounty killer. His methods are as brutal as they are effective.",
    image: "/images/characters/evil-gunn.png",
    category: "Unaffiliated"
  },
  {
    id: 14,
    name: "Lightning Rod",
    alias: "Lightning Rod",
    description: "A powerful figure with the ability to manipulate electrical energy and weather.",
    image: "/images/characters/lightning-rod.png",
    category: "Unaffiliated"
  },
  {
    id: 15,
    name: "Checkmate",
    alias: "Checkmate",
    description: "A strategic mastermind with enhanced intelligence and tactical abilities.",
    image: "/images/characters/checkmate4.png",
    category: "Unaffiliated"
  }
];

export default function FeaturedCharactersSection() {
  return (
    <section className="featured-characters-section">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center section-title">Featured Characters</h2>
        <div className="featured-characters-cards-container">
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