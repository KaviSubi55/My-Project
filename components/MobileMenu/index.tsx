'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { MobileMenuProps } from '@/utils/types';

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navigationItems,
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div className="fixed top-16 left-0 right-0 bottom-0 bg-white z-50 overflow-y-auto">
        <nav className="py-6">
          <ul className="space-y-1">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between px-6 py-4 text-gray-900 hover:bg-gray-50 transition-colors font-medium"
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
