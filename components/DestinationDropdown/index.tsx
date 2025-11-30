'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface Destination {
  label: string;
  href: string;
}

const destinations: Destination[] = [
  { label: 'The seal', href: '/destinations/the-seal' },
  { label: 'Åre', href: '/destinations/are' },
  { label: 'Vemdalen', href: '/destinations/vemdalen' },
  { label: 'Trysil', href: '/destinations/trysil' },
  { label: 'Hemsedal', href: '/destinations/hemsedal' },
  { label: 'Hammarbybacken', href: '/destinations/hammarbybacken' },
];

const DestinationDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Destinations Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        className="flex items-center gap-1 text-gray-900 hover:text-[#C41E3A] transition-colors font-medium px-4 py-2"
      >
        Destinations
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
          onMouseLeave={() => setIsOpen(false)}
        >
          {destinations.map((destination) => (
            <Link
              key={destination.label}
              href={destination.href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#C41E3A] transition-colors"
            >
              {destination.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DestinationDropdown;
