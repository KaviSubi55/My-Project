'use client';

import React from 'react';
import { Home } from 'lucide-react';
import SearchSummaryBar from '@/components/Searchsummarybar';
import PackageFilterBar from '@/components/PackageFilterBar';
import PackageCard from '@/components/PackageCard';

// Sample package data
const packages = [
  {
    id: '1',
    title: 'Short week at Högfjället in Sälen',
    location: 'The seal',
    images: ['/package-1.jpg', '/package-2.jpg'],
    days: 4,
    propertyType: 'Apartment',
    includes: 'incl. SkiPass Högfjället',
    recommended: true,
    price: 1775,
    multipleArrivalDates: true,
  },
  {
    id: '2',
    title: 'Ski days at Skistar Lodge Lindvallen',
    location: 'The seal',
    images: ['/package-3.jpg', '/package-4.jpg'],
    days: 5,
    dates: 'Jan. 31 - Feb. 5',
    propertyType: 'Apartment',
    includes: 'incl. Ski Pass',
    recommended: true,
    price: 3995,
  },
  {
    id: '3',
    title: 'Sports holiday in Sälen',
    location: 'The seal',
    images: ['/package-5.jpg', '/package-6.jpg'],
    days: 7,
    propertyType: 'Apartment',
    includes: 'incl. Ski Pass',
    recommended: true,
    price: 4995,
    multipleArrivalDates: true,
  },
];

export default function PackagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-3 mb-6">
            <Home className="w-8 h-8 text-gray-900" />
            <h1 className="text-4xl font-bold text-gray-900">Package offers</h1>
          </div>

          {/* Search Summary */}
          <SearchSummaryBar
            destination="The seal"
            date="2025-11-27 - 2026-06-04"
            guests="1 adult"
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

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Bar */}
        <div className="mb-8">
          <PackageFilterBar />
        </div>

        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Choose package</h2>

        {/* Package Listings */}
        <div className="space-y-6">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <button className="px-8 py-3 border-2 border-gray-300 rounded-full font-medium text-gray-900 hover:bg-gray-50 transition-colors">
            Load more packages
          </button>
        </div>
      </div>
    </div>
  );
}
