import MainLayout from '@/components/MainLayout';
import Link from 'next/link';

export default function HomePage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your Year-Round Adventure Awaits
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Experience world-class skiing, snowboarding, mountain biking, and more at Alpine Resort
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/accommodations"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition"
            >
              Book Accommodations
            </Link>
            <Link
              href="/activities"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg transition"
            >
              Explore Activities
            </Link>
          </div>
        </div>
      </section>

      {/* Seasonal Activities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Choose Your Season</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Winter */}
            <Link href="/activities?season=winter" className="group relative overflow-hidden rounded-2xl shadow-lg h-96">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1551524164-687a55dd1126?auto=format&fit=crop&w=1000&q=80)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              </div>
              <div className="relative h-full flex flex-col justify-end p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Winter Season</h3>
                <p className="text-lg mb-4">Skiing, Snowboarding, Ice Climbing & More</p>
                <span className="text-blue-400 font-semibold group-hover:underline">
                  Explore Winter Activities →
                </span>
              </div>
            </Link>

            {/* Summer */}
            <Link href="/activities?season=summer" className="group relative overflow-hidden rounded-2xl shadow-lg h-96">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              </div>
              <div className="relative h-full flex flex-col justify-end p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Summer Season</h3>
                <p className="text-lg mb-4">Mountain Biking, Hiking, Rock Climbing & More</p>
                <span className="text-blue-400 font-semibold group-hover:underline">
                  Explore Summer Activities →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Everything You Need</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Accommodations */}
            <Link href="/accommodations" className="group text-center">
              <div className="bg-blue-50 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition">
                <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Accommodations</h3>
              <p className="text-gray-600">Cozy cabins, luxury suites, and family chalets</p>
            </Link>

            {/* Sports Schools */}
            <Link href="/sports-schools" className="group text-center">
              <div className="bg-green-50 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition">
                <svg className="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Sports Schools</h3>
              <p className="text-gray-600">Learn from certified professional instructors</p>
            </Link>

            {/* Equipment Rental */}
            <Link href="/equipment" className="group text-center">
              <div className="bg-purple-50 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-100 transition">
                <svg className="w-12 h-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Equipment Rental</h3>
              <p className="text-gray-600">Top-quality gear for all your adventures</p>
            </Link>

            {/* Activity Passes */}
            <Link href="/passes" className="group text-center">
              <div className="bg-orange-50 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-100 transition">
                <svg className="w-12 h-12 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Activity Passes</h3>
              <p className="text-gray-600">Unlimited access with discounts and perks</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Adventure?</h2>
          <p className="text-xl mb-8">
            Create an account to book accommodations, activities, and more
          </p>
          <Link
            href="/register"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
