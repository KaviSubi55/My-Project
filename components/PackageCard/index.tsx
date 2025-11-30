'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Building2, Ticket, ThumbsUp } from 'lucide-react';

interface PackageCardProps {
  id: string;
  title: string;
  location: string;
  images: string[];
  days: number;
  dates?: string;
  propertyType: string;
  includes: string;
  recommended?: boolean;
  price: number;
  multipleArrivalDates?: boolean;
}

const PackageCard: React.FC<PackageCardProps> = ({
  title,
  location,
  images,
  days,
  dates,
  propertyType,
  includes,
  recommended = false,
  price,
  multipleArrivalDates = false,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        {/* Image Gallery */}
        <div className="md:col-span-5 relative group">
          <div className="relative aspect-4/3 bg-gray-200">
            {/* SkiStar Recommends Badge */}
            {recommended && (
              <div className="absolute top-0 left-0 bg-[#C41E3A] text-white px-4 py-2 flex items-center gap-2 z-10 font-bold">
                <ThumbsUp className="w-5 h-5" />
                SkiStar recommends
              </div>
            )}

            {/* Image */}
            <img
              src={images[currentImageIndex] || '/placeholder-package.jpg'}
              alt={title}
              className="w-full h-full object-cover"
            />

            {/* Includes Badge */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-2 rounded-lg flex items-center gap-2 shadow-lg">
              <Ticket className="w-5 h-5" />
              <span className="text-sm font-medium">{includes}</span>
            </div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-900" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50"
                >
                  <ChevronRight className="w-6 h-6 text-gray-900" />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-7 flex flex-col p-6">
          {/* Header */}
          <div className="mb-4">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <span>{location}</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Building2 className="w-4 h-4" />
                <span className="text-sm">{propertyType}</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
          </div>

          {/* Package Details */}
          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-2 text-gray-700">
              <span className="font-bold text-3xl">{days} days</span>
            </div>
            {dates && (
              <div className="text-gray-600">{dates}</div>
            )}
            {multipleArrivalDates && (
              <div className="text-gray-600">Multiple arrival dates available</div>
            )}
          </div>

          {/* Price and CTA */}
          <div className="mt-auto flex items-end justify-between">
            <div>
              <div className="text-sm text-gray-600 mb-1">Starting price per person</div>
              <div className="text-3xl font-bold text-[#C41E3A]">
                {price.toLocaleString()} SEK
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
