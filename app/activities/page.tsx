'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import MainLayout from '@/components/MainLayout';
import Link from 'next/link';
import { supabase } from '@/lib/supabase/client';
import { formatCurrency } from '@/lib/utils';

interface Activity {
  id: string;
  name: string;
  description: string;
  season: 'winter' | 'summer' | 'all';
  difficulty_level: string;
  duration_hours: number;
  price: number;
  max_participants: number;
  image_url: string | null;
  available: boolean;
}

export default function ActivitiesPage() {
  const searchParams = useSearchParams();
  const seasonParam = searchParams.get('season');
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [seasonFilter, setSeasonFilter] = useState<string>(seasonParam || 'all');

  useEffect(() => {
    fetchActivities();
  }, []);

  useEffect(() => {
    if (seasonParam) {
      setSeasonFilter(seasonParam);
    }
  }, [seasonParam]);

  const fetchActivities = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('activities')
      .select('*')
      .eq('available', true)
      .order('season', { ascending: false });

    if (error) {
      console.error('Error fetching activities:', error);
    } else {
      setActivities(data || []);
    }
    setLoading(false);
  };

  const filteredActivities = seasonFilter === 'all'
    ? activities
    : activities.filter(act => act.season === seasonFilter || act.season === 'all');

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Activities
          </h1>
          <p className="text-xl text-gray-600">
            Choose from our wide range of seasonal adventures
          </p>
        </div>

        {/* Season Filter */}
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
            {filteredActivities.map((activity) => (
              <Link
                key={activity.id}
                href={`/activities/${activity.id}`}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${activity.image_url || 'https://images.unsplash.com/photo-1551632811-561732d1e306'})`,
                    }}
                  ></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      activity.season === 'winter' ? 'bg-blue-100 text-blue-800' :
                      activity.season === 'summer' ? 'bg-orange-100 text-orange-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {activity.season.charAt(0).toUpperCase() + activity.season.slice(1)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {activity.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {activity.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {activity.difficulty_level}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {activity.duration_hours}h
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      Max {activity.max_participants}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900">
                      {formatCurrency(activity.price)}
                    </span>
                    <span className="text-blue-600 font-semibold group-hover:underline">
                      Book Now →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {!loading && filteredActivities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No activities found for this season.</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
