'use client';

import React, { useState } from 'react';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

const FilterBar: React.FC = () => {
  const [showType, setShowType] = useState<'areas' | 'accommodations'>('areas');
  const [sortBy, setSortBy] = useState('recommended');

  return (
    <div className="w-full flex items-center justify-between gap-4 flex-wrap">
      {/* Left side - Filter and Sort */}
      <div className="flex items-center gap-4">
        {/* Filter Button */}
        <button className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-50 transition-colors">
          <SlidersHorizontal className="w-5 h-5" />
          Filter
        </button>

        {/* Sort Dropdown */}
        <div className="relative">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-300 text-gray-900 font-medium hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
            </svg>
            Recommended
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Right side - Show toggle */}
      <div className="flex items-center gap-2">
        <span className="text-gray-700 font-medium">Show:</span>
        <button
          onClick={() => setShowType('areas')}
          className={`px-4 py-2 font-medium transition-colors ${
            showType === 'areas'
              ? 'text-[#C41E3A] underline decoration-2 underline-offset-4'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Areas
        </button>
        <button
          onClick={() => setShowType('accommodations')}
          className={`px-4 py-2 font-medium transition-colors ${
            showType === 'accommodations'
              ? 'text-[#C41E3A] underline decoration-2 underline-offset-4'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Accommodations
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
