'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { LanguageSelectorProps } from '@/utils/types';

const languages = [
  { 
    code: 'SE', 
    flag: '/swe-flag.png', 
    name: 'Svenska' 
  },
  { 
    code: 'GB', 
    flag: '/eng-flag.png', 
    name: 'English' 
  },
];

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((lang) => lang.code === currentLanguage);

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

  const handleLanguageSelect = (code: string) => {
    onLanguageChange(code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Language Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-2 py-2 text-gray-700 hover:text-[#C41E3A] transition-colors"
        aria-label="Select language"
      >
        <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center border border-gray-200">
          <Image
            src={currentLang?.flag || languages[0].flag}
            alt={currentLang?.name || 'Flag'}
            width={32}
            height={32}
            className="object-cover"
          />
        </div>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                currentLanguage === lang.code
                  ? 'bg-gray-50 text-[#C41E3A]'
                  : 'text-gray-700'
              }`}
            >
              <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center border border-gray-100">
                <Image
                  src={lang.flag}
                  alt={lang.name}
                  width={28}
                  height={28}
                  className="object-cover"
                />
              </div>
              <span className="font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
