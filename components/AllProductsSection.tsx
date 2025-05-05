import Image from 'next/image';
import { useState } from 'react';
import products from '@/data/products';

interface AllProductsSectionProps {
  onImageSelect: (image: { src: string; alt: string }) => void;
}

export default function AllProductsSection({ onImageSelect }: AllProductsSectionProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <section className="store--all-products-section py-12 px-4">
      <h2 className="section-header text-3xl roboto-condensed-bold mb-8 border-l-4 border-red-600 pl-4">
        ALL ITEMS
      </h2>
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
                onClick={() => onImageSelect({ src: product.image, alt: product.name })}
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
  );
} 