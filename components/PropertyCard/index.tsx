'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Building2, Bed, Mountain, Snowflake, Plane, Train, Key } from 'lucide-react';

interface PropertyCardProps {
  id: string;
  name: string;
  location: string;
  area: string;
  images: string[];
  vacancies: number;
  description: string;
  propertyType: string;
  beds: string;
  distance: string;
  rating?: number;
  amenities: string[];
  price: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  name,
  location,
  area,
  images,
  vacancies,
  description,
  propertyType,
  beds,
  distance,
  rating,
  amenities,
  price,
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

  const getAmenityIcon = (amenity: string) => {
    if (amenity.includes('air')) return <Plane className="w-4 h-4" />;
    if (amenity.includes('train')) return <Train className="w-4 h-4" />;
    if (amenity.includes('key') || amenity.includes('Mobile')) return <Key className="w-4 h-4" />;
    return <Snowflake className="w-4 h-4" />;
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6">
        {/* Image Gallery */}
        <div className="md:col-span-5 relative group">
          <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-gray-200">
            <img
              src={images[currentImageIndex] || '/placeholder-accommodation.jpg'}
              alt={name}
              className="w-full h-full object-cover"
            />
            
            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
              {currentImageIndex + 1}/{images.length}
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
        <div className="md:col-span-7 flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
                  {vacancies} {vacancies === 1 ? 'vacancy' : 'vacancies'}
                </span>
              </div>
              <p className="text-gray-600">{area}, {location}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-4 line-clamp-3">{description}</p>

          {/* Property Details */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
            <div className="flex items-center gap-2 text-gray-700">
              <Building2 className="w-5 h-5" />
              <span className="text-sm">{propertyType}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Bed className="w-5 h-5" />
              <span className="text-sm">{beds}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Mountain className="w-5 h-5" />
              <span className="text-sm">{distance}</span>
            </div>
          </div>

          {/* Amenities */}
          <div className="flex flex-wrap gap-3 mb-4">
            {rating && (
              <div className="flex items-center gap-1 text-gray-700">
                <Snowflake className="w-4 h-4" />
                <span className="text-sm font-medium">{rating}</span>
              </div>
            )}
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center gap-1 text-gray-600">
                {getAmenityIcon(amenity)}
                <span className="text-sm">{amenity}</span>
              </div>
            ))}
          </div>

          {/* Price and CTA */}
          <div className="mt-auto flex items-end justify-between">
            <div>
              <div className="text-sm text-gray-600 mb-1">From</div>
              <div className="text-3xl font-bold text-[#C41E3A]">
                {price.toLocaleString()} SEK
              </div>
            </div>
            <button className="bg-[#C41E3A] text-white px-8 py-3 rounded-full font-bold hover:bg-[#A01830] transition-colors flex items-center gap-2">
              View properties
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
