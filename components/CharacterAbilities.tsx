'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CharacterAbilitiesProps {
  abilities: string[];
  characterName: string;
}

export default function CharacterAbilities({ abilities, characterName }: CharacterAbilitiesProps) {
  const [currentRotation, setCurrentRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  // Ensure we have exactly 6 slots (fill empty slots if needed)
  const paddedAbilities = [...abilities];
  while (paddedAbilities.length < 6) {
    paddedAbilities.push('');
  }

  const handleSpin = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    const newRotation = currentRotation + 360 + Math.random() * 180;
    setCurrentRotation(newRotation);
    
    setTimeout(() => {
      setIsSpinning(false);
    }, 2000);
  };

  const getAbilityIcon = (ability: string) => {
    const abilityLower = ability.toLowerCase();
    
    if (abilityLower.includes('combat') || abilityLower.includes('weapon')) {
      return '/icons/weapons_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
    }
    if (abilityLower.includes('fire') || abilityLower.includes('energy')) {
      return '/icons/bolt_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
    }
    if (abilityLower.includes('speed') || abilityLower.includes('agility')) {
      return '/icons/autorenew_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
    }
    if (abilityLower.includes('stealth') || abilityLower.includes('shadow')) {
      return '/icons/visibility_off_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
    }
    if (abilityLower.includes('tactical') || abilityLower.includes('strategy')) {
      return '/icons/psychology_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
    }
    if (abilityLower.includes('strength') || abilityLower.includes('power')) {
      return '/icons/fitness_center_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
    }
    if (abilityLower.includes('vision') || abilityLower.includes('sight')) {
      return '/icons/visibility_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
    }
    if (abilityLower.includes('leadership') || abilityLower.includes('command')) {
      return '/icons/military_tech_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
    }
    
    // Default icon
    return '/icons/star_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-6 blue-military-section-title">Abilities</h3>
      
      <div className="relative flex justify-center items-center">
        {/* Six-Shooter Cylinder */}
        <div className="relative w-80 h-80 character-abilities-cylinder">
          {/* Cylinder Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full shadow-2xl">
            <div className="absolute inset-2 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full"></div>
          </div>
          
          {/* Bullet Chambers */}
          {paddedAbilities.map((ability, index) => {
            const angle = (index * 60) + currentRotation;
            const radius = 120;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            
            return (
              <div
                key={index}
                className={`absolute w-16 h-16 transition-all duration-1000 ${
                  isSpinning ? 'animate-pulse' : ''
                }`}
                style={{
                  left: `calc(50% + ${x}px - 32px)`,
                  top: `calc(50% + ${y}px - 32px)`,
                  transform: `rotate(${angle}deg)`,
                }}
              >
                {/* Bullet Chamber */}
                <div className={`relative w-full h-full rounded-full character-abilities-chamber ${
                  ability ? 'bg-blue-500/20' : 'bg-gray-700/50'
                } shadow-lg transition-all duration-300 hover:scale-110`}>
                  
                  {/* Bullet Hole */}
                  <div className="absolute inset-2 rounded-full bg-black border border-gray-800">
                    {ability && (
                      <>
                        {/* Ability Icon */}
                        <div className="absolute inset-1 flex items-center justify-center">
                          <Image
                            src={getAbilityIcon(ability)}
                            alt={ability}
                            width={24}
                            height={24}
                            className="w-6 h-6 text-blue-400"
                          />
                        </div>
                        
                        {/* Ability Name */}
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-max">
                          <span className="text-xs text-blue-300 font-mono bg-black/80 px-2 py-1 rounded whitespace-nowrap">
                            {ability}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          
          {/* Center Pin */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full shadow-lg"></div>
          
          {/* Cylinder Details */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-400 rounded-full"></div>
        </div>
        
        {/* Spin Button */}
        <button
          onClick={handleSpin}
          disabled={isSpinning}
          className={`absolute -bottom-16 left-1/2 transform -translate-x-1/2 px-6 py-3 text-white font-mono text-sm rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed character-abilities-spin-button ${
            isSpinning ? 'animate-pulse' : ''
          }`}
        >
          {isSpinning ? 'SPINNING...' : 'SPIN CYLINDER'}
        </button>
      </div>
      
      {/* Abilities List */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {abilities.map((ability, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-blue-500/20 rounded-lg hover:border-blue-400/40 transition-all duration-300"
          >
            <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
              <Image
                src={getAbilityIcon(ability)}
                alt={ability}
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </div>
            <span className="text-blue-200 font-mono text-sm">{ability}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 