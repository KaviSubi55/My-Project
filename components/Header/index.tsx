'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Search, ShoppingCart, User, ChevronDown } from 'lucide-react';
import { HeaderProps } from '@/utils/types'; 
import MegaMenu from '../MegaMenu';
import LanguageSelector from '../LanguageSelector';
import DestinationDropdown from '../DestinationDropdown';
import UserMenu from '../UserMenu';

const Header: React.FC<HeaderProps> = ({ navigationItems }) => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('SE');

  const defaultNavItems = navigationItems || [
    { label: 'Destinations', href: '/destinations', hasDropdown: true },
  ];

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Section: Logo and Menu Button */}
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#C41E3A] text-[#C41E3A] hover:bg-[#C41E3A] hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                {isMegaMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>

              {/* Desktop Menu Button */}
              <button
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                className="hidden lg:flex items-center gap-2 px-6 py-2 rounded-full border-2 border-[#C41E3A] text-[#C41E3A] hover:bg-[#C41E3A] hover:text-white transition-colors font-medium"
              >
                {isMegaMenuOpen ? (
                  <>
                    <X className="w-5 h-5" />
                    <span>Menu</span>
                  </>
                ) : (
                  <>
                    <Menu className="w-5 h-5" />
                    <span>Menu</span>
                  </>
                )}
              </button>

              {/* Logo */}
              <Link href="/" className="flex items-center">
                <div className="text-[#C41E3A] font-bold text-2xl tracking-tight">
                  SkiStar
                </div>
              </Link>
            </div>

            {/* Center Section: Navigation (Desktop) */}
            <nav className="hidden lg:flex items-center">
              <DestinationDropdown />
            </nav>

            {/* Right Section: Icons */}
            <div className="flex items-center gap-3">
              {/* Search Icon */}
              <button
                className="flex items-center justify-center w-10 h-10 text-gray-700 hover:text-[#C41E3A] transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Shopping Cart Icon */}
              <button
                className="flex items-center justify-center w-10 h-10 text-gray-700 hover:text-[#C41E3A] transition-colors"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="w-5 h-5" />
              </button>

              {/* User Menu - Shows Login button or Username with dropdown */}
              <UserMenu />

              {/* Language Selector */}
              <LanguageSelector
                currentLanguage={currentLanguage}
                onLanguageChange={setCurrentLanguage}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mega Menu */}
      <MegaMenu
        isOpen={isMegaMenuOpen}
        onClose={() => setIsMegaMenuOpen(false)}
      />
    </>
  );
};

export default Header;
