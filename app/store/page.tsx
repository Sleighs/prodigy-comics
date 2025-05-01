'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ImageViewer from '@/components/ImageViewer';
import products from '@/data/products';
import PageHeader from '../../components/PageHeader';
import '../../styles/military-theme.css';

export default function StorePage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <main className="min-h-screen pt-16 military-container">
      {/* Hero Section */}
      <PageHeader 
        title="Store"
        backgroundImage="/images/prodigy-banner.png"
        subtitle="Official Prodigy Comics and Merchandise"
        tailwindStyles="bg-gradient-to-b from-gray-900 to-black military-header"
      />

      {/* Featured Items Carousel */}
      <section className="py-12 military-section">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center military-title">Featured Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 military-grid">
            {/* Stuffed Box */}
            <div className="military-card">
              <div 
                className="relative h-64 cursor-zoom-in military-image-container"
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
                <h3 className="text-2xl font-bold mb-2 military-title">PRODIGY New Age STUFFED box</h3>
                <p className="text-gray-300 mb-4 military-description">The ultimate PRODIGY collection! Get EVERYTHING that this campaign generates for one SUPER low price!!</p>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-2xl font-bold military-price">$250.00</span>
                </div>
                <div className="flex flex-col space-y-4">
                  <button className="military-button">
                    Add to Cart
                  </button>
                  <a
                    href="https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="military-button text-center"
                  >
                    View Campaign
                  </a>
                </div>
              </div>
            </div>

            {/* Book 0 */}
            <div className="military-card">
              <div 
                className="relative h-64 cursor-zoom-in military-image-container"
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
                <h3 className="text-2xl font-bold mb-2 military-title">PRODIGY : Hell on Earth Book 0</h3>
                <p className="text-gray-300 mb-4 military-description">Book #0 of the PRODIGY New Age series is now LIVE!!</p>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-2xl font-bold military-price">$28.00</span>
                </div>
                <div className="flex flex-col space-y-4">
                  <button className="military-button">
                    Add to Cart
                  </button>
                  <a
                    href="https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="military-button text-center"
                  >
                    View Campaign
                  </a>
                </div>
              </div>
            </div>

            {/* Ember Poster */}
            <div className="military-card">
              <div 
                className="relative h-64 cursor-zoom-in military-image-container"
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
                <h3 className="text-2xl font-bold mb-2 military-title">Ember / Sister of fire</h3>
                <p className="text-gray-300 mb-4 military-description">Ember and Impulse are the sisters of fire. They are GESTALTS to one another. They BOTH possess power and prowess but TOGETHER (as Gestalts) they are extremely powerful.</p>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-2xl font-bold military-price">$25.00</span>
                </div>
                <div className="flex flex-col space-y-4">
                  <button className="military-button">
                    Add to Cart
                  </button>
                  <a
                    href="https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="military-button text-center"
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
      <section className="py-12 px-4 military-section">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center space-x-4 mb-12">
            <button 
              className={`military-category-button ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Products
            </button>
            <button 
              className={`military-category-button ${activeCategory === 'comics' ? 'active' : ''}`}
              onClick={() => setActiveCategory('comics')}
            >
              Comics
            </button>
            <button 
              className={`military-category-button ${activeCategory === 'posters' ? 'active' : ''}`}
              onClick={() => setActiveCategory('posters')}
            >
              Posters
            </button>
            <button 
              className={`military-category-button ${activeCategory === 'merchandise' ? 'active' : ''}`}
              onClick={() => setActiveCategory('merchandise')}
            >
              Merchandise
            </button>
            <button 
              className={`military-category-button ${activeCategory === 'bundles' ? 'active' : ''}`}
              onClick={() => setActiveCategory('bundles')}
            >
              Bundles
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 military-grid">
            {products.map((product) => (
              <div key={product.id} className="military-card">
                <div 
                  className="relative h-64 cursor-zoom-in military-image-container"
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
                  <h3 className="text-xl font-bold mb-2 military-title">{product.name}</h3>
                  <p className="text-gray-300 mb-4 military-description">{product.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 military-title">Included Items:</h4>
                    <ul className="text-sm text-gray-400 military-description">
                      {product.included.map((item, index) => (
                        <li key={index} className="mb-1">• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold military-price">{product.price}</span>
                      <button className="military-button">
                        Add to Cart
                      </button>
                    </div>
                    <a
                      href={product.campaignUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="military-button text-center"
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
      <section className="py-20 military-section">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center military-title">Featured Collection</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 military-image-container">
              <Image
                src="/images/stuffed-box1.png"
                alt="Prodigy Collection"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 military-title">PRODIGY New Age STUFFED box</h3>
              <p className="text-lg mb-6 military-description">
                The ultimate PRODIGY collection! Get EVERYTHING that this campaign generates for one SUPER low price!!
              </p>
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold military-price">$250.00</span>
              </div>
              <div className="flex flex-col space-y-4 mt-6">
                <button className="military-button">
                  Add to Cart
                </button>
                <a
                  href="https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="military-button text-center"
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