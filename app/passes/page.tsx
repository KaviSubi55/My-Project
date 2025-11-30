'use client';

import { useEffect, useState } from 'react';
import MainLayout from '@/components/MainLayout';
import { supabase } from '@/lib/supabase/client';
import { formatCurrency } from '@/lib/utils';

interface Pass {
  id: string;
  name: string;
  description: string;
  season: string;
  duration_days: number;
  price: number;
  benefits: string[];
  image_url: string | null;
  available: boolean;
}

export default function PassesPage() {
  const [passes, setPasses] = useState<Pass[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPasses();
  }, []);

  const fetchPasses = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('activity_passes')
      .select('*')
      .eq('available', true)
      .order('price', { ascending: true });

    if (error) {
      console.error('Error fetching passes:', error);
    } else {
      setPasses(data || []);
    }
    setLoading(false);
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Activity Passes
          </h1>
          <p className="text-xl text-gray-600">
            Unlimited access with exclusive discounts and perks
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {passes.map((pass, index) => (
              <div
                key={pass.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition ${
                  index === passes.length - 1 ? 'border-4 border-blue-600' : ''
                }`}
              >
                {index === passes.length - 1 && (
                  <div className="bg-blue-600 text-white text-center py-2 font-bold">
                    BEST VALUE
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pass.name}</h3>
                  <p className="text-gray-600 mb-6">{pass.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      {formatCurrency(pass.price)}
                    </span>
                    <span className="text-gray-600"> / {pass.duration_days} days</span>
                  </div>
                  <div className="space-y-3 mb-8">
                    {pass.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition">
                    Purchase Pass
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
