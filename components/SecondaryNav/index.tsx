'use client';

import React, { useState } from 'react';
import { Home, Tag, Ticket, Key, Shield } from 'lucide-react';
import AccommodationSearch from '../AccomodationSearch';
import PackageSearch from '../PackageSearch';
import SkiPassSearch from '../SkiPassSearch';
import RentSearch from '../RentSearch';
import SkiSchoolSearch from '../SkiSchoolSearch';

type TabType = 'accommodation' | 'package' | 'skipass' | 'rent' | 'skischool';

interface Tab {
  id: TabType;
  label: string;
  icon: React.ReactNode;
}

const tabs: Tab[] = [
  { id: 'accommodation', label: 'Accommodation', icon: <Home className="w-5 h-5" /> },
  { id: 'package', label: 'Package', icon: <Tag className="w-5 h-5" /> },
  { id: 'skipass', label: 'Ski Pass', icon: <Ticket className="w-5 h-5" /> },
  { id: 'rent', label: 'Rent', icon: <Key className="w-5 h-5" /> },
  { id: 'skischool', label: 'Ski school', icon: <Shield className="w-5 h-5" /> },
];

const SecondaryNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('accommodation');

  return (
    <div className="bg-gray-100 border-b border-gray-200">
      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-8 overflow-x-auto">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-4 px-2 font-medium whitespace-nowrap transition-colors relative ${
                    isActive ? 'text-[#C41E3A]' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <span className={isActive ? 'text-[#C41E3A]' : 'text-gray-400'}>
                    {tab.icon}
                  </span>
                  {tab.label}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C41E3A]" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Tab Content - Render search component based on active tab */}
      {activeTab === 'accommodation' && <AccommodationSearch />}
      {activeTab === 'package' && <PackageSearch />}
      {activeTab === 'skipass' && <SkiPassSearch />}
      {activeTab === 'rent' && <RentSearch />}
      {activeTab === 'skischool' && <SkiSchoolSearch />}
    </div>
  );
};

export default SecondaryNav;
