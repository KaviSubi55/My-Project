'use client';

import React from 'react';
import SkiSchoolCard from '@/components/SkiSchoolCard';

// Sample ski school lessons data
const skiSchoolLessons = [
  {
    id: '1',
    logo: '/skiskola-logo.png',
    title: 'Sälen Level 2 – Alpine skiing – 4–6 years',
    badges: ['KNOW THE BASICS', 'MORNING', 'MONDAY-FRIDAY'],
    description: 'Prerequisites: The child turns and brakes on green slopes and rides a button lift on their own.',
    price: 995,
    placesLeft: 5,
    availableGroups: 2,
  },
  {
    id: '2',
    logo: '/skiskola-logo.png',
    title: 'Sälen Level 1 – Alpine skiing – 3 years',
    badges: ['BRAND NEW ON THE SLOPES', 'MORNING', 'MONDAY-FRIDAY'],
    description: 'Prerequisites: None, except that the child can be away from parents/guardians for the entire lesson time.',
    price: 995,
    placesLeft: 3,
    availableGroups: 1,
  },
  {
    id: '3',
    logo: '/skiskola-logo.png',
    title: 'Sälen Level 1 – Alpine skiing – 7–9 years',
    badges: ['BRAND NEW ON THE SLOPES', 'MORNING', 'MONDAY-FRIDAY'],
    description: 'Prerequisites: None, except that the child can be away from parents/guardians for the entire lesson time.',
    price: 995,
    placesLeft: 5,
    availableGroups: 1,
  },
  {
    id: '4',
    logo: '/skiskola-logo.png',
    title: 'Sälen Level 3 – Alpine skiing – 7–9 years',
    badges: ['PARALLEL TURNS', 'MORNING', 'MONDAY-FRIDAY'],
    description: 'Prerequisites: The child can ski parallel turns on blue slopes and ride all types of lifts independently.',
    price: 995,
    placesLeft: 8,
    availableGroups: 2,
  },
  {
    id: '5',
    logo: '/skiskola-logo.png',
    title: 'Sälen Level 2 – Alpine skiing – 10–12 years',
    badges: ['KNOW THE BASICS', 'MORNING', 'MONDAY-FRIDAY'],
    description: 'Prerequisites: The child turns and brakes on green slopes and rides a button lift on their own.',
    price: 995,
    placesLeft: 4,
    availableGroups: 1,
  },
  {
    id: '6',
    logo: '/skiskola-logo.png',
    title: 'Sälen Level 4 – Alpine skiing – 10–12 years',
    badges: ['ADVANCED', 'MORNING', 'MONDAY-FRIDAY'],
    description: 'Prerequisites: The child can ski parallel turns on red slopes with good technique and control.',
    price: 995,
    placesLeft: 6,
    availableGroups: 2,
  },
];

export default function SkiSchoolListingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Red Banner */}
      <div className="bg-[#C41E3A] text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center font-bold tracking-wide">
            ALWAYS CHEAPEST - BOOK A SKI LESSON AT SKISTAR.COM
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Ski School Lesson Cards */}
        <div className="space-y-6">
          {skiSchoolLessons.map((lesson) => (
            <SkiSchoolCard
              key={lesson.id}
              {...lesson}
              onSelectGroup={() => console.log(`Selecting group for ${lesson.title}`)}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <button className="px-8 py-3 border-2 border-gray-300 rounded-full font-medium text-gray-900 hover:bg-gray-50 transition-colors">
            Show more lessons
          </button>
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
          <div className="flex items-start gap-3">
            <div className="shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">i</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                About Ski School Lessons
              </h3>
              <p className="text-gray-700 mb-3">
                Our experienced instructors will help your child develop their skiing skills in a fun and safe environment. 
                Lessons are divided by age and skill level to ensure the best learning experience.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Small group sizes for personalized attention</li>
                <li>All necessary safety equipment included</li>
                <li>Meeting point at the ski school office</li>
                <li>5 days of lessons, Monday to Friday</li>
                <li>Morning sessions from 10:00-12:00</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
