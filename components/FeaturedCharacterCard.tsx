import Image from "next/image";
import Link from "next/link";
import { Character } from "@/types/Character";

interface FeaturedCharacterCardProps {
  character: Character;
}

export default function FeaturedCharacterCard({ character }: FeaturedCharacterCardProps) {
  return (
    <Link 
      href={`/characters/${character.alias}`}
      className="home-featured-character-card group"
    >
      <div className="image-container">
        <Image
          src={character.image}
          alt={character.alias}
          fill
          className="object-cover"
        />
      </div>
      <div className="content">
        <div className="home-featured-character-card-header">
          <h3 className="text-xl font-bold roboto-semibold text-white">{character.alias}</h3>
        </div>
        <div className="home-featured-character-card-description">
          <p className="text-sm">{character.description}</p>
        </div>
      </div>
    </Link>
  );
} 