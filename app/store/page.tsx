'use client'

import Image from 'next/image';
import { useState } from 'react';
import ImageViewer from '@/components/ImageViewer';
import PageHeader from '../../components/PageHeader';
import FeaturedSection from '@/components/FeaturedSection';
import AllProductsSection from '@/components/AllProductsSection';
import ModernStoreCTA from '@/components/ModernStoreCTA';
import '../../styles/military-theme.css';
import ModernProductsSection from '@/components/ModernProductsSection';
import ModernFeaturedSection from '@/components/ModernFeaturedSection';
// import WooShop from '@/components/WooShop';

export default function StorePage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

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

      {/* WooCommerce Shop Section */}
      {/* <WooShop /> */}

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