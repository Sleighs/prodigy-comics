import Image from 'next/image';

interface ModernFeaturedSectionProps {
  onImageSelect: (image: { src: string; alt: string }) => void;
}

export default function ModernFeaturedSection({ onImageSelect }: ModernFeaturedSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Collections</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular and exclusive items. Limited time offers and special bundles available.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Stuffed Box */}
          <div className="bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <div 
              className="relative aspect-[4/3] cursor-zoom-in"
              onClick={() => onImageSelect({ src: "/images/stuffed-box1.png", alt: "PRODIGY New Age STUFFED box" })}
            >
              <Image
                src="/images/stuffed-box1.png"
                alt="PRODIGY New Age STUFFED box"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-red-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                  Best Value
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">PRODIGY New Age STUFFED box</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                The ultimate PRODIGY collection! Get EVERYTHING that this campaign generates for one SUPER low price!!
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-gray-900">$250.00</span>
                <span className="text-sm text-gray-500">Save 20%</span>
              </div>
              <div className="flex flex-col space-y-3">
                <button className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                  Add to Cart
                </button>
                <a
                  href="https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-sm text-gray-600 hover:text-gray-900 font-medium"
                >
                  View Campaign Details →
                </a>
              </div>
            </div>
          </div>

          {/* Book 0 */}
          <div className="bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <div 
              className="relative aspect-[4/3] cursor-zoom-in"
              onClick={() => onImageSelect({ src: "/images/book0-preview1.png", alt: "PRODIGY : Hell on Earth Book 0" })}
            >
              <Image
                src="/images/book0-preview1.png"
                alt="PRODIGY : Hell on Earth Book 0"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                  New Release
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">PRODIGY : Hell on Earth Book 0</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                Book #0 of the PRODIGY New Age series is now LIVE!!
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-gray-900">$28.00</span>
                <span className="text-sm text-gray-500">Limited Stock</span>
              </div>
              <div className="flex flex-col space-y-3">
                <button className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                  Add to Cart
                </button>
                <a
                  href="https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-sm text-gray-600 hover:text-gray-900 font-medium"
                >
                  View Campaign Details →
                </a>
              </div>
            </div>
          </div>

          {/* Ember Poster */}
          <div className="bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <div 
              className="relative aspect-[4/3] cursor-zoom-in"
              onClick={() => onImageSelect({ src: "/images/ember-promo.png", alt: "Ember / Sister of fire" })}
            >
              <Image
                src="/images/ember-promo.png"
                alt="Ember / Sister of fire"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                  Fan Favorite
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ember / Sister of fire</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                Ember and Impulse are the sisters of fire. They are GESTALTS to one another. They BOTH possess power and prowess but TOGETHER (as Gestalts) they are extremely powerful.
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-gray-900">$25.00</span>
                <span className="text-sm text-gray-500">Free Shipping</span>
              </div>
              <div className="flex flex-col space-y-3">
                <button className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                  Add to Cart
                </button>
                <a
                  href="https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-sm text-gray-600 hover:text-gray-900 font-medium"
                >
                  View Campaign Details →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 