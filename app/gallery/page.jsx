'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FadeInView } from '@/components/animations/motion-container';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: '/image1.jpg', alt: 'Main Building' },
    { src: '/image2.jpg', alt: 'Garden Area' },
    { src: '/image3.jpg', alt: 'Common Area' },
    { src: '/image4.jpg', alt: 'Facility Image' },
    { src: '/image5.jpg', alt: 'Facility Image' },
    { src: '/image6.jpg', alt: 'Facility Image' },
    { src: '/image7.jpg', alt: 'Facility Image' },
    { src: '/image8.jpg', alt: 'Facility Image' },
    { src: '/image9.jpg', alt: 'Facility Image' },
    { src: '/image10.jpg', alt: 'Facility Image' },
    { src: '/image11.jpg', alt: 'Facility Image' },
    { src: '/image12.jpg', alt: 'Facility Image' },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-12 text-4xl font-bold text-center gradient-text">
        Photo Gallery
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <FadeInView key={index}>
            <div 
              className="relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </FadeInView>
        ))}
      </div>

      {/* Modal for full-size image view */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-4xl aspect-video"
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
