"use client";

import Image from 'next/image';
import { useState } from 'react';
import { useProducts, WooCommerceProduct } from '@/contexts/ProductContext';
import { useCart } from '@/contexts/CartContext';

interface WooCommerceProductsSectionProps {
  onImageSelect: (image: { src: string; alt: string }) => void;
}

interface CartItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
}

export default function WooCommerceProductsSection({ 
  onImageSelect 
}: WooCommerceProductsSectionProps) {
  const { products, loading, error, getCategories, usingSampleData } = useProducts();
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAddedMessage, setShowAddedMessage] = useState<number | null>(null);

  // Get unique categories from products
  const categories = getCategories();

  const handleQuickAdd = (product: WooCommerceProduct) => {
    addToCart(product, 1);

    // Show added message
    setShowAddedMessage(product.id);
    setTimeout(() => setShowAddedMessage(null), 2000);
  };

  // Filter products based on active category
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => 
        product.categories.some(cat => cat.slug === activeCategory) ||
        product.tags.some(tag => tag.slug === activeCategory)
      );

  // Helper function to render rating stars
  const renderRating = (rating: string, count: number) => {
    const ratingValue = parseFloat(rating);
    return (
      <div className="flex items-center">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${i < ratingValue ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="ml-2 text-sm text-gray-500">({count})</span>
      </div>
    );
  };

  // Show loading state
  if (loading) {
    return (
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading products...</p>
          </div>
        </div>
      </section>
    );
  }

  // Show error state
  if (error) {
    return (
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12">
            <p className="text-red-600 mb-4">Error loading products: {error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Sample Data Notice */}
        {usingSampleData && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Demo Mode:</strong> Showing sample products. WooCommerce API is currently unavailable.
                </p>
              </div>
            </div>
          </div>
        )}

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
          {categories.map((category) => (
            <button 
              key={category.id}
              className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${
                activeCategory === category.slug 
                  ? 'bg-black text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveCategory(category.slug)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="product-group relative bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Product Image */}
              <div 
                className="relative aspect-square cursor-zoom-in"
                onClick={() => onImageSelect({ 
                  src: product.images[0]?.src || '/images/placeholder.png', 
                  alt: product.name 
                })}
              >
                <Image
                  src={product.images[0]?.src || '/images/placeholder.png'}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform product-group-hover:scale-105"
                />
                {/* Sale Badge */}
                {product.on_sale && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    SALE
                  </div>
                )}
                {/* Stock Status */}
                {product.stock_status === 'outofstock' && (
                  <div className="absolute top-2 left-2 bg-gray-500 text-white text-xs font-bold px-2 py-1 rounded">
                    OUT OF STOCK
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-3 md:p-4 flex flex-col h-[280px] md:h-[320px]">
                {/* Title */}
                <a 
                  href={`/store/product/${product.slug}`}
                  className="block text-lg font-medium text-gray-900 hover:text-black line-clamp-2"
                >
                  {product.name}
                </a>

                {/* Rating */}
                {product.average_rating !== "0.00" && (
                  <div className="mt-2">
                    {renderRating(product.average_rating, product.rating_count)}
                  </div>
                )}

                {/* Description */}
                <p className="text-sm text-gray-500 line-clamp-2 mt-2">
                  {product.short_description.replace(/<[^>]*>/g, '')}
                </p>
                
                {/* Price and Shipping */}
                <div className="space-y-1 mt-2">
                  <div className="flex items-center gap-2">
                    {product.on_sale && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.regular_price}
                      </span>
                    )}
                    <div className="text-lg font-bold text-gray-900">
                      ${product.price}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    {product.shipping_required ? 'Shipping calculated at checkout' : 'Digital product'}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-auto">
                  <a 
                    href={`/store/product/${product.slug}`}
                    className="flex-1 py-2 px-4 rounded-[5px] text-sm font-medium bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors duration-200 text-center"
                  >
                    View Details
                  </a>
                <button 
                    className={`flex-1 py-2 px-4 rounded-[5px] text-sm font-medium transition-colors duration-200 ${
                    product.purchasable && product.stock_status === 'instock'
                      ? 'bg-black text-white hover:bg-gray-800 cursor-pointer'
                      : 'bg-gray-100 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!product.purchasable || product.stock_status !== 'instock'}
                  onClick={() => product.purchasable && product.stock_status === 'instock' && handleQuickAdd(product)}
                >
                  {product.stock_status === 'instock' ? 'Add to Cart' : 'Out of Stock'}
                </button>
                </div>

                {/* Added Message */}
                {showAddedMessage === product.id && (
                  <div className="absolute top-2 left-2 right-2 bg-green-500 text-white text-xs font-medium px-3 py-2 rounded shadow-lg">
                    Added to cart!
                  </div>
                )}

                {/* Categories */}
                <div className="flex flex-wrap gap-1 mt-2">
                  {product.categories.map((category) => (
                    <span 
                      key={category.id}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                    >
                      {category.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
} 