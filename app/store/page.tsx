'use client'

import Image from 'next/image';
import { useState } from 'react';
import ImageViewer from '@/components/ImageViewer';
import PageHeader from '../../components/PageHeader';
import FeaturedSection from '@/components/FeaturedSection';
import AllProductsSection from '@/components/AllProductsSection';
import '../../styles/military-theme.css';
import ModernProductsSection from '@/components/ModernProductsSection';
import ModernFeaturedSection from '@/components/ModernFeaturedSection';

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
      {/* <FeaturedSection onImageSelect={setSelectedImage} /> */}

      {/* All Products Section */}
      {/* <AllProductsSection onImageSelect={setSelectedImage} /> */}

      {/* Modern Featured Section */}
      <ModernFeaturedSection onImageSelect={setSelectedImage} />

      {/* Modern Products Section */}
      <ModernProductsSection onImageSelect={setSelectedImage} />

      {/* Store CTA Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
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
              <h2 className="text-3xl font-bold mb-4 military-title">Join the Prodigy Universe</h2>
              <p className="text-gray-300 mb-6 military-description">
                Be part of the revolution in comic storytelling. Our unique military-themed universe
                brings together action, drama, and cutting-edge storytelling.
              </p>
              <button className="military-button">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </section>

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