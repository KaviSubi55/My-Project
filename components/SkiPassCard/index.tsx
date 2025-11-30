'use client';

import React from 'react';
import { Calendar, Info } from 'lucide-react';

interface SkiPassCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  validFrom?: string;
  price?: number;
  badge?: string;
  infoText?: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const SkiPassCard: React.FC<SkiPassCardProps> = ({
  title,
  description,
  image,
  validFrom,
  price,
  badge,
  infoText,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
        {/* Image */}
        <div className="md:col-span-5 relative">
          <div className="relative aspect-4/3 bg-gray-200">
            <img
              src={image || '/ski-pass-placeholder.jpg'}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-7 flex flex-col p-6">
          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-3 self-start">
              <Info className="w-4 h-4" />
              {badge}
            </div>
          )}

          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>

          {/* Description */}
          <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>

          {/* Valid From */}
          {validFrom && (
            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <Calendar className="w-5 h-5" />
              <span>Valid from {validFrom}</span>
            </div>
          )}

          {/* Info Text */}
          {infoText && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <p className="text-yellow-800 text-sm">{infoText}</p>
            </div>
          )}

          {/* Price and Button */}
          <div className="mt-auto flex items-center justify-between">
            {price && (
              <div>
                <div className="text-sm text-gray-600">From</div>
                <div className="text-3xl font-bold text-[#C41E3A]">
                  {price.toLocaleString()} SEK
                </div>
              </div>
            )}

            <button
              onClick={onButtonClick}
              className="bg-[#C41E3A] text-white px-8 py-3 rounded-full font-bold hover:bg-[#A01830] transition-colors shadow-lg"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkiPassCard;
