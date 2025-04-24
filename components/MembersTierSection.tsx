import Image from "next/image";
import Link from "next/link";
import '@/styles/MembersTierSection.css';

const membersTierItems = [
  {
    id: 1,
    name: "PRODIGY: Hell On Earth Issue #0",
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

export default function MembersTierSection() {
  return (
    <section className="home--members-tier-section">
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
                <h3 className="text-[14pt] font-bold mb-2 roboto-bold text-darkgray">{product.name}</h3>
                <p className="price text-[13pt] roboto-bold mb-4 text-muted">{2025}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 