'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';

const PackageFilterBar: React.FC = () => {
  return (
    <div className="w-full flex items-center gap-4 flex-wrap">
      {/* Type of package */}
      <div className="relative">
        <button className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-50 transition-colors">
          Type of packa...
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Package length */}
      <div className="relative">
        <button className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-50 transition-colors">
          Package length
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Type of accommodation */}
      <div className="relative">
        <button className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-50 transition-colors">
          Type of acco...
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Sort Dropdown */}
      <div className="relative">
        <button className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-50 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
          </svg>
          Recommended
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PackageFilterBar;
