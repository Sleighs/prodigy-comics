import Image from "next/image";
import Link from "next/link";
import Footer from '@/components/Footer'
import HeroCarousel from '@/components/HeroCarousel'

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

const membersTierItems = [
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
  },
  {
    id: 4,
    name: "Genesis Poster",
    price: "$25.00",
    image: "/images/genesis-poster-promo.png",
    link: "https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/"
  },
  {
    id: 5,
    name: "VERDICT Poster",
    price: "$25.00",
    image: "/images/verdict-poster.png",
    link: "https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/"
  },
  {
    id: 6,
    name: "G.U.N. Sight Poster",
    price: "$25.00",
    image: "/images/gunsight-poster.png",
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
    <main className="home-page min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-16 roboto">
      {/* Hero Carousel */}
      <div className="mt-0">
        <HeroCarousel />
      </div>

      {/* Available Now Section - Book 0 */}
      <section className="py-20 home--available-now-section">
        <div className="home--available-now-bg"></div>
        
        {/* Full-height image with diagonal edge */}
        <div className="home--available-now-image">
          <div className="absolute inset-0 bg-blood opacity-0 group-hover:opacity-15 transition-opacity duration-300"></div>
          <Image
            src="/images/book0-preview1.png"
            alt="PRODIGY: Hell on Earth Book 0"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50" />
        </div>

        {/* Content */}
        <div className="home--available-now-content">
          <div className="max-w-xl">
            <span className="inline-block px-4 py-1 bg-blood text-white text-sm font-bold rounded-full mb-4">
              NEW RELEASE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold roboto-condensed-bold mb-4">
              PRODIGY: Hell on Earth Book #0
            </h2>
            <p className="text-xl text-white mb-6">
              The beginning of an epic saga where human evolution meets cosmic mystery. 
              Witness the rise of T.B.E.'s and the discovery of the GODSTRAND phenomenon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-blood hover:bg-blood-dark text-white text-lg font-semibold transition-colors duration-300 text-center"
              >
                Get Your Copy
              </a>
              <Link
                href="/about"
                className="px-8 py-3 bg-steel-dark hover:bg-steel text-white text-lg font-semibold transition-colors duration-300 text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Members Tier Section */}
      <section className="home--members-tier-section">
        {/* Background */}
        {/* <div className="home--members-tier-bg"></div> */}
        
        {/* Hero Row */}
        <div className="home--members-tier-hero">
          {/* Content */}
          <div className="home--members-tier-content">
            <span className="inline-block px-4 py-1 text-sm font-bold mb-4">
              EXCLUSIVE ACCESS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold roboto-condensed-bold mb-4">
              Members Tier Access
            </h2>
            <p className="text-xl text-white mb-6">
              Get exclusive access to behind-the-scenes content, early releases, and special member-only merchandise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gold-highlight hover:bg-gold-light text-black text-lg font-semibold transition-colors duration-300 text-center"
              >
                Join Now
              </a>
              <Link
                href="/membership"
                className="px-8 py-3 bg-steel-dark hover:bg-steel text-white text-lg font-semibold transition-colors duration-300 text-center"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="home--members-tier-image">
            <Image
              src="/images/chaos-promo.png"
              alt="PRODIGY: Members Tier"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Featured Items Row - Overlapping */}
        <div className="home--members-tier-featured">
          <div className="home--members-tier-cards">
            {membersTierItems.map((product) => (
              <div key={product.id} className="home--members-tier-item-card">
                <div className="home--members-tier-card-image-container">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="home--members-tier-card-image"
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
      </section>


      {/* Stuffed Box Section */}
      <section className="py-20 home--available-now-section">
        <div className="home--available-now-bg"></div>
        
        <div className="home--available-now-image">
          <div className="absolute inset-0 bg-blood opacity-0 group-hover:opacity-15 transition-opacity duration-300"></div>
          <Image
            src="/images/stuffed-box1.png"
            alt="PRODIGY: Stuffed Box"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50" />
        </div>

        <div className="home--available-now-content">
          <div className="max-w-xl">
            <span className="inline-block px-4 py-1 bg-red-dark text-white text-sm font-bold rounded-full mb-4">
              SPECIAL EDITION
            </span>
            <h2 className="text-4xl md:text-5xl font-bold roboto-condensed-bold mb-4">
              PRODIGY New Age STUFFED Box
            </h2>
            <p className="text-xl text-white mb-6">
              The ultimate collector's edition featuring exclusive merchandise, collectibles, and limited edition variants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-red-dark hover:bg-blood-dark text-white text-lg font-semibold transition-colors duration-300 text-center"
              >
                Pre-order Now
              </a>
              <Link
                href="/store"
                className="px-8 py-3 bg-steel-dark hover:bg-steel text-white text-lg font-semibold transition-colors duration-300 text-center"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Products Section */}
      <section className="py-20 home--products-section">
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
      </section>


      {/* Characters CTA Section */}
      <section className="py-20 home--characters-section">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center section-title">Featured Characters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {characters.map((character) => (
              <div key={character.name} className="home--character-card group">
                <div className="image-container">
                  <Image
                    src={character.image}
                    alt={character.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="content">
                  <h3 className="text-3xl font-bold mb-2 section-subtitle bg-red-dark text-center roboto-condensed-bold uppercase">{character.name}</h3>
                  <p className="text-lg text-white mb-4">{character.description}</p>
                  <div className="home--character-card-button">
                    <Link 
                      href={character.link} 
                      className="inline-block w-full px-6 py-3 bg-darkgray text-white hover:bg-blood-dark transition-colors duration-300 text-center font-bold"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/characters"
              className="inline-block px-8 py-3 bg-blood hover:bg-blood-dark text-white text-lg font-semibold transition-colors duration-300 shadow-lg shadow-blood/30"
            >
              View All Characters
            </Link>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center roboto-condensed-bold">T.B.E. SIGHTINGS</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <p className="text-lg mb-4">
                In 1908, something extraordinary was discovered in the Tunguska blast site. The GODSTRAND, a previously unknown piece of human DNA, was found to be the source of incredible mutations.
              </p>
              <p className="text-lg">
                Today, these mutations have given rise to T.B.E.'s - Terrestrial Biological Entities - humans who have evolved beyond normal capabilities.
              </p>
              <div className="text-center mt-12">
                <Link
                  href="/story"
                  className="inline-block px-8 py-3 bg-blood hover:bg-blood-dark text-white text-lg font-semibold transition-colors duration-300 shadow-lg shadow-blood/30"
                >
                  Explore the Lore
                </Link>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/genetics-lab.png"
                alt="Ember"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

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
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition-colors"
            >
              Shop Now
            </Link>
            <Link
              href="/characters"
              className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-full text-lg font-semibold transition-colors"
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
