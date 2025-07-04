import Image from "next/image";
import Link from "next/link";
import { Character } from "@/types/Character";

interface CharacterCardProps {
  character: Character;
  className?: string;
  showRole?: boolean;
}

export default function CharacterCard({ character, className = "", showRole = true }: CharacterCardProps) {
  return (
    <Link 
      href={`/characters/${character.alias}`}
      className={`character-card overflow-hidden ${className}`}
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
            {showRole && <p className="text-blood group-hover:text-white transition-colors duration-300">{character.role || character.name}</p>}
            <p className="text-sm group-hover:text-white transition-colors duration-300">{character.category}</p>
          </div>
          {character.TBENum && (
            <div className="tbe-number">
              <span className="tbe-label group-hover:text-white">TBE</span>
              <span className="tbe-value group-hover:text-white">
                {character.TBENum}
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}