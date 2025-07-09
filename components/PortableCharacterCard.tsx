import Image from "next/image";
import Link from "next/link";
import { Character } from "@/types/Character";

export const PortableCharacterCard = ({ character }: { character: Character }) => {
  return (
    <div key={character.name} className="portable-featured-character-card" onClick={() =>{
      // Open the character's profile in a new tab
      window.open(character.link, "_blank");
    }}>
      <div className="portable-image-container">
        <Image
          src={character.image}
          alt={character.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="portable-content">
        <div className="portable-featured-character-card-header bg-red-dark top-0">
          <h3 className="text-center roboto-bold uppercase">{character.name}</h3>
        </div>
        <p className="portable-featured-character-card-description text-lg text-white mb-4">{character.description}</p>
      </div>
    </div>
  )
}; 