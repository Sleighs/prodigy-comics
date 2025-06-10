'use client';

import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: "[Writer]",
    role: "Lead Writer & Creator",
    bio: "A visionary storyteller with a background in military science fiction. Known for pushing the boundaries of the superhero genre with complex narratives and deep character development.",
    image: "/images/cybertech-logo.png",
    specialties: ["World Building", "Character Development", "Military Fiction"]
  },
  {
    name: "[Artist]",
    role: "Lead Artist & Designer",
    bio: "Veteran comic artist with over a decade of experience at Marvel and DC Comics. Known for his dynamic action sequences and innovative panel layouts, James brings a wealth of industry expertise to our creative team.",
    image: "/images/wolfpak-logo.png",
    specialties: ["Comic Art", "Visual Storytelling", "Character Design"]
  }
];

export default function MilitaryCreativeTeam() {
  return (
    <section className="relative py-16 bg-black/50">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 font-roboto-condensed tracking-wider uppercase text-center">
          <span className="text-red-500">[</span> THE CREATIVE TEAM <span className="text-red-500">]</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative group">
              <div className="relative bg-black/30 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 hover:bg-black/40">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className={`relative h-[300px] ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  </div>
                  
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold font-roboto-condensed tracking-wider mb-2">{member.name}</h3>
                    <p className="text-red-500 font-mono tracking-wider mb-4">{member.role}</p>
                    <p className="text-white/80 font-mono tracking-wide mb-6">{member.bio}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm font-mono tracking-wider bg-red-500/5 text-red-400/80 rounded"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg font-mono tracking-wide text-white/70 max-w-3xl mx-auto">
            Our team combines military precision with creative vision, crafting stories that challenge conventions and push boundaries. Every panel, every word, every detail is meticulously crafted to create an immersive experience that stays with you long after you've finished reading.
          </p>
        </div>
      </div>
    </section>
  );
} 