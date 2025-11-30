'use client';

import React from 'react';
import { Edit2 } from 'lucide-react';

interface SearchSummaryBarProps {
  destination: string;
  date: string;
  guests: string;
  onEdit?: () => void;
}

const SearchSummaryBar: React.FC<SearchSummaryBarProps> = ({
  destination,
  date,
  guests,
  onEdit,
}) => {
  return (
    <div className="w-full bg-white border border-gray-300 rounded-full px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg font-medium text-gray-900">{destination}</div>
          <div className="text-sm text-gray-600">
            {date} | {guests}
          </div>
        </div>
        <button
          onClick={onEdit}
          className="flex items-center gap-2 text-gray-700 hover:text-[#C41E3A] transition-colors font-medium"
        >
          Change
          <Edit2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchSummaryBar;
