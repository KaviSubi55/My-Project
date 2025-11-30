'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ChevronRight, 
  ChevronDown, 
  User, 
  MessageCircle, 
  Home, 
  ShoppingBag,
  Snowflake,
  Sun
} from 'lucide-react';
import { MegaMenuProps } from '@/utils/types';
import { winterMenuSections, summerMenuSections, sidebarMenuItems, seasonTabs } from '@/data/menu-items';

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  const [activeSeason, setActiveSeason] = useState('winter');
  const [expandedSections, setExpandedSections] = useState<string[]>(['Destinations']);

  if (!isOpen) return null;

  // Get menu sections based on active season
  const menuSections = activeSeason === 'winter' ? winterMenuSections : summerMenuSections;

  const toggleSection = (title: string) => {
    setExpandedSections((prev) =>
      prev.includes(title)
        ? prev.filter((section) => section !== title)
        : [...prev, title]
    );
  };

  const getSidebarIcon = (label: string) => {
    switch (label) {
      case 'SkiStar Member':
        return <Snowflake className="w-5 h-5" />;
      case 'My page':
        return <User className="w-5 h-5" />;
      case 'Contact us':
        return <MessageCircle className="w-5 h-5" />;
      case 'Rent out your cottage':
        return <Home className="w-5 h-5" />;
      case 'skistarshop.com':
        return <ShoppingBag className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Mega Menu Panel */}
      <div className="fixed top-16 left-0 right-0 bottom-0 bg-gray-50 z-50 overflow-y-auto">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Main Menu Content - Left Side */}
            <div className="lg:col-span-9">
              {/* Season Tabs */}
              <div className="flex gap-4 mb-8">
                {seasonTabs.map((tab) => (
                  <button
                    key={tab.value}
                    onClick={() => setActiveSeason(tab.value)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                      activeSeason === tab.value
                        ? 'bg-white text-gray-900 shadow-md'
                        : 'bg-transparent text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab.value === 'winter' ? (
                      <Snowflake className="w-4 h-4" />
                    ) : (
                      <Sun className="w-4 h-4" />
                    )}
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Menu Sections Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {menuSections.map((section) => (
                  <div
                    key={section.title}
                    className="bg-white rounded-lg p-6 shadow-sm"
                  >
                    {/* Section Header */}
                    <div className="mb-4">
                      <button
                        onClick={() => section.hasDropdown && toggleSection(section.title)}
                        className="w-full flex items-center justify-between group"
                      >
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#C41E3A] transition-colors">
                          {section.title}
                        </h3>
                        {section.hasDropdown ? (
                          <ChevronDown
                            className={`w-5 h-5 text-gray-400 transition-transform ${
                              expandedSections.includes(section.title) ? 'rotate-180' : ''
                            }`}
                          />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        )}
                      </button>
                    </div>

                    {/* Section Items */}
                    <ul className="space-y-3">
                      {section.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            onClick={onClose}
                            className="text-gray-700 hover:text-[#C41E3A] transition-colors text-sm flex items-center justify-between group"
                          >
                            <span>{item.label}</span>
                            {section.hasDropdown && expandedSections.includes(section.title) && (
                              <ChevronDown className="w-4 h-4 text-gray-400" />
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar - Right Side */}
            <div className="lg:col-span-3 space-y-4">
              {/* Current Offers Card */}
              <div className="bg-linear-to-br from-red-50 to-red-100 rounded-lg p-6 border-2 border-[#C41E3A]">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                    {activeSeason === 'winter' ? (
                      <Snowflake className="w-10 h-10 text-[#C41E3A]" />
                    ) : (
                      <Sun className="w-10 h-10 text-[#C41E3A]" />
                    )}
                  </div>
                </div>
                <Link
                  href="/offers"
                  onClick={onClose}
                  className="flex items-center justify-between text-[#C41E3A] font-bold text-lg hover:underline"
                >
                  Current offers
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>

              {/* SkiStar Member Card */}
              <div className="bg-linear-to-br from-purple-50 via-blue-50 to-pink-50 rounded-lg p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-2">
                  <Snowflake className="w-6 h-6 text-[#C41E3A]" />
                  <span className="text-[#C41E3A] font-bold">✱ MEMBER</span>
                </div>
                <Link
                  href="/member"
                  onClick={onClose}
                  className="flex items-center justify-between text-gray-900 font-bold text-lg hover:text-[#C41E3A] transition-colors"
                >
                  SkiStar Member
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Sidebar Menu Items */}
              <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-100">
                {sidebarMenuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-gray-400 group-hover:text-[#C41E3A] transition-colors">
                        {getSidebarIcon(item.label)}
                      </div>
                      <span className="font-medium text-gray-900 group-hover:text-[#C41E3A] transition-colors">
                        {item.label}
                      </span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#C41E3A] transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaMenu;
