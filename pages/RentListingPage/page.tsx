'use client';

import React from 'react';
import { Home } from 'lucide-react';
import SearchSummaryBar from '@/components/Searchsummarybar';
import RentFilterBar from '@/components/RentFilterBar';
import RentCard from '@/components/RentCard';

// Sample rental equipment data
const rentals = [
  {
    id: '1',
    title: 'Premium Ski Package',
    description: 'Top-of-the-line ski equipment perfect for experienced skiers. Includes the latest models with advanced technology for optimal performance on all slopes.',
    image: '/premium-ski.jpg',
    category: 'Skis',
    includes: ['Skis', 'Ski boots', 'Poles', 'Helmet'],
    price: 450,
    buttonText: 'Rent now',
  },
  {
    id: '2',
    title: 'Standard Ski Package',
    description: 'Quality ski equipment suitable for intermediate skiers. Great value package with everything you need for a fantastic day on the slopes.',
    image: '/standard-ski.jpg',
    category: 'Skis',
    includes: ['Skis', 'Ski boots', 'Poles'],
    price: 295,
    buttonText: 'Rent now',
  },
  {
    id: '3',
    title: 'Snowboard Complete Set',
    description: 'Complete snowboard package with board, boots, and safety equipment. Perfect for snowboarders of all skill levels.',
    image: '/snowboard-set.jpg',
    category: 'Snowboard',
    includes: ['Snowboard', 'Snowboard boots', 'Helmet', 'Wrist guards'],
    price: 395,
    buttonText: 'Rent now',
  },
  {
    id: '4',
    title: 'Junior Ski Package',
    description: 'Specially designed equipment for young skiers. Safe, easy-to-use gear that helps children learn and enjoy skiing.',
    image: '/junior-ski.jpg',
    category: 'Junior',
    includes: ['Junior skis', 'Junior boots', 'Poles', 'Helmet'],
    price: 195,
    buttonText: 'Rent now',
    badge: 'Great for kids!',
  },
  {
    id: '5',
    title: 'Cross-Country Ski Set',
    description: 'Lightweight cross-country skiing equipment for exploring the scenic winter trails. Ideal for fitness and nature lovers.',
    image: '/cross-country.jpg',
    category: 'Cross-Country',
    includes: ['Cross-country skis', 'Boots', 'Poles'],
    price: 225,
    buttonText: 'Rent now',
  },
  {
    id: '6',
    title: 'Safety Equipment Package',
    description: 'Complete safety gear including helmet, goggles, and protective gear. Can be rented separately or as an add-on.',
    image: '/safety-gear.jpg',
    category: 'Safety',
    includes: ['Helmet', 'Goggles', 'Back protector', 'Gloves'],
    price: 150,
    buttonText: 'Add to rental',
  },
];

export default function RentListingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-3 mb-6">
            <Home className="w-8 h-8 text-gray-900" />
            <h1 className="text-4xl font-bold text-gray-900">Rent Equipment</h1>
          </div>

          {/* Search Summary */}
          <SearchSummaryBar
            destination="Åre"
            date="Saturday 30 Nov. 2025"
            guests="2 adults, 1 child"
            onEdit={() => window.history.back()}
          />

          {/* Promotional Code Link */}
          <div className="mt-4">
            <button className="text-gray-700 hover:text-[#C41E3A] font-medium underline">
              Discount code
            </button>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-blue-50 border-b border-blue-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-center text-blue-800 text-sm">
            📍 Pick up your equipment at the rental shop in your selected destination
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Bar */}
        <div className="mb-8">
          <RentFilterBar />
        </div>

        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Choose your equipment</h2>

        {/* Rental Listings */}
        <div className="space-y-6">
          {rentals.map((rental) => (
            <RentCard
              key={rental.id}
              {...rental}
              onButtonClick={() => console.log(`Renting ${rental.title}`)}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <button className="px-8 py-3 border-2 border-gray-300 rounded-full font-medium text-gray-900 hover:bg-gray-50 transition-colors">
            Show more equipment
          </button>
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
          <div className="flex items-start gap-3">
            <div className="shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">✓</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Free equipment adjustment & support
              </h3>
              <p className="text-gray-700">
                Our experienced staff will help you find the perfect equipment and make any necessary adjustments. 
                Need help during your rental? Visit our rental shop anytime during operating hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
