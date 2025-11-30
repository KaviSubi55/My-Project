'use client';

import Navigation from './Navigation';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Alpine Resort</h3>
              <p className="text-gray-400">
                Your premier destination for year-round adventure and relaxation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/accommodations" className="hover:text-white transition">Accommodations</a></li>
                <li><a href="/activities" className="hover:text-white transition">Activities</a></li>
                <li><a href="/sports-schools" className="hover:text-white transition">Sports Schools</a></li>
                <li><a href="/equipment" className="hover:text-white transition">Equipment</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Seasons</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/activities?season=winter" className="hover:text-white transition">Winter Activities</a></li>
                <li><a href="/activities?season=summer" className="hover:text-white transition">Summer Activities</a></li>
                <li><a href="/passes" className="hover:text-white transition">Season Passes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>123 Mountain Road</li>
                <li>Aspen, USA</li>
                <li>info@alpineresort.com</li>
                <li>(555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Alpine Resort. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
