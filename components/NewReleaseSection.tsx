import Image from "next/image";
import Link from "next/link";
import '@/styles/NewReleaseSection.css';

const newReleaseItems = [
  {
    id: 1,
    name: "PRODIGY: Hell On Earth Issue #0",
    price: "$28.00",
    image: "/images/book0-preview1.png",
    link: "https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/"
  },
  {
    id: 2,
    name: "PRODIGY New Age STUFFED Box",
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
  },
  {
    id: 7,
    name: "Arrowhead / T.B.E.73",
    price: "$25.00",
    image: "/images/arrowhead-promo.png",
    link: "https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/"
  },
  {
    id: 8,
    name: "Hell On Earth Book #0 SIGNED",
    price: "$33.00",
    image: "/images/book0-preview3.png",
    link: "https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/"
  },
  {
    id: 9,
    name: "PRODIGY Hero/Villain Card Set",
    price: "$45.00",
    image: "/images/prodigy-cards-promo.png",
    link: "https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/"
  },
  {
    id: 10,
    name: "WOLFPAK Dossier / GOLDSTONE",
    price: "$45.00",
    image: "/images/wolfpak-promo.png",
    link: "https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/"
  },
  {
    id: 11,
    name: "CLAN BUSHIDO SUPPLEMENTAL",
    price: "$45.00",
    image: "/images/clan-bushido-promo.png",
    link: "https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/"
  },
  {
    id: 12,
    name: "The TRIPLE Threat!!",
    price: "$60.00",
    image: "/images/poster-triple-promo.png",
    link: "https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/"
  }
];

export default function NewReleaseSection() {
  return (
    <section className="home--new-release-section">
      {/* Background */}
      <div className="home--new-release-bg"></div>
      
      {/* Hero Row */}
      <div className="home--new-release-hero">
        {/* Content */}
        <div className="home--new-release-content">
          <div className="home--new-release-content-items">
            <span className="inline-block px-4 py-1 bg-blood text-white text-sm font-bold rounded-full mb-4">
              NEW RELEASE
            </span>
            <h2 className="text-4xl text-[40px] font-bold roboto-condensed-bold mb-4">
              PRODIGY: Hell On Earth Issue #0
            </h2>
            <p className="text-xl text-white mb-6">
              The beginning of an epic saga where human evolution meets the rise of T.B.E.'s.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blood text-lg font-bold transition-all duration-300 flex items-center justify-center hover:bg-red-800 hover:scale-105"
            >
              GET YOUR COPY
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="home--new-release-image">
          <Image
            src="/images/genesis-sample.png"
            alt="PRODIGY: Hell on Hearth Book #0"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Featured Items Row - Overlapping */}
      <div className="home--new-release-featured">
        <div className="home--new-release-cards-container-padding">
          <div className="home--new-release-cards-container">
            <div className="home--new-release-cards">
              {newReleaseItems.map((product) => (
                <div key={product.id} className="home--new-release-item-card">
                  <div className="home--new-release-card-image-container">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="home--new-release-card-image"
                      onClick={()=>{
                        window.open(product.link, '_blank');
                      }}
                    />
                  </div>
                  <div className="content">
                    <p className="text-[14pt] font-bold mb-2 roboto-bold text-darkgray">{product.name}</p>
                    <p className="price text-[12.5pt] roboto-bold mb-4 text-muted">{2025}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}