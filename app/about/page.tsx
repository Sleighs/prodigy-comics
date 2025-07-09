'use client';

import PageHeader from '../../components/PageHeader';
import Image from 'next/image';
import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
  quote: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "WILL",
    role: "Lead Writer & Creator",
    bio: "Will is the visionary behind Prodigy's complex narrative universe. With over a decade of experience in comics and screenwriting, Will brings a unique perspective to storytelling that combines psychological depth with brutal action.",
    image: "/images/cybertech-logo.png",
    specialties: ["World Building", "Character Development", "Military Fiction"],
    quote: "I wanted to create characters that felt real—flawed, complex, and human. The brutality in our stories isn't just for shock value; it's about showing the cost of power and the price of heroism."
  },
  {
    name: "JOHN SMITH",
    role: "Lead Artist & Designer",
    bio: "John's distinctive art style brings the brutal world of Prodigy to life. His background in fine arts and digital illustration creates a unique visual language that captures both the beauty and horror of our stories.",
    image: "/images/wolfpak-logo.png",
    specialties: ["Comic Art", "Visual Storytelling", "Character Design"],
    quote: "Every panel is an opportunity to tell a story within a story. The brutality isn't gratuitous—it's honest. It's about showing the real consequences of power and violence."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-red-900/20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-0 w-96 h-96 bg-red-500/5 transform rotate-45 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-1/2 right-0 w-64 h-64 bg-red-600/5 transform -rotate-12 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-red-700/5 transform rotate-90 translate-y-1/2"></div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/2 to-transparent animate-pulse"></div>
      </div>
      <div className="relative z-10">
        <PageHeader
          title="About Prodigy Comics"
          backgroundImage="/images/prodigy-banner.png"
          subtitle="A small team of creators with big ambitions"
          tailwindStyles="bg-gradient-to-b from-gray-900 to-black"
        />
        
        {/* Our Story */}
        <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm p-8">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            <div className="relative">
              <h2 className="text-3xl roboto-condensed mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-red-500 tracking-wider">
                OUR STORY
              </h2>
              <div className="space-y-6 text-white/80 font-roboto tracking-wide leading-relaxed">
                <p>
                  Prodigy Comics was born from a simple belief: that great storytelling transcends the boundaries of traditional comics. Founded by Will, a passionate creator with a vision for something different, Prodigy set out to challenge the status quo and push the medium into uncharted territory.
                </p>
                <p>
                  What started as late-night writing sessions and countless hours of world-building has evolved into a bold new vision for the industry. Will's dedication to creating authentic, complex narratives has been the driving force behind Prodigy's development.
                </p>
                <p>
                  The journey began with a single question: "What if I could create something that doesn't just tell a story, but creates an entire universe?" That question led to the development of the world of Prodigy—a brutal, complex, and deeply human narrative that challenges everything you think you know about superheroes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Creative Team */}
        <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm p-8">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            <div className="relative">
              <h2 className="text-3xl roboto-condensed mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white to-red-500 tracking-wider text-center">
                THE CREATIVE TEAM
              </h2>
              
              <div className="space-y-16">
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
                          <h3 className="text-2xl font-bold roboto-condensed tracking-wider mb-2">{member.name}</h3>
                          <p className="text-red-500 font-roboto tracking-wider mb-4">{member.role}</p>
                          <p className="text-white/80 font-roboto tracking-wide mb-6">{member.bio}</p>
                          
                          <div className="mb-6">
                            <p className="text-white/90 font-roboto italic">"{member.quote}"</p>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {member.specialties.map((specialty, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 text-sm font-roboto tracking-wider bg-red-500/5 text-red-400/80 rounded"
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
                <p className="text-lg font-roboto tracking-wide text-white/70 max-w-3xl mx-auto">
                  Our team combines creative vision with technical precision, crafting stories that challenge conventions and push boundaries. Every panel, every word, every detail is meticulously crafted to create an immersive experience that stays with you long after you've finished reading.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm p-6">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
              <div className="relative">
                <h3 className="text-xl roboto-condensed mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-red-500 tracking-wider">
                  STORY FIRST
                </h3>
                <p className="text-white/80 font-roboto tracking-wide leading-relaxed">
                  Every decision we make serves the story. From character development to visual design, everything is crafted to enhance the narrative experience.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm p-6">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
              <div className="relative">
                <h3 className="text-xl roboto-condensed mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-red-500 tracking-wider">
                  COLLABORATION
                </h3>
                <p className="text-white/80 font-roboto tracking-wide leading-relaxed">
                  We believe the best stories come from diverse perspectives. Our small team works closely together, challenging and supporting each other to create something truly special.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm p-6">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
              <div className="relative">
                <h3 className="text-xl roboto-condensed mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-red-500 tracking-wider">
                  INNOVATION
                </h3>
                <p className="text-white/80 font-roboto tracking-wide leading-relaxed">
                  We're not afraid to push boundaries and try new things. Innovation is at the heart of everything we do, from storytelling techniques to visual presentation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm p-8">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            <div className="relative">
              <h2 className="text-3xl roboto-condensed mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-red-500 tracking-wider">
                OUR MISSION
              </h2>
              <div className="space-y-6 text-white/80 font-roboto tracking-wide leading-relaxed">
                <p>
                  We're here to prove that you don't need a massive studio to create compelling, innovative comics. Our mission is to demonstrate that great storytelling comes from passion, creativity, and a willingness to take risks.
                </p>
                <p>
                  We believe in creating stories that matter—stories that challenge readers, provoke thought, and stay with you long after you've finished reading. Our brutal aesthetic isn't just about shock value; it's about honesty, about showing the real consequences of power and the true cost of heroism.
                </p>
                <p>
                  As a small team, we have the freedom to be bold, to experiment, and to create without compromise. We're not trying to be the next Marvel or DC—we're trying to be the first Prodigy Comics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm p-8">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            <div className="relative text-center">
              <h2 className="text-3xl roboto-condensed mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-red-500 tracking-wider">
                JOIN THE JOURNEY
              </h2>
              <div className="space-y-6 text-white/80 font-roboto tracking-wide leading-relaxed">
                <p>
                  We're just getting started. Join us as we continue to push the boundaries of what comics can be and tell stories that matter.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a 
                    href="/contact"
                    className="inline-block bg-red-700 hover:bg-red-600 text-white roboto-condensed tracking-wider py-4 px-8 rounded border border-red-500/30 transition-all duration-300 font-semibold"
                  >
                    GET IN TOUCH
                  </a>
                  <a 
                    href="/story"
                    className="inline-block bg-black/50 hover:bg-gray-900/50 text-white roboto-condensed tracking-wider py-4 px-8 rounded border border-red-500/30 transition-all duration-300 font-semibold"
                  >
                    EXPLORE THE STORY
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 