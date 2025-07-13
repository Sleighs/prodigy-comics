'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import { useProducts, WooCommerceProduct } from '@/contexts/ProductContext';
import { useCart } from '@/contexts/CartContext';
import ImageViewer from '@/components/ImageViewer';
import PageHeader from '@/components/PageHeader';

export default function ProductDetailPage() {
  const params = useParams();
  const { products, loading, error, usingSampleData } = useProducts();
  const { addToCart } = useCart();
  
  // Debug: Log the usingSampleData value
  console.log('usingSampleData:', usingSampleData);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  // Find the product by slug
  const product = products.find(p => p.slug === params.slug);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      setShowAddedMessage(true);
      setTimeout(() => setShowAddedMessage(false), 2000);
    }
  };

  const handleImageClick = (imageSrc: string, imageAlt: string) => {
    setSelectedImage({ src: imageSrc, alt: imageAlt });
  };

  // Show loading state
  if (loading) {
    return (
      <main className="min-h-screen pt-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading product...</p>
          </div>
        </div>
      </main>
    );
  }

  // Show error state
  if (error) {
    return (
      <main className="min-h-screen pt-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <p className="text-red-600 mb-4">Error loading product: {error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Try Again
            </button>
          </div>
        </div>
      </main>
    );
  }

  // Show not found state
  if (!product) {
    return (
      <main className="min-h-screen pt-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
            <a 
              href="/store"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
            >
              Back to Store
            </a>
          </div>
        </div>
      </main>
    );
  }

  // Helper function to render rating stars
  const renderRating = (rating: string, count: number) => {
    const ratingValue = parseFloat(rating);
    return (
      <div className="flex items-center">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${i < ratingValue ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="ml-2 text-sm text-gray-500">({count} reviews)</span>
      </div>
    );
  };

  return (
    <main className="min-h-screen pt-16 bg-gray-50">
      {/* Sample Data Notice */}
      {usingSampleData && (
        <div className="max-w-7xl mx-auto px-4 py-2 md:py-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 md:p-4 mb-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-0.5">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Demo Mode:</strong> This is sample product data. The WooCommerce API is currently unavailable.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-2 md:py-4">
        <nav className="flex flex-col sm:flex-row sm:items-center justify-between gap-2" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <a href="/store" className="text-gray-500 hover:text-gray-700 transition-colors">
                Store
              </a>
            </li>
            <li>
              <span className="text-gray-400 mx-2">/</span>
            </li>
            <li>
              <span className="text-gray-900 font-medium">{product.name}</span>
            </li>
          </ol>
          <a 
            href="/store"
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors text-sm font-medium"
          >
            ← Back to Store
          </a>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4 md:py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-8">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div 
                className="relative aspect-square cursor-zoom-in bg-gray-100 rounded-lg overflow-hidden shadow-md"
                onClick={() => handleImageClick(
                  product.images[0]?.src || '/images/placeholder.png', 
                  product.name
                )}
              >
                <Image
                  src={product.images[0]?.src || '/images/placeholder.png'}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
                {/* Sale Badge */}
                {product.on_sale && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                    SALE
                  </div>
                )}
                {/* Stock Status */}
                {product.stock_status === 'outofstock' && (
                  <div className="absolute top-4 left-4 bg-gray-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                    OUT OF STOCK
                  </div>
                )}
              </div>

              {/* Thumbnail Images */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.slice(0, 4).map((image, index) => (
                    <div 
                      key={image.id}
                      className="relative aspect-square cursor-zoom-in bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                      onClick={() => handleImageClick(image.src, image.alt)}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Title and Rating */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                {product.average_rating !== "0.00" && (
                  <div className="mt-2">
                    {renderRating(product.average_rating, product.rating_count)}
                  </div>
                )}
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  {product.on_sale && (
                    <span className="text-xl text-gray-500 line-through">
                      ${product.regular_price}
                    </span>
                  )}
                  <span className="text-3xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  {product.shipping_required ? 'Shipping calculated at checkout' : 'Digital product'}
                </p>
              </div>

              {/* Description */}
              {product.short_description && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                  <div 
                    className="text-gray-600 prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: product.short_description }}
                  />
                </div>
              )}

              {/* Categories and Tags */}
              <div className="space-y-4">
                {product.categories.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.categories.map((category) => (
                        <span 
                          key={category.id}
                          className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                        >
                          {category.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {product.tags.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <span 
                          key={tag.id}
                          className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Add to Cart Section */}
              <div className="space-y-4 pt-6 border-t border-gray-200">
                {/* Quantity Selector */}
                <div className="flex items-center space-x-4">
                  <label htmlFor="quantity" className="text-sm font-medium text-gray-700">
                    Quantity:
                  </label>
                  <select
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Add to Cart Button */}
                <button 
                  className={`w-full py-3 px-6 rounded-md text-lg font-medium transition-colors duration-200 ${
                    product.purchasable && product.stock_status === 'instock'
                      ? 'bg-black text-white hover:bg-gray-800 cursor-pointer shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!product.purchasable || product.stock_status !== 'instock'}
                  onClick={handleAddToCart}
                >
                  {product.stock_status === 'instock' ? 'Add to Cart' : 'Out of Stock'}
                </button>

                {/* Added Message */}
                {showAddedMessage && (
                  <div className="bg-green-500 text-white text-sm font-medium px-4 py-2 rounded-md text-center shadow-lg">
                    Added to cart!
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Details</h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Product ID:</dt>
                    <dd className="text-gray-900">{product.id}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Stock Status:</dt>
                    <dd className="text-gray-900 capitalize">{product.stock_status}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Purchasable:</dt>
                    <dd className="text-gray-900">{product.purchasable ? 'Yes' : 'No'}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Full Description */}
        {product.description && (
          <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Full Description</h2>
            <div 
              className="prose prose-lg max-w-none text-gray-600"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </div>
        )}
      </div>

      {/* Image Viewer Modal */}
      {selectedImage && (
        <ImageViewer
          src={selectedImage.src}
          alt={selectedImage.alt}
          isOpen={true}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </main>
  );
} 