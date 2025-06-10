'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import HaloScene from './HaloScene';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: "Commander Sarah Chen",
    role: "Lead Writer & Creative Director",
    bio: "A visionary storyteller with a background in military science fiction. Sarah brings a unique perspective to our narratives, combining tactical precision with emotional depth.",
    image: "/images/team/sarah.jpg",
    specialties: ["Military Sci-Fi", "Character Development", "World Building"]
  },
  {
    name: "Dr. Marcus Wright",
    role: "Lead Artist & Visual Director",
    bio: "Former concept artist for major sci-fi franchises, Marcus brings a wealth of experience in creating immersive, futuristic worlds that push the boundaries of visual storytelling.",
    image: "/images/team/marcus.jpg",
    specialties: ["Concept Art", "Digital Illustration", "Visual Development"]
  }
];

export default function HaloCreativeTeam() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
    });

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
    .from(contentRef.current?.children || [], {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    }, '-=0.5');
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen py-20 overflow-hidden">
      <HaloScene />
      
      {/* Dark overlay for better content visibility */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-16 font-roboto-condensed tracking-wider uppercase text-center">
          <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">[</span> MEET THE TEAM <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">]</span>
        </h2>
        
        <div ref={contentRef} className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative group">
              <div className="relative bg-white/95 backdrop-blur-md border-2 border-white/30 rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <div className="relative h-[400px] w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/50 to-transparent"></div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold font-roboto-condensed tracking-wider mb-2 text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-blue-700 font-mono tracking-wider mb-4">{member.role}</p>
                  <p className="text-gray-800 font-mono tracking-wide mb-6">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm font-mono tracking-wider bg-blue-100 text-blue-700 border border-blue-200 rounded shadow-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center max-w-3xl mx-auto">
          <div className="bg-white/95 backdrop-blur-md p-8 rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <p className="text-lg font-mono tracking-wide text-gray-800">
              Our team combines military precision with creative vision, crafting stories that challenge conventions and push boundaries. Every panel, every word, every detail is meticulously crafted to create an immersive experience that stays with you long after you've finished reading.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 