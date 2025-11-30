'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import MainLayout from '@/components/MainLayout';
import { useAuth } from '@/lib/contexts/AuthContext';
import { supabase } from '@/lib/supabase/client';
import { formatCurrency, formatDate } from '@/lib/utils';

interface AccommodationBooking {
  id: string;
  check_in_date: string;
  check_out_date: string;
  guests: number;
  total_price: number;
  status: string;
  created_at: string;
  accommodations: {
    name: string;
    type: string;
  };
}

interface ActivityBooking {
  id: string;
  booking_date: string;
  participants: number;
  total_price: number;
  status: string;
  created_at: string;
  activities: {
    name: string;
    duration_hours: number;
  };
}

export default function BookingsPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [accommodationBookings, setAccommodationBookings] = useState<AccommodationBooking[]>([]);
  const [activityBookings, setActivityBookings] = useState<ActivityBooking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    if (user) {
      fetchBookings();
    }
  }, [user]);

  const fetchBookings = async () => {
    if (!user) return;

    setLoading(true);

    const { data: accData } = await supabase
      .from('accommodation_bookings')
      .select(`
        *,
        accommodations (name, type)
      `)
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    const { data: actData } = await supabase
      .from('activity_bookings')
      .select(`
        *,
        activities (name, duration_hours)
      `)
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    setAccommodationBookings(accData || []);
    setActivityBookings(actData || []);
    setLoading(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (authLoading || !user) {
    return (
      <MainLayout>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Bookings</h1>

        {searchParams.get('success') === 'accommodation' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
            Your accommodation has been booked successfully!
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <a
            href="/account"
            className="bg-gray-100 text-gray-700 p-4 rounded-lg text-center font-medium hover:bg-gray-200 transition"
          >
            Profile
          </a>
          <a
            href="/account/bookings"
            className="bg-blue-600 text-white p-4 rounded-lg text-center font-medium hover:bg-blue-700 transition"
          >
            My Bookings
          </a>
          <a
            href="/account/passes"
            className="bg-gray-100 text-gray-700 p-4 rounded-lg text-center font-medium hover:bg-gray-200 transition"
          >
            My Passes
          </a>
          <a
            href="/account/rentals"
            className="bg-gray-100 text-gray-700 p-4 rounded-lg text-center font-medium hover:bg-gray-200 transition"
          >
            My Rentals
          </a>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <>
            {/* Accommodation Bookings */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Accommodation Bookings</h2>
              {accommodationBookings.length === 0 ? (
                <div className="bg-white rounded-xl shadow-md p-8 text-center">
                  <p className="text-gray-600">No accommodation bookings yet</p>
                  <a
                    href="/accommodations"
                    className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Browse Accommodations →
                  </a>
                </div>
              ) : (
                <div className="space-y-4">
                  {accommodationBookings.map((booking) => (
                    <div key={booking.id} className="bg-white rounded-xl shadow-md p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {booking.accommodations.name}
                          </h3>
                          <p className="text-gray-600">{booking.accommodations.type}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                          {booking.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500 block">Check-in</span>
                          <span className="font-medium">{formatDate(booking.check_in_date)}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 block">Check-out</span>
                          <span className="font-medium">{formatDate(booking.check_out_date)}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 block">Guests</span>
                          <span className="font-medium">{booking.guests}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 block">Total</span>
                          <span className="font-medium">{formatCurrency(booking.total_price)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Activity Bookings */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Activity Bookings</h2>
              {activityBookings.length === 0 ? (
                <div className="bg-white rounded-xl shadow-md p-8 text-center">
                  <p className="text-gray-600">No activity bookings yet</p>
                  <a
                    href="/activities"
                    className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Browse Activities →
                  </a>
                </div>
              ) : (
                <div className="space-y-4">
                  {activityBookings.map((booking) => (
                    <div key={booking.id} className="bg-white rounded-xl shadow-md p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {booking.activities.name}
                          </h3>
                          <p className="text-gray-600">{booking.activities.duration_hours}h activity</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                          {booking.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500 block">Date</span>
                          <span className="font-medium">{formatDate(booking.booking_date)}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 block">Participants</span>
                          <span className="font-medium">{booking.participants}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 block">Total</span>
                          <span className="font-medium">{formatCurrency(booking.total_price)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
}
