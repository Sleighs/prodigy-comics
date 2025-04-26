'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ImageViewer from '@/components/ImageViewer';
import products from '@/data/products';
import PageHeader from '../components/PageHeader';


export default function StorePage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <PageHeader 
        title="Store"
        backgroundImage="/images/prodigy-banner.png"
        subtitle="Official Prodigy Comics and Merchandise"
        tailwindStyles="bg-gradient-to-b from-gray-900 to-black"
      />


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