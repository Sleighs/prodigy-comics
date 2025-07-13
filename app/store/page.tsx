'use client'

import Image from 'next/image';
import { useState } from 'react';

import ImageViewer from '@/components/ImageViewer';
import PageHeader from '../../components/PageHeader';
import FeaturedSection from '@/components/FeaturedSection';
import AllProductsSection from '@/components/AllProductsSection';
import ModernStoreCTA from '@/components/ModernStoreCTA';
import ModernProductsSection from '@/components/ModernProductsSection';
import ModernFeaturedSection from '@/components/ModernFeaturedSection';
import WooShop from '@/components/WooShop';
import WooCommerceProductsSection from '@/components/WooCommerceProductsSection';
import { useProducts } from '@/contexts/ProductContext';

import '../../styles/military-theme.css';

export default function StorePage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const { usingSampleData } = useProducts();
  
  // Debug: Log the usingSampleData value
  console.log('Store usingSampleData:', usingSampleData);

  return (
    <main className="min-h-screen pt-16 military-container">
      {/* Hero Section */}
      <PageHeader 
        title="Store"
        backgroundImage="/images/prodigy-banner.png"
        subtitle="Official Prodigy Comics and Merchandise"
        tailwindStyles="bg-gradient-to-b from-gray-900 to-black military-header"
      />

      {/* Featured Section */}
      <ModernFeaturedSection onImageSelect={setSelectedImage} />

      {/* All Products Section */}
      <ModernProductsSection onImageSelect={setSelectedImage} />

      {/* Sample Data Notice */}
      {usingSampleData && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 md:p-4 mb-6 md:mb-8">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-0.5">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Demo Mode:</strong> Currently displaying sample product data. The WooCommerce API is offline or unavailable.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* WooCommerce Shop Section */}
      {/* <WooCommerceProductsSection 
        onImageSelect={setSelectedImage}
      /> */}

      {/* Store CTA Section */}
      <ModernStoreCTA />

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