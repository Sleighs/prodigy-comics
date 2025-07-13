'use client';

import { useState } from 'react';
import Image from 'next/image';
import ImageViewer from './ImageViewer';

interface CharacterGalleryProps {
  images: string[];
  characterName: string;
}

export default function CharacterGallery({ images, characterName }: CharacterGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage({ src: imageSrc, alt: `${characterName} Gallery Image` });
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4 blue-military-section-title">Gallery</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div 
            key={index}
            className="relative aspect-square cursor-zoom-in blue-military-card overflow-hidden hover:scale-105 transition-transform duration-200"
            onClick={() => handleImageClick(image)}
          >
            <Image
              src={image}
              alt={`${characterName} Gallery Image ${index + 1}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-200" />
          </div>
        ))}
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
    </div>
  );
} 