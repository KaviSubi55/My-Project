'use client';

import React from 'react';
import { Info, ExternalLink } from 'lucide-react';

const InfoBanner: React.FC = () => {
  return (
    <div className="w-full bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
      <div className="flex items-start gap-3">
        <Info className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Limited opening hours</h4>
          <p className="text-gray-700 mb-3">
            During spring, summer and autumn we have limited opening hours in our lifts and
            restaurants/shops/rentals.
          </p>
          <a
            href="#"
            className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2"
          >
            Our opening hours
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;
