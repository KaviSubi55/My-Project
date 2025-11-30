'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const SkiSchoolSearch: React.FC = () => {
  const router = useRouter();

  const handleFindSkiSchool = () => {
    router.push('/ski-school');
  };

  return (
    <div className="bg-gray-100 py-6">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          {/* Search Button */}
          <button 
            onClick={handleFindSkiSchool}
            className="bg-[#C41E3A] text-white px-12 py-4 rounded-full font-bold hover:bg-[#A01830] transition-colors shadow-lg"
          >
            Find ski school
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkiSchoolSearch;
