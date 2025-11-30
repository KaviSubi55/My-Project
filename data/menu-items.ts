import { MenuItem, MenuSection, SidebarMenuItem, SeasonTab } from '../utils/types';

// Winter menu sections
export const winterMenuSections: MenuSection[] = [
  {
    title: 'Destinations',
    href: '/destinations',
    hasDropdown: true,
    items: [
      { label: 'The seal', href: '/destinations/the-seal' },
      { label: 'Åre', href: '/destinations/are' },
      { label: 'Vemdalen', href: '/destinations/vemdalen' },
      { label: 'Trysil', href: '/destinations/trysil' },
      { label: 'Hemsedal', href: '/destinations/hemsedal' },
      { label: 'Hammarbybacken', href: '/destinations/hammarbybacken' },
    ],
  },
  {
    title: 'Book your trip',
    href: '/book',
    items: [
      { label: 'Accommodation', href: '/book/accommodation' },
      { label: 'Affordable packages', href: '/book/packages' },
      { label: 'Lodge and hotel', href: '/book/hotels' },
      { label: 'Ski Pass', href: '/book/ski-pass' },
      { label: 'Ski rental', href: '/book/ski-rental' },
      { label: 'Ski lessons', href: '/book/ski-lessons' },
      { label: 'Travel to our destinations', href: '/book/travel' },
      { label: 'Alpine snow guarantee 2025/26', href: '/book/snow-guarantee' },
    ],
  },
  {
    title: 'All about the ski holiday',
    href: '/ski-holiday',
    items: [
      { label: 'Weather and slopes', href: '/ski-holiday/weather' },
      { label: 'Skiing at SkiStar destinations', href: '/ski-holiday/skiing' },
      { label: 'Winter events', href: '/ski-holiday/events' },
      { label: 'Snowman Valle', href: '/ski-holiday/snowman-valle' },
      { label: 'Spa and swimming', href: '/ski-holiday/spa' },
      { label: 'SkiStar Fun Rides', href: '/ski-holiday/fun-rides' },
      { label: 'SkiStar Snow Parks', href: '/ski-holiday/snow-parks' },
      { label: 'Cross-country skiing', href: '/ski-holiday/cross-country' },
    ],
  },
  {
    title: 'Trip types',
    href: '/trip-types',
    items: [
      { label: 'Weekend trips', href: '/trip-types/weekend' },
      { label: 'Senior', href: '/trip-types/senior' },
      { label: 'Group travel', href: '/trip-types/group' },
      { label: 'Conference travel', href: '/trip-types/conference' },
      { label: 'With caravan and motorhome', href: '/trip-types/caravan' },
      { label: 'Availability', href: '/trip-types/availability' },
      { label: 'Traveling with pets', href: '/trip-types/pets' },
      { label: 'Training trips', href: '/trip-types/training' },
      { label: 'Associations and clubs', href: '/trip-types/associations' },
    ],
  },
];

// Summer menu sections
export const summerMenuSections: MenuSection[] = [
  {
    title: 'Destinations',
    href: '/destinations',
    hasDropdown: true,
    items: [
      { label: 'The seal', href: '/destinations/the-seal' },
      { label: 'Åre', href: '/destinations/are' },
      { label: 'Vemdalen', href: '/destinations/vemdalen' },
      { label: 'Trysil', href: '/destinations/trysil' },
      { label: 'Hemsedal', href: '/destinations/hemsedal' },
      { label: 'Hammarbybacken', href: '/destinations/hammarbybacken' },
    ],
  },
  {
    title: 'Book your trip',
    href: '/book',
    items: [
      { label: 'Accommodation', href: '/book/accommodation' },
      { label: 'Lodge and hotel', href: '/book/hotels' },
      { label: 'Affordable autumn packages', href: '/book/autumn-packages' },
      { label: 'Summer pass', href: '/book/summer-pass' },
      { label: 'Rent a bike', href: '/book/bike-rental' },
      { label: 'Private bike guide', href: '/book/bike-guide' },
    ],
  },
  {
    title: 'Experience mountain summer',
    href: '/summer',
    items: [
      { label: 'Cycling', href: '/summer/cycling' },
      { label: 'Climbing park', href: '/summer/climbing-park' },
      { label: 'River activities', href: '/summer/river-activities' },
      { label: 'SummerSki', href: '/summer/summerski' },
      { label: 'Summer events', href: '/summer/events' },
      { label: 'Spa and swimming', href: '/summer/spa' },
      { label: 'Hiking in the mountains', href: '/summer/hiking' },
      { label: 'Activities', href: '/summer/activities' },
    ],
  },
  {
    title: 'Trip types',
    href: '/trip-types',
    items: [
      { label: 'Weekend trips', href: '/trip-types/weekend' },
      { label: 'Senior', href: '/trip-types/senior' },
      { label: 'Group travel', href: '/trip-types/group' },
      { label: 'Conference travel', href: '/trip-types/conference' },
      { label: 'With caravan and motorhome', href: '/trip-types/caravan' },
      { label: 'Availability', href: '/trip-types/availability' },
      { label: 'Traveling with pets', href: '/trip-types/pets' },
      { label: 'Training trips', href: '/trip-types/training' },
      { label: 'Associations and clubs', href: '/trip-types/associations' },
    ],
  },
];

// Sidebar menu items (right side)
export const sidebarMenuItems: SidebarMenuItem[] = [
  {
    label: 'SkiStar Member',
    href: '/member',
  },
  {
    label: 'My page',
    href: '/my-page',
  },
  {
    label: 'Contact us',
    href: '/contact',
  },
  {
    label: 'Rent out your cottage',
    href: '/rent-cottage',
  },
  {
    label: 'skistarshop.com',
    href: 'https://skistarshop.com',
  },
];

// Season tabs
export const seasonTabs = [
  { label: 'Winter', value: 'winter' },
  { label: 'Summer', value: 'summer' },
];