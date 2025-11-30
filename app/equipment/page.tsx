'use client';

import { useEffect, useState } from 'react';
import MainLayout from '@/components/MainLayout';
import { supabase } from '@/lib/supabase/client';
import { formatCurrency } from '@/lib/utils';

interface Equipment {
  id: string;
  name: string;
  description: string;
  category: string;
  season: string;
  size: string | null;
  price_per_day: number;
  quantity_available: number;
  image_url: string | null;
}

export default function EquipmentPage() {
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [loading, setLoading] = useState(true);
  const [seasonFilter, setSeasonFilter] = useState<string>('all');

  useEffect(() => {
    fetchEquipment();
  }, []);

  const fetchEquipment = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('equipment')
      .select('*')
      .gt('quantity_available', 0)
      .order('season', { ascending: false });

    if (error) {
      console.error('Error fetching equipment:', error);
    } else {
      setEquipment(data || []);
    }
    setLoading(false);
  };

  const filteredEquipment = seasonFilter === 'all'
    ? equipment
    : equipment.filter(item => item.season === seasonFilter || item.season === 'all');

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Equipment Rental
          </h1>
          <p className="text-xl text-gray-600">
            Top-quality gear for all your adventures
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'winter', 'summer'].map((season) => (
            <button
              key={season}
              onClick={() => setSeasonFilter(season)}
              className={`px-6 py-2 rounded-full font-medium transition ${
                seasonFilter === season
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {season.charAt(0).toUpperCase() + season.slice(1)}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredEquipment.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <div className="relative h-48">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${item.image_url || 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256'})`,
                    }}
                  ></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{item.category}</p>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xl font-bold text-gray-900">
                      {formatCurrency(item.price_per_day)}/day
                    </span>
                    <span className="text-sm text-gray-600">
                      {item.quantity_available} available
                    </span>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition text-sm">
                    Rent Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}
