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
    name: "ALEX RYDER",
    role: "Lead Writer & Creator",
    bio: "A visionary storyteller with a background in military science fiction. Known for pushing the boundaries of the superhero genre with complex narratives and deep character development.",
    image: "/images/unknown4.png",
    specialties: ["World Building", "Character Development", "Military Fiction"]
  },
  {
    name: "MAYA CHEN",
    role: "Lead Artist & Designer",
    bio: "Award-winning artist specializing in cyberpunk and military aesthetics. Her unique style combines traditional comic art with cutting-edge digital techniques.",
    image: "/images/unknown4.png",
    specialties: ["Character Design", "Digital Art", "Visual Storytelling"]
  }
];

export default function CreativeTeam() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-900 relative overflow-hidden">
      {/* Tron Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      {/* Scanline Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent animate-scan"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 font-roboto-condensed tracking-wider uppercase text-center">
          <span className="text-red-500">[</span> THE CREATIVE TEAM <span className="text-red-500">]</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/95 to-gray-800/95 p-8 shadow-2xl border border-red-500/20"
            >
              {/* Tron Edge Glow */}
              <div className="absolute inset-0 border border-red-500/20 rounded-xl shadow-[0_0_15px_rgba(220,38,38,0.1)]"></div>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-red-500/30">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-roboto-condensed tracking-wider text-white">{member.name}</h3>
                  <p className="text-red-500/80 font-mono tracking-wider">{member.role}</p>
                </div>
              </div>
              
              <p className="text-white/70 mb-6 font-mono tracking-wide">
                {member.bio}
              </p>
              
              <div className="space-y-2">
                <h4 className="text-sm font-mono tracking-widest text-red-500">[ SPECIALTIES ]</h4>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 text-sm bg-red-500/10 border border-red-500/20 rounded-full text-white/70 font-mono tracking-wide"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Team Info */}
        <div className="mt-12 text-center">
          <p className="text-white/70 font-mono tracking-wide max-w-2xl mx-auto">
            Our team combines decades of experience in comics, military fiction, and digital art to create a unique and immersive universe where humanity's evolution leads to both wonder and horror.
          </p>
        </div>
      </div>
    </section>
  );
} 