'use client';

import React, { useState } from 'react';

interface DurationOption {
  days: number;
  vacancies: number;
  price: number | null;
  available: boolean;
}

const durationOptions: DurationOption[] = [
  { days: 7, vacancies: 0, price: null, available: false },
  { days: 6, vacancies: 0, price: null, available: false },
  { days: 5, vacancies: 0, price: null, available: false },
  { days: 4, vacancies: 20, price: 3590, available: true },
  { days: 3, vacancies: 20, price: 2580, available: true },
  { days: 2, vacancies: 20, price: 1850, available: true },
  { days: 1, vacancies: 20, price: 1410, available: true },
];

const DurationTabs: React.FC = () => {
  const [selectedDuration, setSelectedDuration] = useState(1);

  return (
    <div className="w-full">
      <div className="flex items-start gap-4 overflow-x-auto pb-4">
        {durationOptions.map((option) => (
          <button
            key={option.days}
            onClick={() => option.available && setSelectedDuration(option.days)}
            disabled={!option.available}
            className={`shrink-0 text-center transition-colors ${
              option.available ? 'cursor-pointer' : 'cursor-not-allowed'
            }`}
          >
            <div
              className={`text-2xl font-medium mb-1 ${
                selectedDuration === option.days && option.available
                  ? 'text-[#C41E3A]'
                  : option.available
                  ? 'text-gray-900'
                  : 'text-gray-400'
              }`}
            >
              {option.days} {option.days === 1 ? 'day' : 'days'}
            </div>
            <div
              className={`text-sm ${
                option.available ? 'text-gray-600' : 'text-gray-400'
              }`}
            >
              {option.available ? `${option.vacancies} vacancies` : '0 vacancies'}
            </div>
            <div
              className={`text-sm font-medium ${
                selectedDuration === option.days && option.available
                  ? 'text-[#C41E3A]'
                  : option.available
                  ? 'text-gray-900'
                  : 'text-gray-400'
              }`}
            >
              {option.available ? `From ${option.price?.toLocaleString()} SEK` : 'Not Available'}
            </div>
            {selectedDuration === option.days && option.available && (
              <div className="w-full h-0.5 bg-[#C41E3A] mt-2" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DurationTabs;
