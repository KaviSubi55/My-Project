'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Banner - Left Side (Large) */}
          <div className="lg:col-span-8 relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden group cursor-pointer">
            {/* Background - Dark gradient */}
            <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-gray-800 to-black">
              {/* You can add background image here */}
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Discount Badge - Hexagon using Tailwind */}
            <div className="absolute top-4 left-4 z-10">
              <div 
                className="relative w-[180px] h-[180px] bg-[#C41E3A] flex items-center justify-center shadow-2xl"
                style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                }}
              >
                <div className="text-center text-white px-4">
                  <div className="text-sm font-medium">Up to</div>
                  <div className="text-6xl font-bold leading-none my-1">50%</div>
                  <div className="text-sm font-medium">at selected</div>
                  <div className="text-sm font-medium">accommodation</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 z-10">
              <p className="text-white text-lg mb-2 font-medium">
                Take the opportunity to book your ski trip now!
              </p>
              <h2 className="text-white text-5xl lg:text-6xl font-bold mb-4 flex items-center gap-4 group-hover:gap-6 transition-all">
                Black Week is here
                <ChevronRight className="w-12 h-12 shrink-0" />
              </h2>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
          </div>

          {/* Right Side Cards */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Top Card - Sports Holiday */}
            <div className="relative h-[250px] rounded-2xl overflow-hidden group cursor-pointer bg-linear-to-br from-blue-400 via-blue-300 to-blue-200">
              {/* You can add background image here */}
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/70 via-black/40 to-transparent z-10">
                <h3 className="text-white text-2xl lg:text-3xl font-bold mb-2 leading-tight">
                  Celebrate your sports holiday in the mountains
                </h3>
                <p className="text-white text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  From 3645 per person incl. SkiPass
                  <ChevronRight className="w-4 h-4 shrink-0" />
                </p>
              </div>
            </div>

            {/* Bottom Card - Opening Dates */}
            <div className="relative h-[250px] rounded-2xl overflow-hidden bg-[#C41E3A] text-white p-8 flex flex-col justify-between group cursor-pointer hover:bg-[#A01830] transition-colors shadow-lg">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                  We open on November 28th!!
                </h3>
              </div>
              <p className="text-white font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                See all official opening dates
                <ChevronRight className="w-5 h-5 shrink-0" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
