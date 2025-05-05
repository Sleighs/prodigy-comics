import Image from 'next/image';
import { useState } from 'react';
import products from '@/data/products';

interface ModernProductsSectionProps {
  onImageSelect: (image: { src: string; alt: string }) => void;
}

export default function ModernProductsSection({ onImageSelect }: ModernProductsSectionProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Category Navigation */}
        <div className="flex justify-center space-x-6 mb-8 border-b border-gray-200 pb-4">
          <button 
            className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${
              activeCategory === 'all' 
                ? 'bg-black text-white' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => setActiveCategory('all')}
          >
            All Products
          </button>
          <button 
            className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${
              activeCategory === 'comics' 
                ? 'bg-black text-white' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => setActiveCategory('comics')}
          >
            Comics
          </button>
          <button 
            className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${
              activeCategory === 'posters' 
                ? 'bg-black text-white' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => setActiveCategory('posters')}
          >
            Posters
          </button>
          <button 
            className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${
              activeCategory === 'merchandise' 
                ? 'bg-black text-white' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => setActiveCategory('merchandise')}
          >
            Merchandise
          </button>
          <button 
            className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${
              activeCategory === 'bundles' 
                ? 'bg-black text-white' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => setActiveCategory('bundles')}
          >
            Bundles
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Product Image */}
              <div 
                className="relative aspect-square cursor-zoom-in"
                onClick={() => onImageSelect({ src: product.image, alt: product.name })}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                {/* Quick Add to Cart */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all duration-300">
                  <button className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:bg-white">
                    Quick Add
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-2 line-clamp-2">{product.description}</p>
                
                {/* Included Items */}
                <div className="mb-3">
                  <h4 className="text-xs font-medium text-gray-900 mb-1">Includes:</h4>
                  <ul className="text-xs text-gray-500 space-y-0.5">
                    {product.included.slice(0, 2).map((item, index) => (
                      <li key={index} className="truncate">• {item}</li>
                    ))}
                    {product.included.length > 2 && (
                      <li className="text-gray-400">+{product.included.length - 2} more items</li>
                    )}
                  </ul>
                </div>

                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">{product.price}</span>
                  <div className="flex space-x-2">
                    <button className="text-sm font-medium text-gray-600 hover:text-gray-900">
                      View Details
                    </button>
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 