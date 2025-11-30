'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';

interface SkiSchoolCardProps {
  id: string;
  logo: string;
  title: string;
  badges: string[];
  description: string;
  price: number;
  placesLeft: number;
  availableGroups: number;
  onSelectGroup?: () => void;
}

const SkiSchoolCard: React.FC<SkiSchoolCardProps> = ({
  logo,
  title,
  badges,
  description,
  price,
  placesLeft,
  availableGroups,
  onSelectGroup,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-6">
        {/* Logo */}
        <div className="shrink-0">
          <div className="w-24 h-24 bg-linear-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-2xl font-bold">SKI</div>
              <div className="text-xs">SCHOOL</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>

          {/* Badges */}
          <div className="flex items-center gap-3 mb-3 flex-wrap">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-1 text-sm text-gray-700"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="uppercase text-xs font-medium">{badge}</span>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>

        {/* Price and Action */}
        <div className="shrink-0 text-right">
          <div className="mb-4">
            <div className="text-3xl font-bold text-gray-900">{price} SEK</div>
            <div className="text-sm text-orange-600 font-medium">
              +{placesLeft} PLACES LEFT
            </div>
          </div>

          <button
            onClick={onSelectGroup}
            className="bg-orange-600 text-white px-6 py-3 rounded font-bold hover:bg-orange-700 transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            {availableGroups} {availableGroups === 1 ? 'GROUP' : 'GROUPS'}
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkiSchoolCard;
