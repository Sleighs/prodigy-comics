'use client';
import Image from "next/image";
import Link from "next/link";
import Footer from '@/components/Footer'
import HeroCarousel from '@/components/HeroCarousel'
import NewReleaseSection from '@/components/NewReleaseSection'
import AvailableNowSection from '@/components/AvailableNowSection'
import MembersTierSection from '@/components/MembersTierSection'
import { useEffect } from "react";
import FeaturedCharactersSection from "@/components/FeaturedCharactersSection";
import TBEMap from "@/components/TBEMap";
import TBESightingsIntro from "@/components/TBESightingsIntro";

const featuredProducts = [
  {
    id: 1,
    name: "PRODIGY: Hell on Earth Book #0",
    price: "$28.00",
    image: "/images/book0-preview1.png",
    link: "https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/"
  },
  {
    id: 2,
    name: "PRODIGY New Age STUFFED box",
    price: "$250.00",
    image: "/images/stuffed-box1.png",
    link: "https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/"
  },
  {
    id: 3,
    name: "Ember & Impulse / Sisters of Fire Poster",
    price: "$25.00",
    image: "/images/ember-promo.png",
    link: "https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/"
  }
];

const characters = [
  {
    name: "Genesis",
    description: "NO ONE understands who or WHAT Genesis is. Her arrival will have consequences for all who cross her path.",
    image: "/images/genesis-campaign.png",
    link: "/characters/genesis"
  },
  {
    name: "VERDICT",
    description: "VERDCT COMETH!! NOTHING escapes the judgement of the red behemoth!!",
    image: "/images/verdict-poster.png",
    link: "/characters/verdict"
  },
  {
    name: "G.U.N. Sight",
    description: "Commander of the North American Division, G.U.N.Sight is a proven leader and a charter member of The World Coalition against T.B.E.'s.",
    image: "/images/gunsight-poster.png",
    link: "/characters/gun-sight"
  }
];

export default function Home() {
  return (
    <main className="home-page min-h-screen pt-16 roboto">
      {/* Hero Carousel */}
      <div className="mt-0">
        <HeroCarousel />
      </div>

      {/* New Release Section */}
      <NewReleaseSection />

      {/* Featured Characters Section */}
      <FeaturedCharactersSection />

      {/* Stuffed Box Section */}
      <AvailableNowSection 
        imageSrc="/images/stuffed-box1.png"
        title="PRODIGY New Age STUFFED Box"
        description="The ultimate collector's edition featuring exclusive merchandise, collectibles, and limited edition variants. Get EVERYTHING that this campaign generates for one SUPER low price!"
        primaryButton={{
          text: "Pre-order Now",
          link: "https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/",
          isExternal: true
        }}
        secondaryButton={{
          text: "View Details",
          link: "/store"
        }}
        badge="SPECIAL EDITION"
        slantDirection="left"
      />


      {/* Featured Products Section */}
      {/* <section className="py-20 home--products-section">
        <div className="home--products-bg"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center section-title ">Featured Collections</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="home--product-card group">
                <div className="image-container">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="content">
                  <h3 className="text-2xl font-bold mb-2 section-subtitle">{product.name}</h3>
                  <p className="price text-xl mb-4">{product.price}</p>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button inline-block w-full px-4 py-2 text-center roboto-condensed-bold text-white"
                  >
                    LEARN MORE
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/store"
              className="button inline-block px-8 py-3 text-lg font-semibold"
            >
              VIEW ALL
            </Link>
          </div>
        </div>
      </section> */}

  
      {/* TBE Sightings Intro Section */}
      <TBESightingsIntro />


      {/* TBE Map Section */}
      <TBEMap />


      {/* Bottom CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 roboto-condensed-bold">Join the PRODIGY Universe</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of the story as humanity evolves beyond its limits. Discover the GODSTRAND and witness the rise of T.B.E.'s.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/store"
              className="px-8 py-3 bg-blue-600 text-lg font-semibold transition-all duration-300 bg-blood flex items-center justify-center hover:bg-red-800 hover:scale-105"
            >
              Shop Now
            </Link>
            <Link
              href="/characters"
              className="px-8 py-3 bg-gray-800 text-lg font-semibold transition-all duration-300 bg-steel flex items-center justify-center hover:bg-gray-700 hover:scale-105"
            >
              Meet the Characters
            </Link>
          </div>
        </div>
      </section>

      

      <Footer />
    </main>
  );
}
