'use client';

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      {/* Top Red Section with Destinations */}
      <div className="bg-[#C41E3A]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* SkiStar Vacation Club */}
          <div className="text-center mb-6">
            <Link 
              href="/vacation-club" 
              className="text-white text-lg hover:underline"
            >
              SkiStar Vacation Club
            </Link>
          </div>

          {/* Destinations */}
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {/* Sälen */}
            <Link 
              href="/destination/salen" 
              className="text-white hover:opacity-80 transition-opacity"
            >
              <span className="text-2xl font-serif italic">Sälen</span>
            </Link>

            {/* ÅRE */}
            <Link 
              href="/destination/are" 
              className="text-white hover:opacity-80 transition-opacity"
            >
              <span className="text-2xl font-bold tracking-wider">ÅRE</span>
            </Link>

            {/* VEMDALEN */}
            <Link 
              href="/destination/vemdalen" 
              className="text-white hover:opacity-80 transition-opacity"
            >
              <span className="text-xl font-bold tracking-widest">VEMDALEN</span>
            </Link>

            {/* TRYSIL */}
            <Link 
              href="/destination/trysil" 
              className="text-white hover:opacity-80 transition-opacity"
            >
              <span className="text-2xl font-bold tracking-widest">TRYSIL</span>
            </Link>

            {/* HEMSEDAL */}
            <Link 
              href="/destination/hemsedal" 
              className="text-white hover:opacity-80 transition-opacity"
            >
              <span className="text-xl font-bold tracking-wider">HEMSEDAL</span>
            </Link>

            {/* STOCKHOLM Hammarbybacken */}
            <Link 
              href="/destination/stockholm" 
              className="text-white hover:opacity-80 transition-opacity"
            >
              <div className="text-center">
                <div className="text-xl font-bold tracking-widest">STOCKHOLM</div>
                <div className="text-xs tracking-wide">HAMMARBYBACKEN</div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom White Section with Logo and Company Info */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* SkiStar Logo */}
          <div className="text-center mb-4">
            <Link href="/" className="inline-block">
              <div className="text-4xl font-bold text-[#C41E3A] tracking-tight">
                skistar
              </div>
            </Link>
          </div>

          {/* Company Information */}
          <div className="text-center text-gray-600 text-sm">
            <p>SkiStar AB, Sälfjällsgården, 780 91 Sälen Corporate ID: 556093-6949</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
