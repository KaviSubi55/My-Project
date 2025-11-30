'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import MainLayout from '@/components/MainLayout';
import { supabase } from '@/lib/supabase/client';
import { useAuth } from '@/lib/contexts/AuthContext';
import { formatCurrency, calculateNights } from '@/lib/utils';
import { format } from 'date-fns';

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

export default function AccommodationDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const [accommodation, setAccommodation] = useState<Accommodation | null>(null);
  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState(false);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAccommodation();
  }, [params.id]);

  const fetchAccommodation = async () => {
    const { data, error } = await supabase
      .from('accommodations')
      .select('*')
      .eq('id', params.id)
      .single();

    if (error) {
      console.error('Error fetching accommodation:', error);
    } else {
      setAccommodation(data);
    }
    setLoading(false);
  };

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!user) {
      router.push('/login');
      return;
    }

    if (!checkIn || !checkOut) {
      setError('Please select check-in and check-out dates');
      return;
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (checkOutDate <= checkInDate) {
      setError('Check-out date must be after check-in date');
      return;
    }

    if (guests > (accommodation?.capacity || 0)) {
      setError(`Maximum capacity is ${accommodation?.capacity} guests`);
      return;
    }

    setBooking(true);

    const nights = calculateNights(checkInDate, checkOutDate);
    const totalPrice = nights * (accommodation?.price_per_night || 0);

    const { error: bookingError } = await supabase
      .from('accommodation_bookings')
      .insert({
        user_id: user.id,
        accommodation_id: params.id as string,
        check_in_date: checkIn,
        check_out_date: checkOut,
        guests,
        total_price: totalPrice,
        status: 'confirmed',
      });

    if (bookingError) {
      setError('Failed to create booking. Please try again.');
      console.error('Booking error:', bookingError);
      setBooking(false);
    } else {
      router.push('/account/bookings?success=accommodation');
    }
  };

  const calculateTotal = () => {
    if (!checkIn || !checkOut || !accommodation) return 0;
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const nights = calculateNights(checkInDate, checkOutDate);
    return nights * accommodation.price_per_night;
  };

  if (loading) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (!accommodation) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Accommodation not found</h1>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${accommodation.image_url || 'https://images.unsplash.com/photo-1542718610-a1d656d1884c'})`,
                }}
              ></div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-3xl font-bold text-gray-900">
                  {accommodation.name}
                </h1>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 font-medium rounded-full">
                  {accommodation.type}
                </span>
              </div>

              <div className="flex items-center gap-6 text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>Sleeps {accommodation.capacity}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-900">
                    {formatCurrency(accommodation.price_per_night)}
                  </span>
                  <span>/night</span>
                </div>
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed">
                {accommodation.description}
              </p>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {accommodation.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Book Now</h2>

              {error && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleBooking} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    min={checkIn || new Date().toISOString().split('T')[0]}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    min="1"
                    max={accommodation.capacity}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Maximum: {accommodation.capacity} guests
                  </p>
                </div>

                {checkIn && checkOut && (
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{formatCurrency(accommodation.price_per_night)} × {calculateNights(new Date(checkIn), new Date(checkOut))} nights</span>
                      <span>{formatCurrency(accommodation.price_per_night * calculateNights(new Date(checkIn), new Date(checkOut)))}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2 flex justify-between font-bold text-gray-900">
                      <span>Total</span>
                      <span>{formatCurrency(calculateTotal())}</span>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={booking}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  {booking ? 'Booking...' : 'Confirm Booking'}
                </button>

                {!user && (
                  <p className="text-sm text-gray-600 text-center">
                    You need to be logged in to make a booking
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
