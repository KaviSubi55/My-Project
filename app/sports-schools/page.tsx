'use client';

import { useEffect, useState } from 'react';
import MainLayout from '@/components/MainLayout';
import Link from 'next/link';
import { supabase } from '@/lib/supabase/client';
import { formatCurrency } from '@/lib/utils';

interface SportsSchool {
  id: string;
  name: string;
  description: string;
  sport_type: string;
  season: string;
  skill_level: string;
  duration_days: number;
  price: number;
  max_students: number;
  image_url: string | null;
  available: boolean;
}

export default function SportsSchoolsPage() {
  const [schools, setSchools] = useState<SportsSchool[]>([]);
  const [loading, setLoading] = useState(true);
  const [seasonFilter, setSeasonFilter] = useState<string>('all');

  useEffect(() => {
    fetchSchools();
  }, []);

  const fetchSchools = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('sports_schools')
      .select('*')
      .eq('available', true)
      .order('season', { ascending: false });

    if (error) {
      console.error('Error fetching sports schools:', error);
    } else {
      setSchools(data || []);
    }
    setLoading(false);
  };

  const filteredSchools = seasonFilter === 'all'
    ? schools
    : schools.filter(school => school.season === seasonFilter || school.season === 'all');

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sports Schools
          </h1>
          <p className="text-xl text-gray-600">
            Learn from certified professional instructors
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSchools.map((school) => (
              <div
                key={school.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <div className="relative h-64">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${school.image_url || 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256'})`,
                    }}
                  ></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white rounded-full text-sm font-medium">
                      {school.season}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{school.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{school.description}</p>
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Sport:</span>
                      <span className="font-medium">{school.sport_type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Skill Level:</span>
                      <span className="font-medium">{school.skill_level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="font-medium">{school.duration_days} days</span>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="text-2xl font-bold text-gray-900 mb-4">
                      {formatCurrency(school.price)}
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}
