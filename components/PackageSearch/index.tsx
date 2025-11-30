'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';

interface Destination {
  id: string;
  name: string;
}

const destinations: Destination[] = [
  { id: 'all', name: 'All destinations' },
  { id: 'seal', name: 'The seal' },
  { id: 'are', name: 'Åre' },
  { id: 'vemdalen', name: 'Vemdalen' },
  { id: 'hemsedal', name: 'Hemsedal' },
  { id: 'trysil', name: 'Trysil' },
];

const PackageSearch: React.FC = () => {
  const router = useRouter();
  
  // Dropdown states
  const [destinationOpen, setDestinationOpen] = useState(false);
  const [guestsOpen, setGuestsOpen] = useState(false);

  // Selected values
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
  const [adults, setAdults] = useState(0);
  const [seniors, setSeniors] = useState(0);
  const [children, setChildren] = useState(0);

  // Error states for validation
  const [destinationError, setDestinationError] = useState(false);
  const [guestsError, setGuestsError] = useState(false);

  // Refs for click outside
  const destinationRef = useRef<HTMLDivElement>(null);
  const guestsRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (destinationRef.current && !destinationRef.current.contains(event.target as Node)) {
        setDestinationOpen(false);
      }
      if (guestsRef.current && !guestsRef.current.contains(event.target as Node)) {
        setGuestsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle destination checkbox
  const handleDestinationChange = (id: string) => {
    if (id === 'all') {
      setSelectedDestinations([]);
    } else {
      setSelectedDestinations((prev) =>
        prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
      );
    }
  };

  // Clear destinations
  const clearDestinations = () => {
    setSelectedDestinations([]);
  };

  // Clear guests
  const clearGuests = () => {
    setAdults(0);
    setSeniors(0);
    setChildren(0);
  };

  // Get total guests
  const totalGuests = adults + seniors + children;

  // Handle search button click
  const handleSearch = () => {
    // Reset all errors
    setDestinationError(false);
    setGuestsError(false);

    let hasError = false;

    // Validation: Check if destination is selected
    if (selectedDestinations.length === 0) {
      setDestinationError(true);
      hasError = true;
    }

    // Validation: Check if guests are added
    if (totalGuests === 0) {
      setGuestsError(true);
      hasError = true;
    }

    // If any error, stop here
    if (hasError) {
      return;
    }

    console.log('🔵 Find package holiday clicked!');
    console.log('Selected destinations:', selectedDestinations);
    console.log('Total guests:', totalGuests);
    
    // Get selected destination names
    const destinationNames = selectedDestinations
      .map(id => destinations.find(d => d.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    // Format guests
    const guestStr = `${totalGuests} ${totalGuests === 1 ? 'guest' : 'guests'}`;

    // Build query parameters
    const params = new URLSearchParams();
    params.append('destination', destinationNames);
    params.append('guests', guestStr);
    if (adults > 0) params.append('adults', adults.toString());
    if (seniors > 0) params.append('seniors', seniors.toString());
    if (children > 0) params.append('children', children.toString());

    const url = `/package?${params.toString()}`;
    console.log('🔵 Navigating to:', url);
    
    // Navigate to package listing page
    try {
      router.push(url);
    } catch (error) {
      console.error('Router error:', error);
      // Fallback to window.location
      window.location.href = url;
    }
  };

  return (
    <div className="bg-gray-100 py-6">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-4 flex-wrap">
          {/* Destination Dropdown */}
          <div className="flex-1 min-w-[300px] relative" ref={destinationRef}>
            <button
              onClick={() => {
                setDestinationOpen(!destinationOpen);
                setGuestsOpen(false);
                setDestinationError(false); // Clear error on click
              }}
              className={`w-full bg-white rounded-full px-6 py-4 shadow-sm text-left ${
                destinationError 
                  ? 'border-2 border-red-500' 
                  : 'border border-gray-200'
              }`}
            >
              <div className="text-sm text-gray-600 mb-1">Where do you want to live?</div>
              <div className="flex items-center justify-between">
                <span className="text-gray-900 font-medium">
                  {selectedDestinations.length === 0
                    ? 'Choose destination'
                    : `${selectedDestinations.length} selected`}
                </span>
                {destinationOpen ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </button>

            {/* Destination Dropdown Menu */}
            {destinationOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto">
                <div className="p-4 space-y-3">
                  {destinations.map((dest) => (
                    <label
                      key={dest.id}
                      className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded"
                    >
                      <input
                        type="checkbox"
                        checked={
                          dest.id === 'all'
                            ? selectedDestinations.length === 0
                            : selectedDestinations.includes(dest.id)
                        }
                        onChange={() => handleDestinationChange(dest.id)}
                        className="w-5 h-5 rounded border-gray-300 text-[#C41E3A] focus:ring-[#C41E3A]"
                      />
                      <span className="text-gray-900">{dest.name}</span>
                    </label>
                  ))}
                </div>
                <div className="border-t border-gray-200 p-4">
                  <button
                    onClick={clearDestinations}
                    className="w-full px-6 py-2 rounded-full border-2 border-[#C41E3A] text-[#C41E3A] font-medium hover:bg-[#C41E3A] hover:text-white transition-colors"
                  >
                    Clear
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Guests Dropdown */}
          <div className="flex-1 min-w-[250px] relative" ref={guestsRef}>
            <button
              onClick={() => {
                setGuestsOpen(!guestsOpen);
                setDestinationOpen(false);
                setGuestsError(false); // Clear error on click
              }}
              className={`w-full bg-white rounded-full px-6 py-4 shadow-sm text-left ${
                guestsError 
                  ? 'border-2 border-red-500' 
                  : 'border border-gray-200'
              }`}
            >
              <div className="text-sm text-gray-600 mb-1">Which</div>
              <div className="flex items-center justify-between">
                <span className="text-gray-900 font-medium">
                  {totalGuests === 0 ? 'Add guests' : `${totalGuests} guest${totalGuests !== 1 ? 's' : ''}`}
                </span>
                {guestsOpen ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </button>

            {/* Guests Dropdown Menu */}
            {guestsOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50 min-w-[350px]">
                <div className="p-6 space-y-6">
                  {/* Adults */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">Adult</div>
                      <div className="text-sm text-gray-600">18 - 64 years</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setAdults(Math.max(0, adults - 1))}
                        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                      >
                        <Minus className="w-5 h-5 text-gray-600" />
                      </button>
                      <span className="w-8 text-center font-medium">{adults}</span>
                      <button
                        onClick={() => setAdults(adults + 1)}
                        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                      >
                        <Plus className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  {/* Seniors */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">Senior</div>
                      <div className="text-sm text-gray-600">Over 65 years old</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setSeniors(Math.max(0, seniors - 1))}
                        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                      >
                        <Minus className="w-5 h-5 text-gray-600" />
                      </button>
                      <span className="w-8 text-center font-medium">{seniors}</span>
                      <button
                        onClick={() => setSeniors(seniors + 1)}
                        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                      >
                        <Plus className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">Children/Youth</div>
                      <div className="text-sm text-gray-600">0 - 17 years</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                      >
                        <Minus className="w-5 h-5 text-gray-600" />
                      </button>
                      <span className="w-8 text-center font-medium">{children}</span>
                      <button
                        onClick={() => setChildren(children + 1)}
                        className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                      >
                        <Plus className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 p-4">
                  <button
                    onClick={clearGuests}
                    className="w-full px-6 py-2 rounded-full border-2 border-[#C41E3A] text-[#C41E3A] font-medium hover:bg-[#C41E3A] hover:text-white transition-colors"
                  >
                    Clear
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Search Button */}
          <button 
            onClick={handleSearch}
            className="bg-[#C41E3A] text-white px-8 py-4 rounded-full font-bold hover:bg-[#A01830] transition-colors whitespace-nowrap shadow-lg"
          >
            Find a package holiday
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageSearch;
