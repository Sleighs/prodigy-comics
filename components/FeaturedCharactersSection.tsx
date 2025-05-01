import Image from "next/image";
import Link from "next/link";
import '@/styles/FeaturedCharactersSection.css';
import { CharacterCard } from "./CharacterCard";

const characters = [
  {
    name: "Genesis",
    description: "Her arrival has had consequences for all who cross her path.",
    image: "/images/characters/genesis2.png",
    link: "/characters/genesis"
  },
  {
    name: "VERDICT",
    description: "NOTHING escapes the judgement of the red behemoth!!",
    image: "/images/verdict-poster.png",
    link: "/characters/verdict"
  },
  // {
  //   name: "G.U.N. Sight",
  //   description: "Commander of the CGS North American Division",
  //   image: "/images/gunsight-poster.png",
  //   link: "/characters/gun-sight"
  // },
  {
    name: "Arrowhead",
    description: "A brutal warrior with self-proclaimed unlocked ancestral powers.",
    image: "/images/characters/arrowhead.png",
    link: "/characters/arrowhead"
  },

  {
    name: "Black Jack",
    description: "A ruthless executive managing most dangerous operatives.",
    image: "/images/characters/blackjack.png",
    link: "/characters/black-jack"
  },
  {
    name: "Treagor",
    description: "A formidable warrior with enhanced physical abilities and combat expertise.",
    image: "/images/characters/treagor.png",
    link: "/characters/treagor"
  },
  {
    name: "Impulse",
    description: "As Ember's gestalt, her fire abilities make her unpredictably dangerous.",
    image: "/images/characters/impulse.png",
    link: "/characters/impulse"
  },
  {
    name: "Surge",
    description: "A mysterious figure with the ability to manipulate electrical energy and technology.",
    image: "/images/characters/surge3.png",
    link: "/characters/surge"
  },
  {
    name: "Allegra Black",
    description: "A skilled operative with a mysterious past and exceptional combat abilities.",
    image: "/images/characters/allegra-black.png",
    link: "/characters/allegra-black"
  },
  {
    name: "Sight",
    description: "A mysterious figure with enhanced perception and tactical abilities.",
    image: "/images/characters/sight.png",
    link: "/characters/sight"
  },
  {
    name: "Nicodemus",
    description: "Master of Clan Bushido",
    image: "/images/characters/nicodemus.png",
    link: "/characters/nicodemus"
  },
  {
    name: "The Great Wall",
    description: "A massive warrior with impenetrable defense and overwhelming strength.",
    image: "/images/characters/the-great-wall.png",
    link: "/characters/the-great-wall"
  },
  {
    name: "Shimmer",
    description: "A mysterious figure with the ability to manipulate light and create illusions.",
    image: "/images/characters/shimmer5.png",
    link: "/characters/shimmer"
  },
  {
    name: "Evil Gunn",
    description: "A feared bounty killer. His methods are as brutal as they are effective.",
    image: "/images/characters/evil-gunn.png",
    link: "/characters/evil-gunn"
  },
  {
    name: "Lightning Rod",
    description: "A powerful figure with the ability to manipulate electrical energy and weather.",
    image: "/images/characters/lightning-rod.png",
    link: "/characters/lightning-rod"
  },
  {
    name: "Checkmate",
    description: "A strategic mastermind with enhanced intelligence and tactical abilities.",
    image: "/images/characters/checkmate4.png",
    link: "/characters/checkmate"
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