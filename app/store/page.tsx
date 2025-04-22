'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ImageViewer from '@/components/ImageViewer';

// Campaign tier data
const products = [
  {
    id: 1,
    name: 'Genesis Arrives Poster',
    price: '$25.00',
    image: '/images/genesis-poster-promo.png',
    category: 'posters',
    description: 'NO ONE understands who or WHAT Genesis is. Her arrival will have consequences for all who cross her path.',
    included: ['Genesis Poster'],
    campaignUrl: 'https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/'
  },
  {
    id: 2,
    name: 'VERDICT NOTHING escapes him Poster',
    price: '$25.00',
    image: '/images/verdict-poster.png',
    category: 'posters',
    description: 'VERDCT COMETH!! NOTHING escapes the judgement of the red behemoth!!',
    included: ['VERDICT!! JUDGEMENT POSTER!!'],
    campaignUrl: 'https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/'
  },
  {
    id: 3,
    name: 'G.U.N. Sight Poster',
    price: '$25.00',
    image: '/images/gunsight-poster.png',
    category: 'posters',
    description: 'Commander of the North American Division, G.U.N.Sight is a proven leader and a charter member of The World Coalition against T.B.E.\'s.',
    included: ['G.U.N Sight Poster'],
    campaignUrl: 'https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/'
  },
  {
    id: 4,
    name: 'Arrowhead / T.B.E.73',
    price: '$25.00',
    image: '/images/arrowhead-promo.png',
    category: 'merchandise',
    description: 'THE PROTEUS FILES Arrowhead (T.B.E.73) is a "Lakota class" entity who is believed to be an ancient (as in centuries old) Shaman who, through unknown means became something more than what he was when he started life.',
    included: ['Arrowhead / T.B.E.73 Poster'],
    campaignUrl: 'https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/'
  },
  {
    id: 5,
    name: 'Ember / Sister of fire',
    price: '$25.00',
    image: '/images/ember-campaign.png',
    category: 'merchandise',
    description: 'Ember and Impulse are the sisters of fire. They are GESTALTS to one another. They BOTH possess power and prowess but TOGETHER (as Gestalts) they are extremely powerful.',
    included: ['Ember / Sister of fire Poster'],
    campaignUrl: 'https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/'
  },
  {
    id: 6,
    name: 'PRODIGY : Hell on Earth Book 0',
    price: '$28.00',
    image: '/images/book0-preview1.png',
    category: 'comics',
    description: 'Book #0 of the PRODIGY New Age series is now LIVE!!',
    included: ['PRODIGY : Hell on Earth Book 0'],
    campaignUrl: 'https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/'
  },
  {
    id: 7,
    name: 'Hell on Earth Book #0 SIGNED',
    price: '$33.00',
    image: '/images/book0-preview3.png',
    category: 'comics',
    description: 'SIGNED by the artist Ryan Benjamin and the creator/writer Hammerhand (William Hamby). Limited to 250 signed copies.',
    included: ['Hell on Earth Book #0 SIGNED'],
    campaignUrl: 'https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/'
  },
  {
    id: 8,
    name: 'PRODIGY Hero/Villain Card set',
    price: '$45.00',
    image: '/images/prodigy-cards-promo.png',
    category: 'merchandise',
    description: 'PRODIGY New Age Hero/Villain card set: This information dump and psychological profile is offered by GOLDSTONE LABORATORIES!! Every KNOWN T.B.E. has been cataloged, classed and profiled.',
    included: ['10 card set with one GUARANTEED SIGNED'],
    campaignUrl: 'https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/'
  },
  {
    id: 9,
    name: 'WOLFPAK Dossier / GOLDSTONE',
    price: '$45.00',
    image: '/images/wolfpak-promo.png',
    category: 'merchandise',
    description: 'GOLDSTONE is at the heart of research on "The GODSTRAND" and has been in the shadowy realm of intelligence gathering since before the founding of The United States.',
    included: ['WOLFPAK SUPPLEMENTAL'],
    campaignUrl: 'https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/'
  },
  {
    id: 10,
    name: 'CLAN BUSHIDO SUPPLEMENTAL',
    price: '$45.00',
    image: '/images/clan-bushido-promo.png',
    category: 'merchandise',
    description: 'GOLDSTONE is at the heart of research on "The GODSTRAND" and has been in the shadowy realm of intelligence gathering since before the founding of The United States.',
    included: ['CLAN BUSHIDO DOSSIER'],
    campaignUrl: 'https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/'
  },
  {
    id: 11,
    name: 'The TRIPLE threat!!',
    price: '$60.00',
    image: '/images/poster-triple-promo.png',
    category: 'posters',
    description: 'THE TRIPLE THREAT poster package!! Get all three posters in one bundle!',
    included: ['Genesis Poster', 'VERDICT Poster', 'G.U.N. Sight Poster'],
    campaignUrl: 'https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/'
  },
  {
    id: 12,
    name: 'PRODIGY New Age STUFFED box',
    price: '$250.00',
    image: '/images/stuffed-box1.png',
    category: 'bundles',
    description: 'The ultimate PRODIGY collection! Get EVERYTHING that this campaign generates for one SUPER low price!!',
    included: [
      'Genesis Poster',
      'VERDICT Poster',
      'G.U.N. Sight Poster',
      'Arrowhead / T.B.E.73',
      'Ember / Sister of fire',
      'PRODIGY : Hell on Earth Book 0',
      'Hell on Earth Book #0 SIGNED',
      'PRODIGY Hero/Villain Card set',
      'WOLFPAK Dossier',
      'CLAN BUSHIDO SUPPLEMENTAL'
    ],
    campaignUrl: 'https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/'
  }
];

export default function StorePage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70" />
          {/* <Image
            src="/images/store-hero.jpg"
            alt="Prodigy Store"
            fill
            className="object-cover"
            priority
          /> */}
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Store
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Official Prodigy Comics and Merchandise
          </p>
        </div>
      </section>

      {/* Featured Items Carousel */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stuffed Box */}
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
              <div 
                className="relative h-64 cursor-zoom-in"
                onClick={() => setSelectedImage({ src: "/images/stuffed-box1.png", alt: "PRODIGY New Age STUFFED box" })}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/images/stuffed-box1.png"
                    alt="PRODIGY New Age STUFFED box"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">PRODIGY New Age STUFFED box</h3>
                <p className="text-gray-300 mb-4">The ultimate PRODIGY collection! Get EVERYTHING that this campaign generates for one SUPER low price!!</p>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-2xl font-bold text-blue-400">$250.00</span>
                </div>
                <div className="flex flex-col space-y-4">
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                    Add to Cart
                  </button>
                  <a
                    href="https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors text-center"
                  >
                    View Campaign
                  </a>
                </div>
              </div>
            </div>

            {/* Book 0 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
              <div 
                className="relative h-64 cursor-zoom-in"
                onClick={() => setSelectedImage({ src: "/images/book0-preview1.png", alt: "PRODIGY : Hell on Earth Book 0" })}
              >
                <div className="relative w-full h-full">
                    <Image
                    src="/images/book0-preview1.png"
                    alt="PRODIGY : Hell on Earth Book 0"
                    fill
                    className="object-cover"
                    />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">PRODIGY : Hell on Earth Book 0</h3>
                <p className="text-gray-300 mb-4">Book #0 of the PRODIGY New Age series is now LIVE!!</p>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-2xl font-bold text-blue-400">$28.00</span>
                </div>
                <div className="flex flex-col space-y-4">
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                    Add to Cart
                  </button>
                  <a
                    href="https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors text-center"
                  >
                    View Campaign
                  </a>
                </div>
              </div>
            </div>

            {/* Ember Poster */}
            <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
              <div 
                className="relative h-64 cursor-zoom-in"
                onClick={() => setSelectedImage({ src: "/images/ember-promo.png", alt: "Ember / Sister of fire" })}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/images/ember-promo.png"
                    alt="Ember / Sister of fire"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Ember / Sister of fire</h3>
                <p className="text-gray-300 mb-4">Ember and Impulse are the sisters of fire. They are GESTALTS to one another. They BOTH possess power and prowess but TOGETHER (as Gestalts) they are extremely powerful.</p>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-2xl font-bold text-blue-400">$25.00</span>
                  {/* <span className="text-gray-400 line-through">$40.00</span>
                  <span className="text-green-400">Save 37%</span> */}
                </div>
                <div className="flex flex-col space-y-4">
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                    Add to Cart
                  </button>
                  <a
                    href="https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors text-center"
                  >
                    View Campaign
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center space-x-4 mb-12">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
              All Products
            </button>
            <button className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
              Comics
            </button>
            <button className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
              Posters
            </button>
            <button className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
              Merchandise
            </button>
            <button className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
              Bundles
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
                <div 
                  className="relative h-64 cursor-zoom-in"
                  onClick={() => setSelectedImage({ src: product.image, alt: product.name })}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Included Items:</h4>
                    <ul className="text-sm text-gray-400">
                      {product.included.map((item, index) => (
                        <li key={index} className="mb-1">• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-blue-400">{product.price}</span>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                    <a
                      href={product.campaignUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors text-center"
                    >
                      View Campaign
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Collection</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96">
              <Image
                src="/images/stuffed-box1.png"
                alt="Prodigy Collection"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">PRODIGY New Age STUFFED box</h3>
              <p className="text-lg mb-6">
                The ultimate PRODIGY collection! Get EVERYTHING that this campaign generates for one SUPER low price!!
              </p>
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-blue-400">$250.00</span>
                {/* <span className="text-gray-400 line-through">$400.00</span>
                <span className="text-green-400">Save 37%</span> */}
              </div>
              <div className="flex flex-col space-y-4 mt-6">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                  Add to Cart
                </button>
                <a
                  href="https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors text-center"
                >
                  View Campaign
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Viewer */}
      <ImageViewer
        src={selectedImage?.src || ''}
        alt={selectedImage?.alt || ''}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </main>
  );
} 