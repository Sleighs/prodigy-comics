import Image from 'next/image';
import { useState } from 'react';
import products from '@/data/products';

interface ModernProductsSectionProps {
  onImageSelect: (image: { src: string; alt: string }) => void;
}

interface CartItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
}

export default function ModernProductsSection({ onImageSelect }: ModernProductsSectionProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showAddedMessage, setShowAddedMessage] = useState<number | null>(null);

  const handleQuickAdd = (product: typeof products[0]) => {
    // Check if item already exists in cart
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      // Update quantity if item exists
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      // Add new item to cart
      setCart([...cart, { 
        id: product.id, 
        name: product.name, 
        price: product.price,
        quantity: 1 
      }]);
    }

    // Show added message
    setShowAddedMessage(product.id);
    setTimeout(() => setShowAddedMessage(null), 2000);
  };

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
              </div>

              {/* Product Info */}
              <div className="p-4 flex flex-col h-[280px]">
                {/* Title */}
                <a 
                  href="https://www.indiegogo.com/projects/prodigy-new-age-hell-on-earth-book-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg font-medium text-gray-900 hover:text-black line-clamp-2"
                >
                  {product.name}
                </a>

                {/* Rating */}
                <div className="flex items-center mt-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">(24)</span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500 line-clamp-2 mt-2">{product.description}</p>
                
                {/* Price and Shipping */}
                <div className="space-y-1 mt-2">
                  <div className="text-lg font-bold text-gray-900">{product.price}</div>
                  <div className="text-sm text-gray-600">Included in campaign checkout</div>
                </div>

                {/* Add to Cart Button */}
                <button 
                  className="w-full py-2 px-4 rounded-[5px] text-sm font-medium bg-gray-100 text-gray-500 mt-auto cursor-pointer hover:bg-gray-200 transition-colors duration-200"
                >
                  View on IndieGoGo
                </button>

                {/* Included Items - Floating tooltip on hover */}
                <div className="relative group py-2">
                  <button className="text-xs text-gray-500 hover:text-gray-700 cursor-pointer flex items-center gap-1">
                    <svg 
                      className="w-3 h-3 transition-transform group-hover:translate-x-0.5" 
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                    </svg>
                    What's included
                  </button>
                  <div className="absolute bottom-full left-0 mb-2 w-64 bg-white shadow-lg rounded-lg p-3 hidden group-hover:block z-50">
                    <ul className="space-y-1">
                      {product.included.map((item, index) => (
                        <li key={index} className="text-xs text-gray-600">• {item}</li>
                      ))}
                    </ul>
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