'use client';

import React from 'react';
import { Home } from 'lucide-react';
import SearchSummaryBar from '@/components/Searchsummarybar';
import SkiPassCard from '@/components/SkiPassCard';

// Sample ski pass data
const skiPasses = [
  {
    id: '1',
    title: 'Subscription SkiStar All Year',
    description: 'SkiStar All Year is Scandinavia\'s largest mountain destination all year round! Ski & snowboard at Sälen, Vemdalen, Åre, Trysil and Hemsedal or hike and bike during the summer.',
    image: '/subscription-all-year.jpg',
    validFrom: 'November 2025',
    badge: 'The price is valid today (26/11-25)',
    buttonText: 'Purchase',
    infoText: undefined,
  },
  {
    id: '2',
    title: 'SkiStar Season Card',
    description: 'Unlimited skiing at all SkiStar destinations throughout the season. Perfect for frequent skiers who want maximum flexibility.',
    image: '/season-card.jpg',
    price: 7995,
    validFrom: 'December 2025',
    buttonText: 'Buy now',
    infoText: undefined,
  },
  {
    id: '3',
    title: 'Multi-day Pass',
    description: 'Flexible ski pass for multiple days. Choose between 3, 5, or 7 days of skiing at your preferred destination.',
    image: '/multi-day-pass.jpg',
    price: 2495,
    validFrom: 'January 2026',
    buttonText: 'Select days',
    infoText: undefined,
  },
  {
    id: '4',
    title: 'Day Pass',
    description: 'Perfect for a single day of skiing. Valid at all lifts and slopes at your chosen destination.',
    image: '/day-pass.jpg',
    price: 595,
    buttonText: 'Buy day pass',
    infoText: undefined,
  },
];

export default function SkiPassListingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-3 mb-6">
            <Home className="w-8 h-8 text-gray-900" />
            <h1 className="text-4xl font-bold text-gray-900">Buy/Reload Passport</h1>
          </div>

          {/* Search Summary */}
          <SearchSummaryBar
            destination="Normalfjället"
            date="Thursday 27 Nov. 2025"
            guests="Season Pass"
            onEdit={() => window.history.back()}
          />
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-[#8B1538] text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center font-medium">
            ALMOST FINISHED - BOOK SKIING AT SKISTAR.COM
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Ski Pass Listings */}
        <div className="space-y-6">
          {skiPasses.map((pass) => (
            <SkiPassCard
              key={pass.id}
              {...pass}
              onButtonClick={() => console.log(`Buying ${pass.title}`)}
            />
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
          <div className="flex items-start gap-3">
            <div className="shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">!</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                BROWSE INFORMATION
              </h3>
              <p className="text-gray-700">
                Find more information about our different ski passes, pricing options, and booking procedures. 
                Visit our help center for detailed guides and FAQs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
