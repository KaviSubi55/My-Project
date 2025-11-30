'use client';

import { useEffect, useState } from 'react';
import MainLayout from '@/components/MainLayout';
import Link from 'next/link';
import { supabase } from '@/lib/supabase/client';
import { formatCurrency } from '@/lib/utils';

interface Accommodation {
  id: string;
  name: string;
  description: string;
  type: string;
  capacity: number;
  price_per_night: number;
  amenities: string[];
  image_url: string | null;
  available: boolean;
}

export default function AccommodationsPage() {
  const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    fetchAccommodations();
  }, []);

  const fetchAccommodations = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('accommodations')
      .select('*')
      .eq('available', true)
      .order('price_per_night', { ascending: true });

    if (error) {
      console.error('Error fetching accommodations:', error);
    } else {
      setAccommodations(data || []);
    }
    setLoading(false);
  };

  const filteredAccommodations = filter === 'all'
    ? accommodations
    : accommodations.filter(acc => acc.type.toLowerCase() === filter.toLowerCase());

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Accommodations
          </h1>
          <p className="text-xl text-gray-600">
            Find your perfect home away from home
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'cabin', 'suite', 'chalet', 'villa'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                filter === type
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAccommodations.map((accommodation) => (
              <Link
                key={accommodation.id}
                href={`/accommodations/${accommodation.id}`}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${accommodation.image_url || 'https://images.unsplash.com/photo-1542718610-a1d656d1884c'})`,
                    }}
                  ></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {accommodation.name}
                    </h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {accommodation.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {accommodation.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>Sleeps {accommodation.capacity}</span>
                    <span>{accommodation.amenities.length} amenities</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">
                        {formatCurrency(accommodation.price_per_night)}
                      </span>
                      <span className="text-gray-600">/night</span>
                    </div>
                    <span className="text-blue-600 font-semibold group-hover:underline">
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {!loading && filteredAccommodations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No accommodations found for this filter.</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
