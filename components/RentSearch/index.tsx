'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';

interface Destination {
  id: string;
  name: string;
}

const destinations: Destination[] = [
  { id: 'seal', name: 'The seal' },
  { id: 'are', name: 'Åre' },
  { id: 'vemdalen', name: 'Vemdalen' },
  { id: 'hemsedal', name: 'Hemsedal' },
  { id: 'trysil', name: 'Trysil' },
  { id: 'hammarbybacken', name: 'Hammarbybacken' },
];

const RentSearch: React.FC = () => {
  const router = useRouter();
  
  const [destinationOpen, setDestinationOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Error states for validation
  const [destinationError, setDestinationError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const destinationRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (destinationRef.current && !destinationRef.current.contains(event.target as Node)) {
        setDestinationOpen(false);
      }
      if (dateRef.current && !dateRef.current.contains(event.target as Node)) {
        setDateOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDestinationSelect = (id: string) => {
    setSelectedDestination(id);
    setDestinationOpen(false);
  };

  const clearDestination = () => {
    setSelectedDestination('');
  };

  const getSelectedDestinationName = () => {
    const dest = destinations.find((d) => d.id === selectedDestination);
    return dest ? dest.name : 'Choose destination';
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleDateSelect = (day: number) => {
    const selected = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    setSelectedDate(selected);
    setDateOpen(false);
  };

  // Handle search button click
  const handleSearch = () => {
    // Reset all errors
    setDestinationError(false);
    setDateError(false);

    let hasError = false;

    // Validation: Check if destination is selected
    if (!selectedDestination) {
      setDestinationError(true);
      hasError = true;
    }

    // Validation: Check if date is selected
    if (!selectedDate) {
      setDateError(true);
      hasError = true;
    }

    // If any error, stop here
    if (hasError) {
      return;
    }

    // Get destination name
    const destinationName = destinations.find(d => d.id === selectedDestination)?.name || '';

    // Format date
    const dateStr = selectedDate!.toLocaleDateString('en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    // Build query parameters
    const params = new URLSearchParams();
    params.append('destination', destinationName);
    params.append('date', dateStr);

    // Navigate to rent listing page
    router.push(`/rent?${params.toString()}`);
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
                setDateOpen(false);
                setDestinationError(false); // Clear error on click
              }}
              className={`w-full bg-white rounded-full px-6 py-4 shadow-sm text-left transition-colors ${
                destinationError 
                  ? 'border-2 border-red-500' 
                  : destinationOpen 
                    ? 'border-2 border-[#C41E3A]' 
                    : 'border-2 border-gray-200'
              }`}
            >
              <div className="text-sm text-gray-600 mb-1">Where do you want to go?</div>
              <div className="flex items-center justify-between">
                <span className="text-gray-900 font-medium">{getSelectedDestinationName()}</span>
                {destinationOpen ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </button>

            {destinationOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto">
                <div className="p-4 space-y-3">
                  {destinations.map((dest) => (
                    <label
                      key={dest.id}
                      className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-3 rounded"
                    >
                      <input
                        type="radio"
                        name="destination"
                        checked={selectedDestination === dest.id}
                        onChange={() => handleDestinationSelect(dest.id)}
                        className="w-5 h-5 text-[#C41E3A] focus:ring-[#C41E3A]"
                      />
                      <span className="text-gray-900">{dest.name}</span>
                    </label>
                  ))}
                </div>
                <div className="border-t border-gray-200 p-4">
                  <button
                    onClick={clearDestination}
                    className="w-full px-6 py-2 rounded-full border-2 border-[#C41E3A] text-[#C41E3A] font-medium hover:bg-[#C41E3A] hover:text-white transition-colors"
                  >
                    Clear
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Date Dropdown */}
          <div className="flex-1 min-w-[250px] relative" ref={dateRef}>
            <button
              onClick={() => {
                setDateOpen(!dateOpen);
                setDestinationOpen(false);
                setDateError(false); // Clear error on click
              }}
              className={`w-full bg-white rounded-full px-6 py-4 shadow-sm text-left transition-colors ${
                dateError 
                  ? 'border-2 border-red-500' 
                  : dateOpen 
                    ? 'border-2 border-[#C41E3A]' 
                    : 'border-2 border-gray-200'
              }`}
            >
              <div className="text-sm text-gray-600 mb-1">When</div>
              <div className="flex items-center justify-between">
                <span className="text-gray-900 font-medium">
                  {selectedDate
                    ? selectedDate.toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })
                    : 'Select start date'}
                </span>
                {dateOpen ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </button>

            {dateOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50 p-4 min-w-[350px]">
                <div className="flex items-center justify-between mb-4">
                  <button onClick={handlePrevMonth} className="p-2 hover:bg-gray-100 rounded">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <div className="font-medium text-gray-900">
                    {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                  </div>
                  <button onClick={handleNextMonth} className="p-2 hover:bg-gray-100 rounded">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Free', 'Sat', 'Sun'].map((day) => (
                    <div key={day} className="text-center text-sm text-gray-600 py-2 font-medium">
                      {day}
                    </div>
                  ))}

                  {Array.from({ length: startingDayOfWeek === 0 ? 6 : startingDayOfWeek - 1 }).map(
                    (_, i) => (
                      <div key={`empty-${i}`} />
                    )
                  )}

                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const isSelected =
                      selectedDate &&
                      selectedDate.getDate() === day &&
                      selectedDate.getMonth() === currentMonth.getMonth() &&
                      selectedDate.getFullYear() === currentMonth.getFullYear();

                    return (
                      <button
                        key={day}
                        onClick={() => handleDateSelect(day)}
                        className={`p-2 text-center rounded-full transition-colors ${
                          isSelected
                            ? 'bg-white border-2 border-gray-900 text-gray-900 font-bold'
                            : 'text-gray-900 hover:bg-gray-100'
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Search Button */}
          <button 
            onClick={handleSearch}
            className="bg-[#C41E3A] text-white px-10 py-4 rounded-full font-bold hover:bg-[#A01830] transition-colors whitespace-nowrap shadow-lg"
          >
            Rent equipment
          </button>
        </div>
      </div>
    </div>
  );
};

export default RentSearch;
