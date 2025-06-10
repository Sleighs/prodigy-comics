'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import AnimatedBackground from './AnimatedBackground';

export default function WhoWeAre() {
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
    <section ref={sectionRef} className="relative py-16 overflow-hidden">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-8 font-roboto-condensed tracking-wider uppercase text-center">
          WHO WE ARE
        </h2>
        
        <div ref={contentRef} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                PRODIGY Comics is not just another comic publisher. We are a force of nature, a storm of creativity that refuses to be tamed. Our stories are forged in the fires of raw power and unapologetic truth, where every panel is a testament to the unyielding spirit of human potential.
              </p>
              <p className="text-lg leading-relaxed">
                We don't create comics. We create legends. Our pages are battlefields where ideas clash and destinies are forged. Every story is a journey into the depths of power, consequence, and the unrelenting pursuit of greatness.
              </p>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/images/about-hero.jpg"
                alt="PRODIGY Comics Vision"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-2xl font-bold italic text-white">
                  "Power is not given. It is taken."
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-roboto-condensed tracking-wider uppercase">Our Philosophy</h3>
              <p className="text-lg leading-relaxed">
                We believe in the power of unfiltered storytelling. Our comics are not bound by conventional norms or artificial limitations. We explore the darkest corners of human nature and the brightest possibilities of human potential.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-roboto-condensed tracking-wider uppercase">Our Vision</h3>
              <p className="text-lg leading-relaxed">
                To create comics that challenge, provoke, and inspire. To build worlds where power and consequence are real, where choices matter, and where the path to greatness is paved with sacrifice and determination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 