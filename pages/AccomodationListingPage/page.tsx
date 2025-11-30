'use client';

import React from 'react';
import { Home } from 'lucide-react';
import SearchSummaryBar from '@/components/Searchsummarybar';
import DurationTabs from '@/components/DurationTabs';
import FilterBar from '@/components/FilterBar';
import InfoBanner from '@/components/InfoBanner';
import PropertyCard from '@/components/PropertyCard';

// Sample property data
const properties = [
  {
    id: '1',
    name: 'Brown hill',
    location: 'Åre Village',
    area: 'Åre',
    images: [
      '/brown-hill-1.jpg',
      '/brown-hill-2.jpg',
      '/brown-hill-3.jpg',
    ],
    vacancies: 2,
    description:
      'This apartment accommodation is within walking distance of the ski slopes and the village square. The apartments are suitable for both larger groups and families and are located close to the SkiStarshop, grocery store, bakery, restaurant and popular nightclub in the middle of the area.',
    propertyType: 'Apartment',
    beds: '4-8 beds',
    distance: '470-490 m slope/lift',
    rating: 4,
    amenities: ['Good choice for air travelers', 'Good choice for train travelers', 'Mobile key'],
    price: 1695,
  },
  {
    id: '2',
    name: 'Högåsstigen',
    location: 'Bear',
    area: 'Åre',
    images: [
      '/hogasstigen-1.jpg',
      '/hogasstigen-2.jpg',
    ],
    vacancies: 1,
    description:
      'Högåsstigen is located in Västra Björnen, an area with the best location in the mountains. Optimal conditions for skiing and accommodation in the middle of the ski system. Fantastic views of the top of Åreskutan to the west and Renfjället and Lake Åresjön to the south.',
    propertyType: 'Apartment',
    beds: '4-6 beds',
    distance: '0-50 m slope/lift',
    rating: 4,
    amenities: ['Ski in/ski out', 'Good choice for train travelers', 'Mountain views'],
    price: 2195,
  },
];

export default function AccommodationListingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-3 mb-6">
            <Home className="w-8 h-8 text-gray-900" />
            <h1 className="text-4xl font-bold text-gray-900">Find accommodation</h1>
          </div>

          {/* Search Summary - Static values */}
          <SearchSummaryBar
            destination="Åre"
            date="Tue, 25 Nov. 2025"
            guests="2 adults"
            onEdit={() => window.history.back()}
          />

          {/* Promotional Code Link */}
          <div className="mt-4">
            <button className="text-gray-700 hover:text-[#C41E3A] font-medium underline">
              Promotional code
            </button>
          </div>
        </div>
      </div>

      {/* Duration Selection */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <DurationTabs />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Bar */}
        <div className="mb-6">
          <FilterBar />
        </div>

        {/* Info Banner */}
        <div className="mb-8">
          <InfoBanner />
        </div>

        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Select area of destination</h2>

        {/* Property Listings */}
        <div className="space-y-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <button className="px-8 py-3 border-2 border-gray-300 rounded-full font-medium text-gray-900 hover:bg-gray-50 transition-colors">
            Load more properties
          </button>
        </div>
      </div>
    </div>
  );
}
